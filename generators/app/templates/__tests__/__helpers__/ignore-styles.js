// a script that is run whenever Mocha
// finds a css, scss, or whatever file
// ... which is nothing!
// @link http://stackoverflow.com/questions/32236443/mocha-testing-failed-due-to-css-in-webpack
function donothing() {
  return null;
}

require.extensions['.css'] = donothing;
require.extensions['.less'] = donothing;
require.extensions['.scss'] = donothing;
