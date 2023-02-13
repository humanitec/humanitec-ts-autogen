fetch-openapi:
	curl -fsSL https://api-docs.humanitec.com/openapi.json > ./docs/openapi.json

generate:
	rm -rf ./src/generated/apis ./src/generated/models
	npx openapi-generator-cli generate -c /local/generate.config.json -i /local/docs/openapi.json -g typescript-axios -o /local/src/generated
