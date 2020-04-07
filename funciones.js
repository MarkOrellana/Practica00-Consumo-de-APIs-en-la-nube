var data;
function cargarDatos(txto){
    //txto = document.getElementById("searchText").value;
    console.log(txto);
//$.getJSON('http://www.omdbapi.com/?apikey=86584c34&s='+txto)
$.get("http://www.omdbapi.com/?s="+txto+"&apikey=86584c34&s", function(rawdata){
var rawstring =JSON.stringify(rawdata);
data =JSON.parse(rawstring);
var title = data.Search[4].Title;
var year = data.Search[4].Year; 
var type = data.Search[4].Type;
var poster = data.Search[4].Poster; 
var imdburl="https://www.imdb.com/title/"+data.Search[4].imdbID+"/";
var posterurl =data.Search[4].Poster;
document.getElementById('answer').innerHTML="<h1>"+title+"</h1><br> <img src= '"+posterurl+"'><br><p> Year Released: "+year+"</p><p>Type: "+type+"</p><p>Poster: <a href='"+poster+"'target='_blank'>"+poster+"</a></p><p> IMDB page: <a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p>"; }); }