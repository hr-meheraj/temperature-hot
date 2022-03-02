const getApi = () =>{
	const searchTxt = document.querySelector('#search-text').value;
	const url = `https://api.weatherapi.com/v1/current.json?q=${searchTxt}&key=08fd2aa2d5174a44bdc92610220203`;
	fetch(url)
	.then( res => res.json())
	.then( data => displayApi(data));
}

const displayApi = txt => {
 if(txt){
	 	// icons change 
 const icon = document.querySelector('#icon');
	icon.setAttribute("src", `${txt.current.condition.icon}`);


	// Text change
	const name = document.querySelector('#name');
	name.innerText = txt.location.name;
	// chang Celcius 
	const celcius = document.querySelector('#celcius');
	celcius.innerText = txt.current.temp_c;
	// Change cloud 
	const cloud = document.querySelector('#cloud');
cloud.innerText = txt.current.condition.text;
 }
}
