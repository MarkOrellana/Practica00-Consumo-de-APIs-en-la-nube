//var peli=null;
var numSiguiente = 1
var totalPelis = 0

function eventoBtn() {
    const searchText = document.getElementById('searchText');

    let url = `http://www.omdbapi.com/?s=${searchText.value}&apikey=86584c34&plot=full`;
    cargarDatos(url);
}
function cargarDatos(txto) {
    console.log(txto);
    var detalles = "";
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            data.Search.forEach(movie => {
                //console.log(movie.imdbID)
                detalles +=
                    "<div class=modal-dialog >" +
                    "<div class=modal-content md>" +
                    "<div class=modal-body><h1>" +
                    movie.Title + "</h1><br>" +
                    "<img class=card-img-top src='" + movie.Poster + "'><br>" +
                    "<p class=card-text> Year Released: " + movie.Year + "</p>" +
                    "<p class=card-text> Type: " + movie.Type + "</p>" +
                    "<a class=btn btn-primary btn-lg btn purple-gradient data-toggle=modal href='#dat' onclick=\"buscaId('" + movie.imdbID + "')\">Mas Detalles</a>" + "</div>" + "</div>" + "</div>";
            });
            document.getElementById('answer').innerHTML = detalles;
        } else {
            document.getElementById('answer').innerHTML = "<h2> No se a encontrado resultados. </h2>"
        }
    };
    xmlhttp.open("GET", txto, true);
    xmlhttp.send();

}
function buscaId(id) {
    console.log(id);
    let deta = '';
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const peli = JSON.parse(this.responseText)
            //console.log(peli);
            deta = `
            <div class="modal-dialog">
            <div class="modal-content md">
                <div class="modal-header">
                    <h4 class=modal-title>Title:${peli.Title}</h4>
                </div>
                <div class="modal-body">
                <p class=card-text>Year: ${peli.Year}</p>
                <p class=card-text>Released: ${peli.Released}</p>
                <p class=card-text>RunTime: ${peli.Runtime}</p>
                <p class=card-text>Genre: ${peli.Genre}</p>
                <p class=card-text>Director: ${peli.Director}</p>
                <p class=card-text>Writer: ${peli.Writer}</p>
                <p class=card-text>Actors: ${peli.Actors}</p>
                <p class=card-text>Plot: ${peli.Plot}</p>
                <p class=card-text>Language: ${peli.Language}</p>
                <p class=card-text>Country: ${peli.Country}</p>
                <p class=card-text>Awards: ${peli.Awards}</p>
                <p class=card-text>Metascore: ${peli.Metascore}</p>
                <p class=card-text>imdbRating: ${peli.imdbRating}</p>
                <p class=card-text>DVD: ${peli.DVD}</p>
                <p class=card-text>imdbVotes: ${peli.imdbVotes}</p>

                </div>
            </div>
        </div>`;
            //console.log(deta);

            document.getElementById("dat").innerHTML = deta
        }
    };
    xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=86584c34&i=" + id, true);
    xmlhttp.send();
}

function pag(pg) {
    var titulo = document.getElementById("searchText").value;
    numSiguiente = numSiguiente + (pg);
    console.log(numSiguiente)


    if (numSiguiente <= 1) {
        numSiguiente = 1
        document.getElementById('back').classList.add("disabled");

    } else {
        document.getElementById('back').classList.remove("disabled");
    }

    var totalPel = totalPelis / 10
    console.log(totalPel)

    let html = `
        <div style="display: flex; align-items: center; justify-content: center;" id="numPg">
                <li class="previous">
                    <a class="page-link"> Pagina ${numSiguiente}/${Math.round(totalPel)} </a>
                </li>
        </div>
    `;
    document.querySelector('#numPg').innerHTML = html

    let url = `http://www.omdbapi.com/?apikey=d079c6fd&s=${titulo}&page=${numSiguiente}`
    //console.log(url)
    cargarDatos(url)
}
