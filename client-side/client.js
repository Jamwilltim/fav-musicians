document.querySelectorAll('.Artist-Button').forEach(button => {
    button.addEventListener('click', async function (event) {
        event.preventDefault();
        const artistName = this.getAttribute('id');
        try {
            let response = await fetch(`http://127.0.0.1:8080/artist?temp=${artistName}`);
            let body = await response.json(); 
            const {ArtistName, Card1, Card2, Card3A, Card4, Quote, CoverImage, SpotifyUrl, Comments} = body
            document.getElementById('Card1-front').querySelector('h1').innerHTML = `Who is ${ArtistName}?`;
            document.getElementById('Card1-back').innerHTML = Card1;
            document.getElementById('Card2-back').innerHTML = Card2;
            document.getElementById('Card1-back').style.padding = '10px';
            document.getElementById('Card2-back').style.padding = '10px';
            document.getElementById('Card3-back').querySelector('ul').innerHTML = makeList(Card3A);
            document.getElementById('Card4-back').querySelector('ul').innerHTML = makeList(Card4);
            document.getElementById('ArtistNameHeader').innerHTML = ArtistName;
            document.getElementById('artistImage').src = CoverImage;
            document.getElementById('Quote').innerHTML = Quote;
            document.getElementById('SpotifyPlaylist').src = SpotifyUrl;
            document.getElementById("commentbox").innerHTML = makeComment(Comments);
            document.getElementById("commentbox").style.padding = '10px';
        } catch (error) {
            alert(error);
        }
    })
})

function makeList(givenlist){
    let listcontent = '';
    for (let album of givenlist) {
        listcontent += `<li>${album}</li>`;
    }
    return listcontent;
}

function makeComment(CommentList){
    let commentcontent = '';
    for (let comment of CommentList){
        commentcontent += `<p>${comment}</p>`;
    }
    return commentcontent;
}


const form = document.getElementById("searchform")

form.addEventListener("submit", async function (event){
    event.preventDefault();
    try{
        let artist = document.getElementById("artisttofind").value;
        let response = await fetch(`http://127.0.0.1:8080/artist?temp=${artist}`);
        if (!response.ok){
            throw new Error('Artist not found')
        }
        let body = await response.json();
        const {ArtistName, Card1, Card2, Card3A, Card4, Quote, CoverImage, SpotifyUrl, Comments} = body
        document.getElementById('Card1-front').querySelector('h1').innerHTML = `Who is ${ArtistName}?`;
        document.getElementById('Card1-back').innerHTML = Card1;
        document.getElementById('Card2-back').innerHTML = Card2;
        document.getElementById('Card1-back').style.padding = '10px';
        document.getElementById('Card2-back').style.padding = '10px';
        document.getElementById('Card3-back').querySelector('ul').innerHTML = makeList(Card3A);
        document.getElementById('Card4-back').querySelector('ul').innerHTML = makeList(Card4);
        document.getElementById('ArtistNameHeader').innerHTML = ArtistName;
        document.getElementById('artistImage').src = CoverImage;
        document.getElementById('Quote').innerHTML = Quote;
        document.getElementById('SpotifyPlaylist').src = SpotifyUrl;
        document.getElementById("commentbox").innerHTML = makeComment(Comments);
        document.getElementById("commentbox").style.padding = '10px';
        } catch (error) {
            alert(error);
    }
})
