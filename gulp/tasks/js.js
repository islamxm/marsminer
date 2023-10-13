import webpack from 'webpack-stream';


export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
        // .pipe(app.plugins.plumber(
        //     app.plugins.notify.onError({
        //         title: "JS",
        //         message: "Error: <%= error.message %>" 
        //     })
        // ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            entry: {
                app: app.path.src.js,
                home: app.path.src.jsModules.home,
                article: app.path.src.jsModules.article,
                cases: app.path.src.jsModules.cases,
                catalog: app.path.src.jsModules.catalog,
                contacts: app.path.src.jsModules.contacts,
                fw: app.path.src.jsModules.fw,
                key: app.path.src.jsModules.key,
                pay: app.path.src.jsModules.pay,
                serv: app.path.src.jsModules.serv,
                war: app.path.src.jsModules.war,
                blog: app.path.src.jsModules.blog,
                order: app.path.src.jsModules.order,

                header: app.path.src.jsModules.header,
                search: app.path.src.jsModules.search,
                menu: app.path.src.jsModules.menu,
                functions: app.path.src.jsModules.functions,
            },
            output: {
                filename: '[name].min.js',
            },
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream());
}