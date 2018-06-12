//I have written this function which extracts the id we put into the link
//let is the same as var
var id = splitPath(window.location.search)
function splitPath(path){
	let param = path.split('=')
	console.log(param);
	return param[1]
}

console.log(id);
console.log(window.location.search);

//use the id of the movie (variable id) to construct the api request to get more information about it.
//youll need to use the TMDB API docs again
//https://developers.themoviedb.org/3/
//call the function printPage() passing the data as the argument
$.get('https://api.themoviedb.org/3/tv/'+id+'?api_key=c773362edcce3dd87050f617bf8a9b24', function(data){
	console.log(data);
	showPage(data);
})

//Now create an info page for the tv show. The page should have:
//A big hero image using background_image
//a title
//genres
//An overview

function showPage(data){
	console.log(data);
	var heroImage = document.createElement ('img')
	heroImage.className = 'heroImage'
	heroImage.src = 'http://image.tmdb.org/t/p/original/' + data.backdrop_path
	document.body.appendChild (heroImage);
}
