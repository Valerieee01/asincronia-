import { asignaciones } from "./data.js";
import { getUserById} from "./modulo.js";

let idUser =  parseInt(prompt("Ingrese un número de consulta para tu id: "))

getUserById(idUser, function (error, user) {
    
    if (error) {
        console.log(error);
    } else {
        console.log(user);
        if (user.asignacion.length > 0) {
            let nomAsignacion = [];
            for (let i = 0; i < (user.asignacion).length; i++) {
                const element = user.asignacion[i];
                for (let f = 0; f < asignaciones.length; f++) {
                    if(element === asignaciones[f].id){
                        let nombreAsignacion = asignaciones[i].name; 
                       nomAsignacion.push(nombreAsignacion);
                    }   
                }
             } 
            for (let i = 0; i < nomAsignacion.length; i++) {
                const nombre = nomAsignacion[i];
                console.log(nombre);
            }
        }else{
            console.log("El usuario no tiene asignaciones");
            
        }
    }
});


