update: dist/ionicons.scss

dist/ionicons.scss:
	mkdir -p dist
	node support/svg-icons-to-scss.js \
		--prefix ion \
		--pkg './package.json' \
		--src "node_modules/ionicons/dist/svg/*.svg" \
		> $@
