"use strict";

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        document.querySelector(".ir-arriba").classList.add("show");
    } else {
        document.querySelector(".ir-arriba").classList.remove("show");
    }
}
document.querySelector(".ir-arriba").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' //hace que suba mas suave
    });
});

function menu() {
    document.querySelector(".nav").classList.toggle("show");
}
document.querySelector(".btn-menu").addEventListener("click", menu);

function mostrarNumero() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let num3 = Math.floor(Math.random() * 10) + 1;
    const suma = num1 + num2 + num3;
    
    document.getElementById("captcha").innerHTML = num1 + " + " + num2 + " + " + num3 + " = " + "?";

    return suma;
}
function verificar(resultado) {

    let respuesta = parseInt(document.getElementById("respuesta").value);
    
    if (resultado === respuesta) {
        document.getElementById("resultado").innerHTML = "Correcto, eres humano.";
    }
    else {
        document.getElementById("resultado").innerHTML = "Respuesta incorrecta.";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let resultado = mostrarNumero();
    document.getElementById("btn-captcha").addEventListener("click", function () {
        verificar(resultado);
        resultado = mostrarNumero();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const body = document.body;
    
    toggleButton.addEventListener('click', function () {
        if (body.classList.contains('clear-mode')) {
            body.classList.replace('clear-mode', 'dark-mode');
            toggleButton.textContent = 'Modo claro';
        } else {
            body.classList.replace('dark-mode', 'clear-mode');
            toggleButton.textContent = 'Modo oscuro';
        }
    });
});
/////////////inicio///////////////////
let paginaInicio = document.querySelector(".use-ajax");
async function inicio(event) {
    event.preventDefault();
    try {
        let response = await fetch("pagina-inicio.html")
        if (response.ok) {
            let text = await response.text()
            paginaInicio.innerHTML = text;
        }
    } catch (error) {
        paginaInicio.innerHTML = "<h2>Error!</h2>";
    }
}
let ini = document.querySelector(".btn-inicio");
ini.addEventListener("click", inicio);

//////////////reservas////////////////
let reserva = document.querySelector(".use-ajax");
async function dispReserva(event) {
    event.preventDefault();
    try {
        let response = await fetch("reservas.html")
        if (response.ok) {
            let text = await response.text()
            reserva.innerHTML = text;
        }
    } catch (error) {
        reserva.innerHTML = "<h2>Error!</h2>";
    }
}
let res = document.querySelector(".btn-reserva");
res.addEventListener("click", dispReserva);

////////////servicios///////////////
let servicio = document.querySelector(".use-ajax");
async function servicios(event) {
    event.preventDefault();
    try {
        let response = await fetch("servicios.html")
        if (response.ok) {
            let text = await response.text()
            servicio.innerHTML = text;
        }
    } catch (error) {
        servicio.innerHTML = "<h2>Error!</h2>";
    }
}
let servi = document.querySelector(".btn-servicios");
servi.addEventListener("click", servicios);

/////////////cabañas//////////////////
let cabania = document.querySelector(".use-ajax");
async function cabanias(event) {
    event.preventDefault();
    try {
        let response = await fetch("cabanias.html")
        if (response.ok) {
            let text = await response.text()
            cabania.innerHTML = text;
        }
    } catch (error) {
        cabania.innerHTML = "<h2>Error!</h2>";
    }
}
let cab = document.querySelector(".btn-cabanias");
cab.addEventListener("click", cabanias);

///////////predio//////////////////
let elPredio = document.querySelector(".use-ajax");
async function predio(event) {
    event.preventDefault();
    try {
        let response = await fetch("predio.html")
        if (response.ok) {
            let text = await response.text()
            elPredio.innerHTML = text;
        }
    } catch (error) {
        elPredio.innerHTML = "<h2>Error!</h2>";
    }
}
document.querySelector(".btn-predio").addEventListener("click", predio);

////////contactenos/////////////////
let contacto = document.querySelector(".use-ajax");
async function contactenos(event) {
    event.preventDefault();
    try {
        let response = await fetch("contactenos.html")
        if (response.ok) {
            let text = await response.text()
            contacto.innerHTML = text;
        }
    } catch (error) {
        contacto.innerHTML = "<h2>Error!</h2>";
    }
}
document.querySelector(".btn-contacto").addEventListener("click", contactenos);

function contactoEnviado() {
    alert("Contacto enviado");
}
document.getElementById("#btn-agregar").addEventListener("click", contactoEnviado);

/////////////del_pinar///////////////////////
let cabania1 = document.querySelector(".use-ajax");
async function delPinar(event) {
    event.preventDefault();
    try {
        let response = await fetch("cabania1.html")
        if (response.ok) {
            let text = await response.text()
            cabania1.innerHTML = text;
        }
    } catch (error) {
        cabania1.innerHTML = "<h2>Error!</h2>";
    }
}
document.querySelector(".cab").addEventListener("click", delPinar);


/////GET cabanias////////////
async function datosCabanias(event) {
    const urlCabanias = "https://6670528d0900b5f8724a36ff.mockapi.io/api/cabanias";
    const lista = document.querySelector("#tabla_formulario");
    lista.innerHTML = "";
    event.preventDefault();
    try {
        let res = await fetch(urlCabanias); // GET a url
        let json = await res.json(); // res se hace objeto JSON
        console.log(json);
        for (const cabanias of json) {
            let nombre = cabanias.nombre;
            let capacidad = cabanias.capacidad;
            let valor = cabanias.valor;
            lista.innerHTML += `<h2>Cabaña</h2>
            <tr>
            <td>Cabaña: ${nombre}</td>
            </tr>
            <tr>
            <td>Capacidad: ${capacidad}</td>
                                </tr>
                                <tr>
                                <td>Valor: ${valor}</td>
                                </tr>`;
                            }
    } catch (error) {
        console.log(error);
    }

}
document.getElementById("btn-averiguar").addEventListener("click", datosCabanias);

////////GET personas///////////////


async function datosPersonas(event) {
    const urlPersonas = "https://6670528d0900b5f8724a36ff.mockapi.io/api/personas";
    const lista = document.querySelector("#tabla_formulario");
    lista.innerHTML = "";
    // const contenedor = document.getElementById("tabla_formulario");
    event.preventDefault();
    try {
        let res = await fetch(urlPersonas); // GET a url
        let json = await res.json(); // JSON se hace objeto
        console.log(json);
        for (const personas of json) {
            let nombre = personas.nombre;
            let apellido = personas.apellido;
            let dni = personas.dni;
            let telefono = personas.telefono;
            let id = personas.id;
            lista.innerHTML += `<tr>
            <td>id:</td>
            <td>${id}</td>
            </tr>
            <tr>
            <td>Nombre:</td>
            <td>${nombre}<input type="button" id="btn-editarNombre" value="Editar"><input type="button" id="btn-borrar" value="Borrar"></td>
            </tr>
            <tr>
            <td>Apellido:</td>
            <td>${apellido}<input type="button" id="btn-editarDato" value="Editar"><input type="button" id="btn-borrar" value="Borrar"></td>
            </tr>
            <tr>
            <td>DNI:</td>
            <td>${dni}<input type="button" id="btn-editarDato" value="Editar"><input type="button" id="btn-borrar" value="Borrar"></td>
            </tr>
            <td>Teléfono</td>
            <td>${telefono}<input type="button" id="btn-editarDato" value="Editar"><input type="button" id="btn-borrar" value="Borrar"></td>
            <input type="button" id="btn-editar" value="Editar">
            <input type="button" id="btn-eliminar" value="Eliminar">
            </tr>`;
        }
    } catch (error) {
        console.log(error);
    }
    
}
document.addEventListener
// document.getElementById("btn-consulta").addEventListener("click", datosPersonas);

function reservar() {
    alert("Agregado");
}
document.getElementById("btn-agregar").addEventListener("click", reservar);


///////////POST personas///////////////////
async function enviarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let dni = document.getElementById("dni").value;
    let telefono = document.getElementById("telefono").value;
    
    contenedor.innerHTML = "Ha sido agregado " + nombre + " " + apellido;
    
    let persona = {
        "nombre": nombre,
        "apellido": apellido,
        "dni": dni,
        "telefono": telefono
    };
    
    try {
        let res = await fetch(urlPersonas, {
            "method": "POST",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify(persona)
        });
        let json = await res.json();
        
        console.log(json);
        if (res.status === 201) {
            console.log("Creado!");
        }
    } catch (error) {
        console.log(error);
    }
}
document.getElementById("btn-agregar").addEventListener("click", enviarDatos);

/////////////PUT/////////////
let container = document.getElementById("use-ajax");
async function editarDato(event) {
    event.preventDefault();
    try {
        let response = await fetch("editar.html")
        if (response.ok) {
            let text = await response.text()
            contenedor.innerHTML = text;
        }
        else {
            contenedor.innerHTML = text;
        }
    } catch (error) {
        contenedor.innerHTML = "<h1>Error</h1>";
    }
}
document.getElementById("btn-editar").addEventListener("click", editarDato);

////////DELETE DATO//////////
// async function borrarDato() {
    
// }
// document.querySelector("#btn-borrar").addEventListener("click", borrarDato);
///////////DELETE PERSONA/////////////////
// async function eliminarPersona() {
    
// }
// document.querySelector("#btn-eliminar").addEventListener("click", eliminarPersona);
