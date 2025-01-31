const mix = require('laravel-mix');

mix.options({
  processCssUrls: false
});

mix.disableNotifications();

mix.js('assets/js/app.js', 'assets/dist');
mix.js('assets/js/docs.js', 'assets/dist');

mix.postCss('assets/styles/app.css', 'assets/dist', [
  require('tailwindcss'),
  require('autoprefixer')
]);
mix.postCss('assets/styles/highlighter.css', 'assets/dist');
