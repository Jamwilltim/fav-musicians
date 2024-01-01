const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('client-side'));
app.use(express.json());

const artistinfo = require('./artist-info.json')


app.get('/artist', function(req,resp){
    let key = req.query.temp.toLowerCase(); 
    let found = false;
    for (let artist of artistinfo){
        if (artist.ArtistName.toLowerCase() == key){
            resp.send(artist);
            found = true; 
            break;
        }
    }

    if (!found){
        resp.status(404).json({ error: 'Artist not found' });
    }

});

app.post('/add-comments', function(req,resp){
    const Comment = req.body.Comment;
    const ArtistName = req.body.ArtistName;
    const artisttofind = artistinfo.find(artist => artist.ArtistName == ArtistName);

    if (!artisttofind){
        resp.status(404).json({ error: 'Artist not found' });
    } else {
        artisttofind.Comments.push(Comment);
        fs.writeFileSync('./artist-info.json', JSON.stringify(artistinfo));
        resp.send(req.body);
    }
});


module.exports = app;

