"use strict";

window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        document.querySelector(".ir-arriba").classList.add("show");
    } else {
        document.querySelector(".ir-arriba").classList.remove("show");
    }
}
document.querySelector(".ir-arriba").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        bottom: 0,
        rigth: 0,
        left: 0,
        behavior: 'smooth' //hace que suba mas suave
    });
});

document.querySelector(".btn-menu").addEventListener("click", menu);

function menu() {
    document.querySelector(".nav").classList.toggle("show");
}

function mostrarNumero() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let num3 = Math.floor(Math.random() * 10) + 1;
    const suma = num1 + num2 + num3;

    document.querySelector("#captcha").innerHTML = num1 + " + " + num2 + " + " + num3 + " = " + "?";

    return suma;
}

function verificar(resultado) {
    let respuesta = parseInt(document.querySelector("#respuesta").value);

    if (resultado === respuesta) {
        document.querySelector("#resultado").innerHTML = "Correcto, eres humano.";
    }
    else {
        document.querySelector("#resultado").innerHTML = "Respuesta incorrecta.";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let resultado = mostrarNumero();
    document.querySelector("#btn-captcha").addEventListener("click", function () {
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

//////////////consultas////////////////
let reserva = document.querySelector(".use-ajax");
async function dispReserva(event) {
    event.preventDefault();
    try {
        let response = await fetch("consultas.html")
        if (response.ok) {
            let text = await response.text()
            reserva.innerHTML = text;
        }
    } catch (error) {
        reserva.innerHTML = "<h2>Error!</h2>";
    }
}
let res = document.querySelector(".btn-consulta");
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


/////////////del_pinar///////////////////////
// let cabania1 = document.querySelector(".use-ajax");
// async function delPinar(event) {
//     event.preventDefault();
//     try {
//         let response = await fetch("cabania1.html")
//         if (response.ok) {
//             let text = await response.text()
//             cabania1.innerHTML = text;
//         }
//     } catch (error) {
//         cabania1.innerHTML = "<h2>Error!</h2>";
//     }
// }
// document.querySelector("#c1").addEventListener("click", delPinar);

/////GET cabanias////////////
const urlCabanias = "https://6670528d0900b5f8724a36ff.mockapi.io/api/cabanias";
async function datosCabanias(event) {
    event.preventDefault();
    const lista = document.querySelector("#tabla_formulario");
    lista.innerHTML = "";
    try {
        let res = await fetch(urlCabanias); // GET a url
        let json = await res.json(); // JSON se hace objeto
        console.log(json);
        for (const cabanias of json) {
            let nombre = cabanias.name;
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
document.querySelector("#consulte").addEventListener("click", datosCabanias);


////////GET personas///////////////
const urlPersonas = "https://6670528d0900b5f8724a36ff.mockapi.io/api/personas";
// const contenedor = document.querySelector("#tabla_formulario");

async function datosPersonas(event) {
    event.preventDefault();
    const lista = document.querySelector("#tabla_formulario");
    lista.innerHTML = "";
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
                                <td>${nombre}<input type="button" id="btn-modificar" value="Editar"><input type="button" value="Borrar"></td>
                                </tr>
                                <tr>
                                <td>Apellido:</td>
                                <td>${apellido}<input type="button" id="btn-modificar" value="Editar"><input type="button" value="Borrar"></td>
                                </tr>
                                <tr>
                                <td>DNI:</td>
                                <td>${dni}<input type="button" id="btn-modificar" value="Editar"><input type="button" value="Borrar"></td>
                                </tr>
                                <td>Teléfono</td>
                                <td>${telefono}<input type="button" id="btn-modificar" value="Editar"><input type="button" value="Borrar"></td>
                                <input type="button" id="btn-eliminar" value="Eliminar">
                                </tr>`;
        }
    } catch (error) {
        console.log(error);
    }
    
}
document.querySelector("#btn-consulta").addEventListener("click", datosPersonas);

function reservar() {
    alert("Agregado");
}
document.querySelector("#btn-agregar").addEventListener("click", reservar);


///////////POST personas///////////////////
async function enviarDatos() {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let dni = document.querySelector("#dni").value;
    let telefono = document.querySelector("#telefono").value;

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
            document.querySelector("#msg").innerHTML += "Creado!";
            console.log("Creado!");
        }
    } catch (error) {
        console.log(error);
    }
}
document.querySelector("#btn-agregar").addEventListener("click", enviarDatos);

/////////////PUT/////////////
function modificarDato() {

}
document.querySelector("#btn-modificar").addEventListener("click", modificarDato);
////////DELETE//////////
async function borrarDato() {

}
document.querySelector("#btn-eliminar").addEventListener("click", borrarDato);
