var path = require('path');

Package.describe({
  summary: "Twitter's Bootstrap Packaged for Meteor, using Less"
});

Package.on_use(function (api) {
  api.use('jquery');
  api.add_files(path.join('lib', 'less', 'accordian.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'alerts.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'breadcrumbs.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'button-groups.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'carousel.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'close.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'code.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'component-animations.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'dropdowns.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'forms.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'grid.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'hero-unit.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'labels-badges.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'layouts.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'media.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'mixins.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'modals.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'navbar.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'navs.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'pager.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'pagination.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'popovers.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'progress-bars.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'reset.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'responsive-1200px-min.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'responsive-767px-max.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'responsive-768px-979px.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'responsive-navbar.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'responsive-utilities.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'responsive.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'scaffolding.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'sprites.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'tables.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'thumbnails.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'tooltip.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'type.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'utilities.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'variables.lessimport'), 'client');
  api.add_files(path.join('lib', 'less', 'wells.lessimport'), 'client');
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

  // IAN - Overrides are imported at the bottom of bootstrap.lessimport to fix the standard
  // glyphicon icon paths
  api.add_files(path.join('lib', 'less', 'bootstrap-override.lessimport'), 'client');
});
