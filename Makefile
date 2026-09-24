fetch-openapi:
	curl -fsSL https://api-docs.humanitec.com/openapi.json > ./docs/openapi.json

generate:
	rm -rf ./src/generated
	npx openapi-generator-cli generate --generator-key humanitec

build:
	# See https://evertpot.com/universal-commonjs-esm-typescript-packages/
	rm -rf cjs/ esm/
	npx tsc --module commonjs --outDir cjs/
	echo '{"type": "commonjs"}' > cjs/package.json
	npx tsc --module es2022 --outDir esm/
	echo '{"type": "module"}' > esm/package.json
