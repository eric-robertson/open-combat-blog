/* Generates the hbs templates for the whole site */
const paths = require('../paths.json')
const Handlebars = require('handlebars')
const fs = require('fs')

Handlebars.registerPartial( 'header', fs.readFileSync(paths.HBSHeader, 'utf8'))
Handlebars.registerPartial( 'footer', fs.readFileSync(paths.HBSFooter, 'utf8'))
Handlebars.registerPartial( 'comments', fs.readFileSync(paths.HBSComments, 'utf8'))

let getPostPageTemplate = () => 
    Handlebars.compile( fs.readFileSync(paths.HBSPost, 'utf8'))

let getHomePageTemplate = () =>
    Handlebars.compile( fs.readFileSync(paths.HBSHome, 'utf8'))

module.exports = { 
    getPostPageTemplate : getPostPageTemplate,
    getHomePageTemplate : getHomePageTemplate
}