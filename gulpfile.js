var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.assetsPath = "assets";
elixir.config.sourcemaps = false;
elixir.config.publicPath = "www";



elixir(function(mix) {
    mix.less('app.less');
});