
//call the TMDB API and fund the most watched tv shows.
// when you get the data pass only the ARRAY we need to the loop data folder
$.get('https://api.themoviedb.org/3/discover/tv?api_key=c773362edcce3dd87050f617bf8a9b24&language=en-US&sort_by=popularity.desc', function(data){
	//console.log(data.results);
	loopData(data.results);
})


//use a loop to call the function show an item, passing each individual item in the array across
function loopData(data){
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		data[i];
		showItem(data[i]);
	}
}

//in your HTML create a <section></section> with the ID of 'container'
//create elements and render them to the dom.
// each element should have an image and a title.


function showItem(tvshow){
	console.log(tvshow.id);
	var link = document.createElement('a')

	// we are going to link each item to its own page. to do this we need to access information about each item.
	// We'll us the ID the api provides and add it to the query string when we link to the info.html file

	link.href = 'info.html?item=' + tvshow.id

	var tvShowContainer = document.createElement('article')
	tvShowContainer.className='container'
	console.log(tvShowContainer);

	//now create a div with a background image ...
	//below is an example of how to do this. Change the variable name to make more sense and make sure you put the correct image link in.

	var image = document.createElement('img')
	image.className = 'tvShowImage';
	image.src = 'http://image.tmdb.org/t/p/w342' + tvshow.poster_path;

	//...
	//and put it inside the container using appendChild()
	//...
	// container.appendChild(image)

	tvShowContainer.appendChild (image)

	//now create another element, this time an h3 tag, and put it inside the container in the same way

	var title = document.createElement('H3')
	title.className = 'tvShowTitle';
	title.innerHTML = tvshow.name;

	tvShowContainer.appendChild (title)

	link.appendChild(tvShowContainer)

	var container = document.getElementById('container')
	container.appendChild(link)

	//in your index.html create a <section></section> with the ID of 'container'
	// create a variable which references the <section></section> you created in the html
	//...
	// var myHTMLElementName = document.getElementById('section')
	//...
	//then put the container inside the link using document.appendChild
	//...
	// link.appendChild(container)
	//then put the link inside your element using document.appendChild
	// myHTMLElementName.appendChild(link)


	//now you just need to add some style in css using the classes you gave the elements.

}
