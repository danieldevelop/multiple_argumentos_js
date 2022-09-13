function fieldsEmpty() {
    arguments;
    console.log("🚀 ~ file: script.js ~ line 3 ~ fieldsEmpty ~ arguments", arguments);

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] == "") {
            return true;
        }
    }
    return false;
}


const enviar = document.getElementById("enviar");

enviar.addEventListener("click", () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edad = document.querySelector("#edad").value;

    if (fieldsEmpty(nombre, apellido)) {
        Swal.fire({
            html: `<span style="color: #CC0000;">El nombre y apellido no pueden estar vació</span>`,
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true
        });
        return false;
    }

    if (fieldsEmpty(edad)) {
        alert("Debe llenar el campo edad");
        return false;
    }
});
