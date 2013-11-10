var path = Npm.require('path');

Package.describe({
  summary: "Twitter's Bootstrap Packaged for Meteor, using Less"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files(path.join('lib', 'less', 'alerts.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'badges.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'breadcrumbs.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'button-groups.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'buttons.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'carousel.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'close.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'code.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'component-animations.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'dropdowns.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'forms.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'glyphicons.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'grid.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'input-groups.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'jumbotron.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'labels.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'list-group.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'media.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'mixins.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'modals.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'navbar.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'navs.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'normalize.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'pager.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'pagination.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'panels.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'popovers.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'print.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'progress-bars.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive-utilities.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'scaffolding.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'tables.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'theme.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'thumbnails.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'tooltip.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'type.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'utilities.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'variables.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'wells.lessimport'), 'server');

  api.add_files(path.join('lib', 'js', 'affix.js'), 'client');
  api.add_files(path.join('lib', 'js', 'alert.js'), 'client');
  api.add_files(path.join('lib', 'js', 'button.js'), 'client');
  api.add_files(path.join('lib', 'js', 'carousel.js'), 'client');
  api.add_files(path.join('lib', 'js', 'collapse.js'), 'client');
  api.add_files(path.join('lib', 'js', 'dropdown.js'), 'client');
  api.add_files(path.join('lib', 'js', 'modal.js'), 'client');
  api.add_files(path.join('lib', 'js', 'scrollspy.js'), 'client');
  api.add_files(path.join('lib', 'js', 'tab.js'), 'client');
  api.add_files(path.join('lib', 'js', 'tooltip-and-popover.js'), 'client');
  api.add_files(path.join('lib', 'js', 'transition.js'), 'client');

  api.add_files(path.join('lib', 'fonts', 'glyphicons-halflings-regular.eot'), 'client');
  api.add_files(path.join('lib', 'fonts', 'glyphicons-halflings-regular.svg'), 'client');
  api.add_files(path.join('lib', 'fonts', 'glyphicons-halflings-regular.ttf'), 'client');
  api.add_files(path.join('lib', 'fonts', 'glyphicons-halflings-regular.woff'), 'client');
});
