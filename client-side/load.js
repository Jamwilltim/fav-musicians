window.addEventListener("load", async () => {
	try {
		const response = await fetch("http://127.0.0.1:8080/artists");
		if (!response.ok) {
			throw new Error("Response Status is" + response.status);
		}
		const artists = await response.json();

		for (let artist of artists) {
			const newartistDiv = document.createElement("div");
			newartistDiv.classList.add("artist");

			const newartistButton = document.createElement("button");
			newartistButton.classList.add("Artist-Button");
			newartistButton.id = artist.ArtistName;

			const newartistImage = document.createElement("img");
			newartistImage.src = artist.CoverImage;
			newartistImage.alt = artist.ArtistName;

			const newartistheading = document.createElement("h1");
			newartistheading.innerText = artist.ArtistName;

			newartistButton.appendChild(newartistImage);
			newartistDiv.appendChild(newartistButton);
			newartistDiv.appendChild(newartistheading);

			const artistSec = document.getElementById("artistsSec");
			artistSec.appendChild(newartistDiv);

			newartistButton.addEventListener("click", async function (event) {
				event.preventDefault();
				const artistName = this.getAttribute("id");
				try {
					let response = await fetch(`http://127.0.0.1:8080/artist?temp=${artistName}`);
					let body = await response.json();
					console.log(body);
					const { ArtistName, Quote, CoverImage, SpotifyUrl, Card3A, Card4, Card1, Card2 } = body;
					document.getElementById("Card1-front").querySelector("h1").innerHTML = `Who is ${ArtistName}?`;
					document.getElementById("Card1-back").innerHTML = "<p>" + Card1 + "</p>";
					document.getElementById("Card2-back").innerHTML = "<p>" + Card2 + "</p>";
					document.getElementById("Card1-back").style.padding = "10px";
					document.getElementById("Card2-back").style.padding = "10px";
					document.getElementById("Card3-back").querySelector("ul").innerHTML = makeList(Card3A);
					document.getElementById("Card4-back").querySelector("ul").innerHTML = makeList(Card4);
					document.getElementById("ArtistNameHeader").innerHTML = ArtistName;
					document.getElementById("artistImage").src = CoverImage;
					document.getElementById("Quote").innerHTML = Quote;
					document.getElementById("SpotifyPlaylist").src = SpotifyUrl;
					// document.getElementById("commentbox").innerHTML = makeComment(Comments);
					// document.getElementById("commentbox").style.padding = "10px";
				} catch (error) {
					alert(error);
				}
			});
		}
	} catch (error) {
		alert(error);
	}
});

function makeList(givenlist) {
	let listcontent = "";
	for (let album of givenlist) {
		listcontent += `<li>${album}</li>`;
	}
	return listcontent;
}

function makeComment(CommentList) {
	let commentcontent = "";
	for (let comment of CommentList) {
		commentcontent += `<p>${comment}</p>`;
	}
	return commentcontent;
}

document.querySelector(".navbar-brand").addEventListener("click", async function (event) {
	event.preventDefault();
	try {
		let homename = "Tory Lanez";
		let response = await fetch(`http://127.0.0.1:8080/artist?temp=${homename}`);
		let body = await response.json();
		console.log(body);
		const { ArtistName, Quote, CoverImage, SpotifyUrl, Card3A, Card4, Card1, Card2, Comments } = body;
		document.getElementById("Card1-front").querySelector("h1").innerHTML = `Who is ${ArtistName}?`;
		document.getElementById("Card1-back").innerHTML = "<p>" + Card1 + "</p>";
		document.getElementById("Card2-back").innerHTML = "<p>" + Card2 + "</p>";
		document.getElementById("Card1-back").style.padding = "10px";
		document.getElementById("Card2-back").style.padding = "10px";
		document.getElementById("Card3-back").querySelector("ul").innerHTML = makeList(Card3A);
		document.getElementById("Card4-back").querySelector("ul").innerHTML = makeList(Card4);
		document.getElementById("ArtistNameHeader").innerHTML = ArtistName;
		document.getElementById("artistImage").src = CoverImage;
		document.getElementById("Quote").innerHTML = Quote;
		document.getElementById("SpotifyPlaylist").src = SpotifyUrl;
		// document.getElementById("commentbox").innerHTML = makeComment(Comments);
		// document.getElementById("commentbox").style.padding = "10px";
	} catch (error) {
		alert(error);
	}
});
