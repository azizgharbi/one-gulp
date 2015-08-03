'use strict';

module.exports = function (one) {

    one.defaultOptions.images = {
        exts: ['gif', 'jpg', 'jpeg', 'png', 'svg'],
        minify: {
            progressive: true,
            interlaced: true
        }
    };

    one.sources.images = () =>
        one.src.fromExts(one.options.src, one.options.images.exts);

    one.transforms.images = {
        minify: images => {
            let imagemin = require('gulp-imagemin');

            return images.pipe(imagemin(one.options.images.minify));
        }
    }
};