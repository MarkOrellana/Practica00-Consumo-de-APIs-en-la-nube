function cargarDatos(txto){
    //txto = document.getElementById("searchText").value;
    console.log(txto);
$.getJSON('http://www.omdbapi.com/?apikey=86584c34&s='+txto)
}