const LIBROS_URL = "https://danielk2020.github.io/biblioteca/libros.json";
const LIBRO_URL = "https://danikho2020.github.io/libros-biblioteca/" //+id.json

function getJSONData(url) {
  let result = {};
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .then(function (response) {
      result.status = 'ok';
      result.data = response;
      return result;
    })
    .catch(function (error) {
      result.status = 'error';
      result.data = error;
      return result;
    });
}

function redireccionar(id) {
  localStorage.setItem("libroID", id);
  window.location = "ver-libro.html";
}

/* ------------------------------ Cajon Handler ----------------------------- */

const getCajon = () => {
  let str = localStorage.getItem('cajon')
  let obj = JSON.parse(str) || {}
  return obj
}

const setCajon = (obj, id) => {
  console.log(obj + 'guardar en ' + id)
  let cajon = getCajon()
  cajon[`id${id}`] = obj
  let str = JSON.stringify(cajon)
  localStorage.setItem('cajon', str)
}

const clearCajon =()=>{
  localStorage.setItem('cajon',JSON.stringify({}))
}