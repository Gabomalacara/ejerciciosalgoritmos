// //1. Solicitar 3 numeros (entre 1 y el 100) y definir cual es mayor



// // if (a) { 
// // alert("Tu numero a es mayor!!")
// // };
// // else if \

// let a = prompt("Elige un numero del uno al cien", "1 a 100");
// if(a < 1 || a > 100) {
//     alert("ingresa nuevamente");
//     let a = prompt("Ingresa tu primer numero")
// }
// let b = prompt("Elige un numero del uno al cien", "1 a 100");
// if(b < 1 || b > 100) {
//     alert("ingresa nuevamente");
//     let b = prompt("Ingresa tu primer numero")
// }
// let c = prompt("Elige un numero del uno al cien", "1 a 100");
// if(c < 1 || c > 100) {
//     alert("ingresa nuevamente");
//     let c = prompt("Ingresa tu primer numero");
// }

// if((a < b) && (a<c)){
//     alert("El numero Menor es:"+ a);
// }
// else if ((b < a) && (b < c )){
//     alert("El numero Menor es:"+ b);  
// }
// else {
//     alert("El numero Menor es:"+ c); 
// }
// a=parseInt(a,10);
// b=parseInt(b,10);
// c=parseInt(c,10);


// //4.
// if (d>200||d<100){
//     alert("numero"+d+"es invalido")
// }else if(d%3==0){
//     alert(" Numero"+d+"es multiplo de 3")
// }else{
//     alert("Numero"+d+"no es multiplo de 3")
// }

function Adivinar (){
    let superior = 100;
    let inferior = 0;
    let noencontrado= true;
    while(noencontrado){
        let mid = parseInt(inferior+((superior-inferior)/2));
            console.log(mid);
            console.log(((superior-inferior)/2));
            if(((superior-inferior)/2)<1){
                noencontrado=false
                alert("Tu numero es el "+ (parseInt(mid)+1));
                break;
            }
            let res = confirm("Tu numero es menor o igual a "+ mid);
            if (res){
                superior=mid;
            }else {
                inferior=mid;
            }
          console.log(inferior, superior);
        }
    }



    Adivinar();
    




