

   let P = prompt("Ingresa una palabra:");
   let conteoVocales = 0;
   
            P = P.toLowerCase();

for (let char of P) {
    if ('aeiou'.includes(char)) {
        conteoVocales++;
    }
}

alert("Número de vocales en el texto: " + conteoVocales);
