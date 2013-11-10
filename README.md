# Bootstrap in Less
## Twitter's Bootstrap Packaged for Meteor, using Less

[Bootstrap](http://twitter.github.com/bootstrap) The sleek, intuitive, and powerful front-end framework for faster and easier web development.

Currently at Bootstrap version _3.0.2_

## How is this different from the official Meteor Bootstrap package?

The official package contains the compiled CSS files, meaning you don't get all the LESSy goodness like mixins, variables, etc that makes customizing Bootstrap super awesome. This unofficial package contains the source less files, but modified so that they can be loaded properly by Meteor's `less` package.

## How to install 

1. `npm install -g meteorite` (if not already installed)
2. `mrt add less`
3. `mrt add bootstrap-less`
4. From the root folder of your project, add this import line to your project's less file: `@import "packages/bootstrap-less/lib/less/bootstrap.lessimport";`

## Meteor-Bootstrap-Less License

MIT

## Twitter's Bootstrap License

See their [License](https://github.com/twitter/bootstrap)