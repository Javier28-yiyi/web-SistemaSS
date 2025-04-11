document.addEventListener("DOMContentLoaded", function () {
    // Variables para las secciones
    const inicio = document.getElementById("inicio");
    const seleccionUsuario = document.getElementById("seleccionUsuario");
    const alumnoLogin = document.getElementById("alumnoLogin");
    const alumnoRegistro = document.getElementById("alumnoRegistro");
    const empresaForm = document.getElementById("empresaForm");
    const coordinadorMenu = document.getElementById("coordinadorMenu");
    const avanceForm = document.getElementById("avanceForm");
    const reporteForm = document.getElementById("reporteForm");

    // Botones
    document.getElementById("btnIngresar").addEventListener("click", function () {
        mostrarSeccion(seleccionUsuario);
    });

    document.getElementById("btnAlumno").addEventListener("click", function () {
        mostrarSeccion(alumnoLogin);
    });

    document.getElementById("btnNoRegistrado").addEventListener("click", function () {
        mostrarSeccion(alumnoRegistro);
    });

    document.getElementById("btnRegistrarAlumno").addEventListener("click", function () {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        mostrarSeccion(alumnoLogin);
    });

    document.getElementById("btnIniciarAlumno").addEventListener("click", function () {
        mostrarSeccion(empresaForm);
    });

    document.getElementById("btnCoordinador").addEventListener("click", function () {
        mostrarSeccion(coordinadorMenu);
    });

    document.getElementById("btnConsultarAlumno").addEventListener("click", function () {
        mostrarSeccion(avanceForm);
    });

    document.getElementById("btnRegistrarHoras").addEventListener("click", function () {
        let horasIngresadas = parseInt(document.getElementById("horasCompletadas").value);
        let horasTotales = 480;
        let horasRestantes = horasTotales - horasIngresadas;
        document.getElementById("horasRestantes").value = horasRestantes;
    });

    document.getElementById("btnReporte").addEventListener("click", function () {
        mostrarSeccion(reporteForm);
    });

    function mostrarSeccion(seccion) {
        document.querySelectorAll(".seccion").forEach(sec => sec.style.display = "none");
        seccion.style.display = "block";
    }
});

function mostrarPantalla(pantalla){
    window.location.href = pantalla;
}
