Package.describe({
  summary: "Meteor smart package for imagemagick.",
  version: "0.9.1",
  git: "https://github.com/classcraft/classcraft-imagemagick"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('classcraft:imagemagick.js', 'server');
  api.export('Imagemagick', 'server');
});

Npm.depends({
  "imagemagick": "0.1.3"
});
