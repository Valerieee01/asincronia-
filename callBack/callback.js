function callback(message) {
    console.log(message);
}

function saludo(name, callback) {
    let message =  `Hola ${name}`;
    callback(message);
}

saludo(`Valerie Afanador`, callback());