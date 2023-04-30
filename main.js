function suma(){
    var valorA = parseFloat(document.getElementById("valorA").value);

    var valorB = parseFloat(document.getElementById("valorB").value);

    var resultado = valorA + valorB;

    document.getElementById("resultado").value = resultado;
}