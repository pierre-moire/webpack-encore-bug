var Encore = require('@symfony/webpack-encore');

var CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/subfolder1/subfolder2/build/')
    
    // the public path used by the web server to access the previous directory
    .setPublicPath('/subfolder1/subfolder2/build')

    .addStyleEntry('another_css', './vendor/ocramius/proxy-manager/doc-template/css/main.css')
    // Copying something from elsewhere
    .addPlugin(
        new CopyWebpackPlugin([
            { from: './vendor/swiftmailer/swiftmailer/tests/_samples/files/swiftmailer.png', to: 'images' }
        ])
    )

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // uncomment to create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // uncomment to define the assets of the project
    .addStyleEntry('style', './assets/css/style.sass')
    .addEntry('main', './assets/js/main.js')

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    .enableVueLoader(function(vueOptions){
        if( !vueOptions.loaders ) vueOptions.loaders = {};
        vueOptions.loaders.sass = 'vue-style-loader!css-loader!sass-loader?indentedSyntax';

        return vueOptions;
    })

    // uncomment for legacy applications that require $/jQuery as a global variable
    // .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
