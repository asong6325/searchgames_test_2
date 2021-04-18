var button_1 = document.querySelector("#button_1")
var url = ""
var sort_1 = document.querySelector("#sort_1")
var results = document.querySelector("#results")
var search_1 = document.querySelector("#search")
var search_2 = document.querySelector("#search_button")
var error_1 = document.querySelector('#error')
function getGameData(){
	console.log("button is pressed")
	const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onload = dataloaded

    xhr.addEventListener("readystatechange", function () {
    error_1.style.display = "none"
    if (xhr.status == 404||xhr.responseText == "" ){
    	error_1.style.display = "block"

    }
	if (this.readyState === this.DONE) {
    	
    	
		console.log(this.responseText);

	}
    });

    xhr.open("GET", "https://free-to-play-games-database.p.rapidapi.com/api/games"+url);
    xhr.setRequestHeader("x-rapidapi-key", "6561c732famshd945c364f0e061ep10345ajsn969306475305");
    xhr.setRequestHeader("x-rapidapi-host", "free-to-play-games-database.p.rapidapi.com");

    xhr.send(data);

}
function sortList(){
	if(url==""){
		url+="?"
	}else{
		url+="&"
	}
	url += "sort-by=alphabetical"
	getGameData()
}
function dataloaded(e){
	console.log("button is pressed")
	results.innerHTML = ""
    var xhr = e.target
    let obj = JSON.parse(xhr.responseText)
    //let list = obj.list

    for (let i=0;i<obj.length;i++){
        let result = obj[i]
        let game = result.title
        let image = result.thumbnail
        let link = result.game_url
        let div = document.createElement("div");
        div.classList.add("card")
        let a = document.createElement("a");
        div.appendChild(a)
        a.href = link
        a.target = "_blank"
        let img = document.createElement("img");
        img.src = image
        img.alt = game
        a.appendChild(img)

        let h3 = document.createElement("h3");
        h3.innerHTML = game
        div.appendChild(h3)

        results.appendChild(div)
        
    }
    url=""
}

function searh_fun(){
	if(url==""){
		url+="?"
	}else{
		url+="&"
	}

	url+="category="+search_1.value
	getGameData()

}
button_1.onclick = getGameData
sort_1.onclick = sortList
search_2.onclick = searh_fun
 