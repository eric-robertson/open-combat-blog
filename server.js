const express = require('express')
const app = express()
const port = 3000

app.use('/posts', express.static('posts'))
app.use('/imgs', express.static('images'))
app.use('/style', (req,res) => res.sendFile(__dirname + '/style/style.css'))

app.use('/github', (req,res) => res.redirect('https://github.com/Open-Combat') )
app.use('/about', (req,res) => res.redirect('/posts/about') )
app.use('/authors', (req,res) => res.redirect('/posts/authors') )

app.use('/', (req,res) => res.sendFile(__dirname + '/pages/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))