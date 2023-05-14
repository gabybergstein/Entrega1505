
let entrada = ""
let numeros = []
while (entrada != "ESC") {
    entrada = prompt("Ingrese el numero del producto que desee, cuando termine presione 'ESC'");
   if(entrada == 1 || entrada == 2 || entrada == 3 || entrada == 4){
        numeros.push (entrada)
   }
}

let lista = []
let i = 0
let texto = ""

while (i<numeros.length){

    if(numeros[i] == 1){
        texto = "Tomate"
    }
    if(numeros[i] == 2){
        texto = "Papa"
    }
    if(numeros[i] == 3){
        texto = "Carne"
    }
    if(numeros[i] == 4){
        texto = "Pollo"
    }
    i++
    lista.push (" " + texto)
    
}

alert ("Tu pedido es:" + lista + ".")
