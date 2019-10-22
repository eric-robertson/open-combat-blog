const readlineSync = require('readline-sync');

const saveData = require('./utils/saveData.js')
const ui = require('./utils/ui.js')

let name = readlineSync.question('Title of post: ');
ui.displayAuthors( )
let author = readlineSync.question('Post author: ')
let github = readlineSync.question('Project Github Link: ');

saveData.createPost( name, author, github )
