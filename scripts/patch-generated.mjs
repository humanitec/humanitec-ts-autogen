// Post-generation patches for openapi-generator output.
//
// Each patch asserts that `find` is present exactly once, so the build fails
// loudly when a generator or schema change makes a workaround obsolete instead
// of silently leaving the generated code unpatched.
import { readFile, writeFile } from "node:fs/promises";

const patches = [
  {
    // The `GET /orgs/{orgId}/apps/{appId}/sets/{setId}` response is a oneOf of
    // SetResponse and PlainDeltaResponse. The generator merges every branch by
    // spreading them into one object, which:
    //   * does not type-check, because both branches declare `workloads` with
    //     incompatible types, so the merged object matches neither branch;
    //   * throws at runtime for SetResponse payloads, because
    //     PlainDeltaResponseFromJSONTyped calls `.map()` on `shared`, which is
    //     an object (not an array) in a SetResponse.
    // Discriminate on the branch-specific properties instead. Only SetResponse
    // has `id` and `version`, so instanceOfSetResponse identifies it uniquely.
    file: "src/generated/models/GetSet200Response.ts",
    find: `    return { ...PlainDeltaResponseFromJSONTyped(json, true), ...SetResponseFromJSONTyped(json, true) };`,
    replace: `    if (instanceOfSetResponse(json)) {
        return SetResponseFromJSONTyped(json, true);
    }
    return PlainDeltaResponseFromJSONTyped(json, true);`,
  },
];

let failed = false;

for (const { file, find, replace } of patches) {
  const contents = await readFile(file, "utf8");
  const occurrences = contents.split(find).length - 1;

  if (occurrences === 0 && contents.includes(replace)) {
    console.log(`${file}: already patched`);
    continue;
  }

  if (occurrences !== 1) {
    console.error(
      `${file}: expected 1 occurrence of the patch target, found ${occurrences}`,
    );
    failed = true;
    continue;
  }

  await writeFile(file, contents.replace(find, replace));
  console.log(`${file}: patched`);
}

if (failed) {
  process.exit(1);
}
