function calcular(){
    var operacao = document.getElementById('op');
    var casos = operacao.selectedIndex;
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    var resultado = document.querySelector("span");
    

    switch(casos) {
        case 1:
            resultado.innerHTML = n1 +  n2
            break;
        case 2:
            resultado.innerHTML = n1 - n2
            break;
        case 3:
            resultado.innerHTML = n1 * n2
            break;
        case 4:
            resultado.innerHTML = n1 / n2
            break;

        default:
            "opção invalida"
            break;
    }



}