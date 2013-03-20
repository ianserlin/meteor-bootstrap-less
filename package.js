var path = require('path');

Package.describe({
  summary: "Twitter's Bootstrap Packaged for Meteor, using Less"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files(path.join('lib', 'less', 'accordian.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'alerts.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'breadcrumbs.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'button-groups.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'carousel.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'close.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'code.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'component-animations.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'dropdowns.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'forms.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'grid.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'hero-unit.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'labels-badges.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'layouts.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'media.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'mixins.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'modals.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'navbar.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'navs.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'pager.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'pagination.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'popovers.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'progress-bars.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'reset.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive-1200px-min.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive-767px-max.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive-768px-979px.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive-navbar.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive-utilities.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'responsive.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'scaffolding.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'sprites.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'tables.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'thumbnails.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'tooltip.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'type.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'utilities.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'variables.lessimport'), 'server');
  api.add_files(path.join('lib', 'less', 'wells.lessimport'), 'server');
  api.add_files(path.join('lib', 'js', 'bootstrap-affix.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-alert.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-button.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-carousel.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-collapse.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-dropdown.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-modal.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-popover.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-scrollspy.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-tab.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-tooltip.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-transition.js'), 'client');
  api.add_files(path.join('lib', 'js', 'bootstrap-typeahead.js'), 'client');
  api.add_files(path.join('lib', 'img', 'glyphicons-halflings.png'), 'client');
  api.add_files(path.join('lib', 'img', 'glyphicons-halflings-white.png'), 'client');
});
