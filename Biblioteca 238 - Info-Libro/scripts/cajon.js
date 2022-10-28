var container = document.getElementById('container')


var removeElement = async (id) => {
    let data = await getCajon()
    delete data[id]
    let str = JSON.stringify(data)
    localStorage.setItem('cajon', str)
    render()
}

var render = async () => {
    container.innerHTML = ''
    let data = await getCajon()
    console.log(data)
    for (id in data) {
        container.innerHTML += `
        <li class="list-group-item" aria-current="true">${data[id].titulo} 
        <button class="btn text-danger" onclick="removeElement('${id}')">Eliminar</button>
        </li>
        `
    }
    subprocesos()
}
function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
}

const subprocesos = () => {
    let diasRestantes = 0
    let cajon = getCajon()
    for (libro in cajon) {
        diasRestantes += cajon[libro].paginas / 50
        console.log(diasRestantes)
    }
    document.querySelector('#cantDias').innerHTML = diasRestantes

    var d = new Date();
    d = sumarDias(d, diasRestantes)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelector('#fechaEntrega').innerHTML = d.toLocaleDateString('uy-UY', options);
    return diasRestantes
}

// {"titulo": "La tregua",
//         "isbn": "ISBN - 902 - 9234",
//             "editorial": "Editorial B",
//                 "paginas": "300",
//                     "autor": "Mario Benedetti",
//                         "descripcion": "Narra la vida de Martín Santomé, un hombre viudo y cercano a jubilarse, que se enamora perdidamente de su compañera de trabajo.",
//                             "imagenes": [
//                                 "https://danikho2020.github.io/img-biblioteca/1/1.jfif",
//                                 "https://danikho2020.github.io/img-biblioteca/1/2.jfif",
//                                 "https://danikho2020.github.io/img-biblioteca/1/3.jfif"
//                             ],
//                                 "relacionados": [3, 5]
// }
render()

const validarCajon = ()=>{
    let valido = true
    subprocesos() > 15 ? valido = false : console.log('todo ok');
    let cajon = getCajon()
    Object.keys(cajon).length > 3 ? valido = false : console.log('todo ok');
    valido ? console.log('todos los datos son correctos') : document.getElementById('alert-libros').classList.remove('d-none');
    return valido
}

document.getElementById('solicitud').addEventListener('submit',(e)=>{
    if(! validarCajon()){
        console.log('no es valido')
        e.preventDefault()
    }
})

var ticket = async () => {
    let data = await getCajon()
    for (id in data) {
        document.getElementById("ticket-container").innerHTML = `
        <li class="list-group-item" aria-current="true">${data[id].titulo} 
        <button class="btn text-danger" onclick="removeElement('${id}')">Eliminar</button>
        </li>
        `
    }
}

