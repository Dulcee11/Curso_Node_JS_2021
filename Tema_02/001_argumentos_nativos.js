//console.log(process.argv);
const [,,arg3='base=1'] = process.argv;
console.log(arg3);
const base = arg3.split('='); //Convierte mi texto en un array
let baseNumero = 1;
if(base[0]=='base'){
    let baseNumero = base[1];
    console.log(baseNumero)
}else{
    console.log('Argumentos invalidos');
    return false;
}
