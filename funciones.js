var peli=null;
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
                    //console.log(movie.imdbID)
                    detalles +=
                    "<div class=modal-dialog >"+
                    "<div class=modal-content md>"+
                    "<div class=modal-body><h1>"+
                    movie.Title+"</h1><br>"+
                    "<img class=card-img-top src='"+movie.Poster+"'><br>"+
                    "<p class=card-text> Year Released: "+movie.Year+"</p>"+
                    "<p class=card-text> Type: "+movie.Type+"</p>"+
                    "<a class=btn btn-primary btn-lg btn purple-gradient data-toggle=modal onclick=buscaId('"+movie.imdbID+"') href='#ventana1'>Mas Detalles</a>"+"</div>"+"</div>"+"</div>";
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
    var deta="";
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){        
        if(this.readyState ==4 && this.status ==200){
            const peli=JSON.parse(this.responseText)
            console.log(peli);
            deta +=
            "<div class=modal-dialog><div class=modal-content md><div class=moda-header>"+
            "<h4 class=modal-title>Title: "+peli.Title+"</h4>"+
            "</div>"+
            "<div class=modal-body>"+
            "<p class=card-text>Year: "+peli.Year+"</p>"+
            "<p class=card-text>Rated: "+peli.Rated+"</p>"+
            "<p class=card-text>Released: "+peli.Released+"</p>"+
            "<p class=card-text>Runtime: "+peli.Runtime+"</p>"+
            "<p class=card-text>Genre: "+peli.Genre+"</p>"+
            "<p class=card-text>Director: "+peli.Director+"</p>"+
            "<p class=card-text>Writer: "+peli.Writer+"</p>"+
            "<p class=card-text>Rated: "+peli.Actors+"</p>"+
            "<p class=card-text>Awards: "+peli.Awards+"</p>"+
            "</div></div></div>";

            document.querySelector('#ventana1').innerHTML=deta;
        }
    };
    xmlhttp.open("GET","http://www.omdbapi.com/?i="+id+"&apikey=86584c34",true);
    xmlhttp.send();
}
