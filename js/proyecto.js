//Definición de variables globales

let opcion=0;
let precioTotal=0;
let precioAuto=0;
let precioPaquete=0;
let precioCrucero=0;
let cantidadDias=0;
let precioSeguroAuto=500;

//Definición de funciones

const suma  = function (a, b) { return a + b };
const multiplicacion  = function (a, b) { return a * b };
const resta = function (a, b) { return a - b };

const descuento = (precio,descuento) => {return resta(precio, multiplicacion(precio,descuento))};

function seguro(opcion){
   cantidadDias=prompt("Ingrese cantidad de día que va a necesitar el auto");
   switch (parseInt(opcion)) {
                                 case 1:
                                     
                                     precioTotal=suma(multiplicacion(parseInt(precioAuto),parseInt(cantidadDias)),parseInt(precioSeguroAuto));
                                     alert("Su precio por el alquiler del vehículo es: $"+precioTotal);
                                     break;

                                 default:
                                     
                                     precioTotal=multiplicacion(parseInt(precioAuto),parseInt(cantidadDias));
                                     alert("Su precio por el alquiler del vehículo es: $"+precioTotal);
                                     break;
                                
                            } 
}

function parques(opcion){
    let cantidadPersonas=prompt("Ingrese cantidad de personas que van a viajar");
    switch (parseInt(opcion)) {
                                  case 1:
                                      let precioParques=500;
                                      precioTotal=suma(multiplicacion(parseInt(precioPaquete),parseInt(cantidadPersonas)),multiplicacion(parseInt(precioParques),cantidadPersonas));
                                      alert("Su precio por el paquete para las "+cantidadPersonas+" personas mas el acceso a los parques es de: $"+precioTotal);
                                      break;
 
                                  default:
                                      
                                      precioTotal=multiplicacion(parseInt(precioPaquete),parseInt(cantidadPersonas));
                                      alert("Su precio por el paquete para "+cantidadPersonas+" personas es de: $"+precioTotal);
                                      break;
                                 
                             } 
 }

// Menú del sistema

do{
    opcion=prompt("Bievenido a TravelUY elija la opción\n 1-Alquiler de autos\n 2-Paquetes aereos\n 3-Cruceros\n 4-Salir");
    switch (parseInt(opcion)) {
        case 1:
             do{
                let opcionSeguro=0;
               opcion=prompt("¿Qué tipo de vehiculo necesita?\n 1-Auto\n 2-Camioneta\n 3-Salir");
               switch (parseInt(opcion)) {
                    case 1:
                            opcionSeguro=prompt("¿Quiere un seguro ?\n 1-Si\n 2-No\n 3-Salir");
                            precioAuto=800;
                            seguro(opcionSeguro);
                            opcion=3;
                            break;

                    case 2:
                            opcionSeguro=prompt("¿Quiere un seguro ?\n 1-Si\n 2-No\n 3-Salir");
                            precioAuto=1200;
                            seguro(opcionSeguro);
                            opcion=3;
                            break;

                    case 3:
                            opcion=3;
                            break;
                   
                    default:
                            alert("Elija la opción correcta")
                            break;

                }
             }while(opcion !=  3);
             break;
        case 2:
            do{
               let opcionParques=0;
               opcion=prompt("Seleccione el paquete turistico\n 1-Orlando y Florida - 7 Noches\n 2-Punta Cana - All Inclusive - 7 Noches\n 3-Salir");
               switch (parseInt(opcion)) {
                    case 1:
                            opcionParques=prompt("¿Quiere sumar el acceso a los parques?\n 1-Si\n 2-No\n 3-Salir");
                            precioPaquete=15000;
                            parques(opcionParques);
                            opcion=3;
                            break;

                    case 2:
                            precioPaquete=25000;
                            let cantidadPersonas=prompt("Ingrese cantidad de personas que van a viajar");
                            precioTotal=multiplicacion(parseInt(precioPaquete),parseInt(cantidadPersonas));
                            alert("Su precio por el paquete para "+cantidadPersonas+" personas es de: $"+precioTotal);
                            opcion=3;
                            break;

                    case 3:
                            opcion=3;
                            break;
                   
                    default:
                            alert("Elija la opción correcta")
                            break;

                }
             }while(opcion !=  3);
             break;
        case 3:
            do{
                
                opcion=prompt("Seleccione el crucero\n 1-MSC Miami-Bahamas- 5 Noches - All Inclusive\n 2-Norwegian Brasil - All Inclusive - 7 Noches\n 3-Salir");
                let cantidadPersonas=0
                switch (parseInt(opcion)) {
                     case 1:
                             precioPaquete=85000;
                             cantidadPersonas=prompt("Ingrese cantidad de personas que van a viajar\n Si viajan 4 personas o mas se aplica un 20% de descuento");
                             if(parseInt(cantidadPersonas)>3){
                                precioTotal=multiplicacion(descuento(precioPaquete,0.2),parseInt(cantidadPersonas));
                                alert("Su precio por el paquete para "+cantidadPersonas+" personas es de: $"+precioTotal)    
                             }
                             else{
                                precioTotal=multiplicacion(parseInt(precioPaquete),parseInt(cantidadPersonas));
                                alert("Su precio por el paquete para "+cantidadPersonas+" personas es de: $"+precioTotal)
                                  
                             }
                             opcion=3;
                             break;
 
                     case 2:
                             precioPaquete=35000;
                             cantidadPersonas=prompt("Ingrese cantidad de personas que van a viajar");
                             precioTotal=multiplicacion(parseInt(precioPaquete),parseInt(cantidadPersonas));
                             alert("Su precio por el paquete para "+cantidadPersonas+" personas es de: $"+precioTotal)
                             opcion=3;
                             break;
 
                     case 3:
                             opcion=3;
                             break;
                    
                     default:
                             alert("Elija la opción correcta")
                             break;
 
                 }
              }while(opcion !=  3);
             break;
        case 4:
             alert("Hasta luego y gracias por visitar TravelUY");
             break;
        default:
            alert("Elija la opción correcta")
             break;
    }
 
    
}while(opcion !=  4);