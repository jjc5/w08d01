const express = require('express');
const app = express();
const fs = require('fs');

app.engine('jason', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views')
app.set('view engine', 'jason')

app.get('/', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'999'})
})

app.get('/about', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'Jarad Anthony Higgins, known professionally as Juice Wrld, was an American rapper, singer, and songwriter from Chicago.'})
})

app.get('/albums', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'GB&GR, Death Race For Love, Legends Never Die'})
})

app.get('/streams', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'Juice has 31.8 M monthly listeners.'})
})

app.get('/eps', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'Juiced Up The Ep, Twilight Zone EP, Affliction, Heartbroken in Hollywood 999, JuiceWrld 999, BingeDrinkingMusic, Nothings Different, Too Soon, Up Next Session: Juice Wrld'})
})

app.get('/mixtapes', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'What is Love, Wrld on Drugs'})
})

app.get('/topstreamed', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'Top streamed song is Lucid Dreams'})
})

app.get('/girlfriend', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'Ally Lotti'})
})

app.get('/genre', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'Heroin Music'})
})

app.get('/dogs', (req, res) => {
  res.render('template', {title:'GOAT', message:'Juice WRLD', content:'River and Caplyn'})
})




app.listen(3000, () => console.log('hello i am listening on port 3000'))
