
const fs = require('fs')
const sass = require('sass');

const paths = require('../paths.json')

let result = sass.renderSync({ file: paths.sassStyle }).css.toString()
fs.writeFileSync( paths.cssStyle, result )