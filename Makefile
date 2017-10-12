update: dist/ionicons.scss

dist/ionicons.scss:
	mkdir -p dist
	echo "/*! ionicons-inline (https://github.com/rstacruz/ionicons-inline) */\n" >> $@
	node support/svg-icons-to-scss.js \
		--prefix ion \
		--src "node_modules/ionicons/dist/svg/*.svg" \
		>> $@
