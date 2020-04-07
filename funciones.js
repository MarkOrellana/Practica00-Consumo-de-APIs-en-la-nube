var data;
function cargarDatos(txto){
    //txto = document.getElementById("searchText").value;
    console.log(txto);
//$.getJSON('http://www.omdbapi.com/?apikey=86584c34&s='+txto)
$.get("http://www.omdbapi.com/?s="+txto+"&apikey=86584c34&s", function(rawdata){
var rawstring =JSON.stringify(rawdata);
data =JSON.parse(rawstring);
var title = data.Search[0].Title;
var year = data.Search[0].Year; 
var imdburl="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";

var posterurl =data.Search[0].Poster;
document.getElementById('answer').innerHTML="<h1>"+title+"</h1><br> <img src= '"+posterurl+"'><br><p> Year Released:"+year+"</p> <br> <p> IMDB page: <a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p>"; }); }