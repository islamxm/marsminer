import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
const srcFolder = `./#src`;

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        jsModules: {
          home: `${srcFolder}/js/pages/home.js`,
          article: `${srcFolder}/js/pages/article.js`,
          cases: `${srcFolder}/js/pages/cases.js`,
          catalog: `${srcFolder}/js/pages/catalog.js`,
          contacts: `${srcFolder}/js/pages/contacts.js`,
          fw: `${srcFolder}/js/pages/fw.js`,
          key: `${srcFolder}/js/pages/key.js`,
          pay: `${srcFolder}/js/pages/pay.js`,
          serv: `${srcFolder}/js/pages/serv.js`,
          war: `${srcFolder}/js/pages/war.js`,
          blog: `${srcFolder}/js/pages/blog.js`,
          order: `${srcFolder}/js/pages/order.js`,

          //components
          header: `${srcFolder}/js/modules/header.js`,
          menu: `${srcFolder}/js/modules/menu.js`,
          search: `${srcFolder}/js/modules/search.js`,
          functions: `${srcFolder}/js/modules/functions.js`,
        },
        js: `${srcFolder}/js/app.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,    
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, 
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: `test` // имя папки в удаленном сервере куда надо залить 
}