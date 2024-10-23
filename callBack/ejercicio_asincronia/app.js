import { getUserById , getUserByName} from "./modulo.js";

getUserById(66, function (error, user) {
    if (error) {
        user === "No encontrado";
    } else {
        console.log(user);
    }
});


