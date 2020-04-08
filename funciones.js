function cargarDatos(txto){
    console.log(txto);
    var detalles="";
    if(txto==""){
        detalles+="<h1>No Informacion Disponible</h1>";
document.getElementById('answer').innerHTML=detalles;
    }else{
        if (window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();
        }else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function(){
            
            if(this.readyState ==4 && this.status ==200){
                var data =JSON.parse(this.responseText)
                data.Search.forEach(movie => {
                    console.log(movie.imdbID)
                    detalles+="<h1>"+
                    movie.Title+"</h1><br>"+
                    "<img src='"+movie.Poster+"'><br>"+
                    "<p> Year Released: "+movie.Year+"</p>"+
                    "<p> Type: "+movie.Type+"</p>"+
                    "<a href='index2.html' onclick=\"buscaId('"+movie.imdbID+"')\">Mas Detalles</a>";
                 });
                 document.getElementById('answer').innerHTML=detalles;
            }
        };
        xmlhttp.open("GET","http://www.omdbapi.com/?s="+txto+"&apikey=86584c34",true);
        xmlhttp.send();
    }
}
function buscaId(id){
    console.log(id);
}