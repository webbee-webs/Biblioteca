// ().then(e=>console.log(e))
getJSONData(LIBRO_URL + `${localStorage.getItem('libroID')}.json`)
    .then(e => {
        render(e.data)
    })
var container = document.getElementById('contenido')

const renderImg = (imagenes)=>{
    let html = ``
    for (img of imagenes) {
        html += `
        <div class="carousel-item active">
        <img src="${img}" class="d-block w-100" alt="...">
        </div>
        `
    }
    return(html)
}

const render = (data) => {
    container.innerHTML += `<div class="card">
    <<div id="carouselExampleSlidesOnly" style="width: 100px" class="card-img-top carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
    ${renderImg(data.imagenes)}
    </div>
    </div>
    <div class="card-body">
        <h2 class="card-title">${data.titulo}</h2>
        <h4 class="text-muted">${data.autor}</h4>
        <p class="card-text">${data.descripcion}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
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