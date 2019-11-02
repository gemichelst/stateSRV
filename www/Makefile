stylus:
	cd src && ../lib/node_modules/stylus/bin/stylus -m --include ../lib/node_modules -u jeet -u axis -u autoprefixer-stylus -u rupture stylus/*.styl -o ../assets/css/ -w
html:
	cd src && ../lib/node_modules/pug-cli/index.js -P -w pug/*.pug -o ../
webpack:
	rm -R dist/ && mkdir -p dist/webpack && cp ./src/*.html ./dist/ && cd lib && ./node_modules/.bin/webpack --config ./webpack.config.js
install:
	cd lib && npm install --save-dev
zip:
	zip -r stateSRV-www.zip ./
