// ().then(e=>console.log(e))
getJSONData(LIBRO_URL + `${localStorage.getItem('libroID')}.json`)
    .then(e => {
        render(e.data)
    })
var container = document.getElementById('contenido')

const renderImg = (imagenes) => {
    let html = ``;

    for (let i = 1; i < imagenes.length; i++) {
        let image = imagenes[i];

        html += `
        <div class="carousel-item">
        <img src="${image}" class="d-block w-100" alt="...">
        </div>
        `
            ;
    }

    return html;

}

const render = async(data) => {
    console.log(data)
    console.log(localStorage.getItem('libroID'))
    container.innerHTML += `<div class="card book">
    <div class="d-flex justify-content-center">
        <div id="carouselExampleControls" class="carousel slide" style="width: 20vw; min-width: 300px;"  data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="${data.imagenes[0]}" class="d-block w-100" alt="...">
            </div>
            ${renderImg(data.imagenes)}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    <div class="card-body">
        <h2 class="card-title">${data.titulo}</h2>
        <h4 class="text-muted">${data.autor} - ${data.editorial}</h4>
        <p class="card-text">${data.descripcion}</p>
        <button class="btn btn-primary" type="submit"><a href="./cajon.html" class="text-white" style="text-decoration:none;" onclick='setCajon(${JSON.stringify(data)}, ${localStorage.getItem('libroID')})'>Ir al cajon</a></button>
    </div>
    </div>`
    relacionados(data.relacionados)
}


/* -------------------------------------------------------------------------- */
/*                                Relacionados                                */
/* -------------------------------------------------------------------------- */

const relacionados = async (libros) => {
    let catalogoDeLibrosRelacionados = document.getElementById('libros-relacionados__container')
    for (libroID of libros) {
        let libro = await getJSONData(LIBRO_URL + `${libroID}.json`)
            .then(e => {
                console.log(e)
                return e
            })
        catalogoDeLibrosRelacionados.innerHTML += `
        <div class="card m-4" style="width: 18rem; cursor:pointer;" onclick="redireccionar(${libroID})">
            <div class="d-flex justify-content-center"><img src="${libro.data.imagenes[0]}" style="width: 200px;" class="card-img-top" alt="..."></div>
            <div class="card-body">
                <h5 class="card-title">${libro.data.titulo}</h5>
            </div>
        </div>

        
        `
    }
}



// {
//     "titulo": "La tregua",
//     "isbn": "ISBN - 902 - 9234",
//     "editorial": "Editorial B",
//     "paginas": "300",
//     "autor": "Mario Benedetti",
//     "descripcion": "Narra la vida de Martín Santomé, un hombre viudo y cercano a jubilarse, que se enamora perdidamente de su compañera de trabajo.",
//     "imagenes":[
//         "https://danikho2020.github.io/img-biblioteca/1/1.jfif",
//         "https://danikho2020.github.io/img-biblioteca/1/2.jfif",
//         "https://danikho2020.github.io/img-biblioteca/1/3.jfif"
//     ],
//     "relacionados":[3,5]
// }

