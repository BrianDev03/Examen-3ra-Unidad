

let edades = [];
let nombres = [];

for (let i = 0; i < 3; i++) {
    nombres.push(prompt("Ingrese Nombre:"));
    edades.push(parseInt(prompt(" Ingrese Edad:")));
    
}

let indexOfMaxAge = edades.indexOf(Math.max(...edades));
let oldName = nombres[indexOfMaxAge]; 

alert("El mas vieho: " + oldName);

