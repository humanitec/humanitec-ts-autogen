fetch-openapi:
	curl -fsSL https://api-docs.humanitec.com/openapi.json > ./docs/openapi.json

workaround-issue-18740:
	# Originally a workaround for https://github.com/OpenAPITools/openapi-generator/pull/18740,
	# which generated uncompilable code for a oneOf mixing a primitive and a $$ref.
	# The generator handles that case since 7.25.0, but we keep dropping the `string`
	# branch so that createDelta() stays typed as DeltaResponse instead of
	# DeltaResponse | string, which callers would have to narrow.
	yq 'del(.paths["/orgs/{orgId}/apps/{appId}/deltas"].post.responses["200"].content["application/json"].schema.oneOf.[] | select(.type == "string"))' ./docs/openapi.json > ./docs/openapi.patched.json

generate: workaround-issue-18740
	rm -rf ./src/generated
	npx openapi-generator-cli generate --generator-key humanitec

build:
	# See https://evertpot.com/universal-commonjs-esm-typescript-packages/
	rm -rf cjs/ esm/
	npx tsc --module commonjs --outDir cjs/
	echo '{"type": "commonjs"}' > cjs/package.json
	npx tsc --module es2022 --outDir esm/
	echo '{"type": "module"}' > esm/package.json
