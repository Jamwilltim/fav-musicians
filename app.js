const express = require('express');
const app = express();

app.use(express.static('client-side'));
app.use(express.json());

const artistinfo = require('./artist-info.json')

app.get('/artist', function(req,resp){
    let key = req.query.temp; 
    for (let artist of artistinfo){
        if (artist.ArtistName == key){
            resp.send(artist);
        }
    }

});

module.exports = app;

