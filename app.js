// bloqueante, no bloqueante, sincro

let uno = setTimeout(() => {
console.log("Buscando en la red");
    
}, 6000);
console.log("Solucionado");



let interval = setInterval(() => {
    console.log("¿Cada cuanto?");
},5000);

console.log("Finalizamos");
console.log(uno, interval);


setTimeout(() => {
    clearInterval(interval);
}, 20000);

