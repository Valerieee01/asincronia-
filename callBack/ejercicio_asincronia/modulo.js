import {asignacion, users} from "./data.js";

export function getUserById(id, callback) {
    const user = users.find(function (user) {
       return user.id === id
    })
     if (!user) {
        console.log(`No encontramos usuario con el id ${id}`);
     } else {
        callback(null, user);
     }
}


export function getUserByName(name) {
    const user = users.find(function (user) {
       return user.name === name
    })
     if (!user) {
        console.log(`No encontramos usuario con el id ${name}`);
        
     }
     return user;
}