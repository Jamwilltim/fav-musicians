const CommentButton = document.getElementById("comment")
CommentButton.addEventListener("click", (event) => {
	var inputField = document.getElementById('comment-input');
	var boxContent = document.querySelector('.box-content');

	event.preventDefault();
	var inputText = inputField.value.trim();

	if (inputText !== '') { 
		var paragraph = document.createElement('p');
		paragraph.textContent = inputText; 

		boxContent.appendChild(paragraph); 
		inputField.value = '';
	};
});

