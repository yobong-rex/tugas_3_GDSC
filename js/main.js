// let response = await fetch('https://jsonplaceholder.typicode.com/');
// let data = await response.json();
// document.getElementById('title').innerHTML = "dor";

const movie = [{nama:"shaman king 2021",image:'https://cdn.myanimelist.net/images/anime/1416/113270.jpg',description:'Shamans are extraordinary individuals with the ability to communicate with ghosts, spirits, and gods, which are invisible to ordinary people. The Shaman Fight—a prestigious tournament pitting shamans from all over the world against each other—is held every five hundred years, where the winner is crowned Shaman King. This title allows the current incumbent to call upon the Great Spirit and shape the world as they see fit.'},
{nama:"Mushoku Tensei: Isekai Ittara Honki Dasu",image:'https://cdn.myanimelist.net/images/anime/1028/117777.jpg',description:'After the mysterious mana calamity, Rudeus Greyrat and his fierce student Eris Boreas Greyrat are teleported to the Demon Continent. There, they team up with their newfound companion Ruijerd Supardia—the former leader of the Superds Warrior group—to form "Dead End," a successful adventurer party. Making a name for themselves, the trio journeys across the continent to make their way back home to Fittoa.'},
{nama:"Blue Period",image:'https://cdn.myanimelist.net/images/anime/1757/116931.jpg',description:'Second-year high school student Yatora Yaguchi is a delinquent with excellent grades, but is unmotivated to find his true calling in life. Yatora spends his days working hard to maintain his academic standing while hanging out with his equally unambitious friends. However, beneath his carefree demeanor, Yatora does not enjoy either activity and wishes he could find something more fulfilling.'},
{nama:"Mieruko-chan",image:'https://cdn.myanimelist.net/images/anime/1277/117155.jpg',description:'Miko is a typical high school student whose life turns upside down when she suddenly starts to see gruesome and hideous monsters. Despite being completely terrified, Miko carries on with her daily life, pretending not to notice the horrors that surround her. She must endure the fear in order to keep herself and her friend Hana out of danger, even if that means coming face to face with the absolute worst. Blending both comedy and horror, Mieruko-chan tells the story of a girl who tries to deal with the paranormal by acting indifferent toward it.'},
{nama:"Senpai ga Uzai Kouhai no Hanashi",image:'https://cdn.myanimelist.net/images/anime/1619/118820.jpg',description:"Igarashi Futuba's new job would be great if her senpai, Takeda Harumi, wasn't so incredibly annoying! Futuba hates his laugh, she hates how big he is, and she really hates that he treats her like a little kid. Just because Futuba is short and looks young doesn't make her a kid, and just because she spends so much time with Takeda doesn't mean she sees him as anything but an annoying senpai...or does she?!"},
{nama:"Kyoukai Senki",image:'https://cdn.myanimelist.net/images/anime/1772/116668.jpg',description:'In the year 2061 AD, Japan has lost its sovereignty. The Japanese people spend their days as oppressed citizens after being divided and ruled by the four major trade factions. The country became the forefront of the world following the deployment of AMAIM—a humanoid special mobile weapon—by each economic bloc.'},
];



const isi = document.getElementById('isi');

for (const[key,val] of Object.entries(movie)){
    isi.innerHTML += `<div class="movie-box">
    <div style='background: url("`+val.image+`"); height: 150px; background-size: cover; background-repeat: no-repeat; background-position: center;' ></div>
    <div class="movie-title" id="title">`+val.nama+` </div>
    <div class="readmore"><button class="search-button" onclick="desc(`+key+`)" >Readmore</button></div>
</div>`;
};
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");
    
function desc(index){
    document.getElementById('gambar').src = movie[index].image;
    document.getElementById('judul').innerHTML = movie[index].nama;
    document.getElementById('deskripsi').innerHTML = movie[index].description;
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


 