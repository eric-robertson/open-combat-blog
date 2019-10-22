const paths = require(__dirname +'/../paths.json' )

const authors = require( __dirname + '/../' + paths.authorsJson )
const authorsNames = Object.keys(authors).map( e => authors[e].name )

let displayList = list => 
    list.forEach ( (e,i) => console.log( `[${i}] - ${e}`))

let displayAuthors = () => displayList( authorsNames )

module.exports = { displayAuthors : displayAuthors }