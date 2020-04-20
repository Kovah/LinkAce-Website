const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.options({
  processCssUrls: false
});

mix.disableNotifications();

mix.js('assets/js/app.js', 'assets/dist')
  .polyfill({
    enabled: true,
    useBuiltIns: 'usage',
    targets: ['> 2%']
  });

mix.sass('assets/styles/app.scss', 'assets/dist');
