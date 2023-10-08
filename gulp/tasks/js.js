import webpack from 'webpack-stream';


export const js = () => {
    return app.gulp.src(app.path.src.allJs, { sourcemaps: app.isDev })
        // .pipe(app.plugins.plumber(
        //     app.plugins.notify.onError({
        //         title: "JS",
        //         message: "Error: <%= error.message %>" 
        //     })
        // ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            entry: {
                header: app.path.src.allJs[0],
                parallax: app.path.src.allJs[1]
            },
            output: {
                filename: '[name].min.js',
            },
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}