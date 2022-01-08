const mix = require('laravel-mix');

mix.options({
  processCssUrls: false
});

mix.disableNotifications();

mix.js('assets/js/app.js', 'assets/dist');

mix.sass('assets/styles/app.scss', 'assets/dist');
mix.sass('assets/styles/highlighter.scss', 'assets/dist');
