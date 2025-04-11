document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("coordinadorLoginForm");
    const registroForm = document.getElementById("coordinadorRegistroForm");

    // Registro del Coordinador
    if (registroForm) {
        registroForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const telefono = document.getElementById("telefono").value;
            const password = document.getElementById("password").value;

            // Guardar en LocalStorage (Simulación de Base de Datos)
            localStorage.setItem("coordinador", JSON.stringify({ nombre, correo, telefono, password }));

            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            window.location.href = "coordinador_login.html";
        });
    }

    // Inicio de sesión del Coordinador
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const nombre = document.getElementById("nombre").value;
            const password = document.getElementById("password").value;
            const coordinadorGuardado = JSON.parse(localStorage.getItem("coordinador"));

            if (coordinadorGuardado && coordinadorGuardado.nombre === nombre && coordinadorGuardado.password === password) {
                alert("Inicio de sesión exitoso");
                window.location.href = "consultar_alumno.html"; // Página a la que redirige
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
});
