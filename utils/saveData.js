const fs = require('fs')
const fsx = require('fs-extra')
const paths = require(__dirname + '/../paths.json')

/* Naming */
let generate_id = name => 
    name.toLocaleLowerCase().split(' ').slice(0, 5).join('_')
    
/* External requests */
let createPost = (name, author, github) => {

    let date = new Date().toISOString().split('T')[0]
    let id = generate_id( name )

    addPostToMeta( id, {
        'github' : github,
        'name' : name,
        'author' : author,
        'date' : date, 
        'id' : id
    })

    fsx.copySync(__dirname + '/../' + paths.newPostTempalte, __dirname + '/../' + paths.postsFolder + `/${id}`)

}

/* File updates */

let addPostToMeta = (id, data) => {
    let file_data = require(__dirname + '/../' + paths.postsJson)
    file_data[id] = data
    let raw_output = JSON.stringify(file_data, null, 2)
    fs.writeFileSync(__dirname + '/../' + paths.postsJson, raw_output);
}



module.exports = { 
    createPost : createPost 
}