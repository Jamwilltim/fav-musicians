window.addEventListener('load', async () => {
    const AName = "Tory Lanez";
    try {
        let response = await fetch(`http://127.0.0.1:8080/artist?temp=${AName}`);
        let body = await response.json(); 
        const {ArtistName, Card1, Card2, Card3A, Card4, Quote, CoverImage, SpotifyUrl, Comments} = body;
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
});