function cuadrado(valor) {
    
    if (typeof(valor) !== "number") {
        return Promise.reject("Cuidado, el valor que ingreso no es un número");
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                valor: valor,
                resultado :  valor * valor
            })
        }, 4000);
        
    });

}
cuadrado("promesa").then((obj) => {
    console.log(obj);
    return cuadrado(++obj.valor)
}).then((obj) => {
    console.log(obj);
    return cuadrado(++obj.valor)
})
