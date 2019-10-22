const fs = require('fs')

const paths = require('../paths.json')
const hbsLoader = require('./hbsTemplating.js')

const postData = require('../meta/posts.json')
const postIds = Object.keys( postData ).sort( (a,b) => postData[a].data > postData[b].date ? 1 : -1 ).splice(0, 4)

const home_template = hbsLoader.getHomePageTemplate()

let pageRendered = home_template ( { posts: postIds.map( id => postData[id] ) } )

fs.writeFileSync(`${paths.indexPage}`, pageRendered)
