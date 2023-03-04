const Validation= (userData)=> {
    let errors= {};
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(userData.username)){
        errors.username= "Ingrese un email válido."
    }
    if (!userData.username) {
        errors.username= "Ingrese un nombre de usuario."
    }
    if(userData.username.length>35){
        errors.username= "El nombre de usuario no puede tener más de 35 caracteres."
    }
    if(!userData.password.match(/\d/)){
        errors.password= "La contraseña debe incluir al menos un número."
    }
    if(userData.password.length < 6 || userData.password.length > 10) {
        errors.password= "La contraseña debe tener entre 6 y 10 caracteres."
    }
    return errors;
}



export default Validation;