fetch-openapi:
	curl -fsSL https://api-docs.humanitec.com/openapi.json > ./docs/openapi.json

workaround-issue-18740:
	# Workaround https://github.com/OpenAPITools/openapi-generator/pull/18740
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
