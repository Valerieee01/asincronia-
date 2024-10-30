import { getUserById , getUserByName} from "./modulo.js";

getUserById(6, function (error, user) {
    
    if (error) {
        console.log(error, user);
    } else {
        console.log(error, user);
    }
});


