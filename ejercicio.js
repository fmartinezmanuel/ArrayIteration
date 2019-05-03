function firstNotRepeatingCharacter(){
  var cadena = "abacabaabacaba";
  var cadenaArray= cadena.split("");
  //console.log(cadenaArray.length);
  var i;
  var j;
  var finalOut;
  var onlyOnce = 0;
  //console.log('Inicio-----------------------');
  for(i=0;i<cadenaArray.length;i++){
    //console.log('Primer ciclo: '+cadenaArray[i]);
    var resetEquals = 0;
    var output;
    for(j=0;j<cadenaArray.length;j++){
      //console.log('First: '+cadenaArray[i]+' -> '+cadenaArray[j]);
      if(cadenaArray[i] == cadenaArray[j]){
        resetEquals++;
        output = cadenaArray[j];
        //console.log('Equals: '+resetEquals);
      }
    }//Second for ends..
    //console.log('Resultado del primer ciclo: '+resetEquals)

    if(resetEquals == 1 && onlyOnce === 0){
      finalOut = output;
      onlyOnce++;
    }

    if(finalOut === undefined){
      finalOut = '-';
    }
  }//first for ends..
  //console.log('Fin-----------------------');
  return finalOut;
}//firstNotRepeatingCharacter ends..

console.log('Resultado es: '+ firstNotRepeatingCharacter());
