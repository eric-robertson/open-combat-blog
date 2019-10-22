const showdown = new (require('showdown')).Converter()
const fs = require('fs')

const paths = require('../paths.json')
const hbsLoader = require('./hbsTemplating.js')

const postData = require('../meta/posts.json')
const postIds = Object.keys( postData )

const post_template = hbsLoader.getPostPageTemplate()

/* Generate each */
postIds.forEach( id => {

    let mdContent = fs.readFileSync(`${paths.postsFolder}/${id}/post.md`, 'utf8')
    let mdRendered = showdown.makeHtml( mdContent )
    let post_data = postData[id]
    post_data['html'] = mdRendered

    let pageRendered = post_template( post_data )

    fs.writeFileSync(`${paths.postsFolder}/${id}/index.html`, pageRendered)

})