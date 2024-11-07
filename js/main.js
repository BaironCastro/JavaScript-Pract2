//saludar

function saludar(){
    alert("Hola usuario");
}

function opBasicas() {
    //Declaro las calores nedesarias para la ejecución
    let A,B,S,R,M,D = 0;
    // Notifico al usuario qué realiza este algoritmo
    alert("Este algoritmo realiza una suma, resta,multiplicación y división entre dos valores ingresados");
    //Capturar los datos de entrada o inputs
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el primer valor"));
    // Realizar el proceso
    S = A + B;
    R = A - B;
    M = A - B;
    D = A - B;
    // Dar el resultado
    alert("El resultado de la suma es: " + S);
    alert("El resultado de la resta es: " + R);
    alert("El resultado de la multiplicación es: " + M);
    alert("El resultado de la división es: " + D);
}

function areaTriangulo() {
    let base,altura,area = 0;
    alert("Este algoritmo calcula el area de un triangulo a partir de su base y su latura");
    base = parseInt(prompt("Ingrese el valor de base"));
    altura = parseInt(prompt("Ingrese el valor de altura"));
    area = (base*altura)/2;
    alert("El area del triangulo es: " + area);
}

function conversionUnidades() {
    let metros,pulgadas,centimetros,kilometros = 0;
    alert("Este algoritmo covierte en centimetros, pulgadas y kilometros un valor dado en metros");
    metros = parseInt(prompt("Ingrese el valor en metros a convertir"));
    pulgadas = metros * 39.37;
    centimetros = metros * 100;
    kilometros = metros * 1000;
    alert(metros + " metros en pulgadas son: " + pulgadas);
    alert(metros + " metros en centimetros son: " + centimetros);
    alert(metros + " metros en kilometros son: " + kilometros);
}

//algoritmos condicionales

function servicioMilitar(){
    let edad = 0;
    let genero = "";
    let hijoUnico = "";
    alert("Algoritmo que determina si eres apto para prestar el servicio obligatorio");

    edad = parseInt(prompt("Por favor ingrese su edad"));
    genero = prompt("Por favor infrse su genero: F- Femenino o M- Masculino");
    hijoUnico = prompt("Por favor ingrese SI o NO, de ser único");
    if (edad >= 18 && edad <= 26) {
        if (genero === "M") {
            if (hijoUnico === "NO") {
                alert("Eres apto para prestar el servicio militar");
            }else{
                alert("No eres apto para prestar el servicio militar");
            }
        }else{
            alert("No eres apta para prestar el servicio militar");
        }
    }else{
        alert("No es apto por su edad");
    }
}

function mayorDosN() {
    let N1,N2 = 0;
    alert("valida el mayor de dos numeros");
    N1 = parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));
    if (N1 === N2) {
        alert("No hay ningun numero mayor, ambos son iguales")
    }else if(N1>N2){
        alert(N1 + " es mayor que " + N2);
    }else{
        alert(N2 + " es mayor que " + N1);
    }
}

function paroImpar() {
    let x = 0;
    alert("Determinar si un numero es par o impar")
    x = parseInt(prompt("Ingrese el numero a verificar"));
    if(x % 2 === 0){
        alert(x + " es un numero par");
    }else{
        alert(x + " es un numero impar");
    }
}

// Estruturas de ciclos
function rangoNumeros(){
    alert("Imprimir en consola los numeros existentes entre un valor inicial y un valor final")
    let inicio = parseInt(prompt("ingrese el valor de punto de partida"));
    let fin = parseInt(prompt("Ingrese el valor de punto final"));
    let contador = inicio;
    while (contador <= fin) {
        console.log(contador);
        contador ++;
    }
    alert("En consola mostraremos los numeros que hay entre" + inicio + " y " + fin);
}
function sumaRango() {
    alert("Suma los valores entre uin rango ingresado");
    let inicio = parseInt(prompt("Ingrese el punto de partida"));
    let fin = parseInt(prompt("Ingrese el punto final"));
    let suma = 0 ;
    contador = inicio;
    while(contador <= fin){
        suma += contador;
        contador ++;
    }
    alert("La suma de los numeros del " + inicio + " al " + fin + " es: "+ suma);
}

function esPrimo() {
    alert("Determina si un numero es primo");
    let numero = parseInt(prompt("Ingrese el numero"));
    if (numero <= 1) {
        alert(numero = " no es un munero primo");
    }
    for (let i = 2; i< numero; i++) {
        if (numero % i === 0 ) {
            alert(numero = " no es un munero primo");
            return;
        }
    }
    alert(numero = " si es un munero primo");  
}

function conversionMoneda() {
    // objeto como dato de partida
    let tasacambio = {
        USD : 0.00028,
        EUR : 0.00024
    }
    alert("Realiza la conversion de dinero en pesos colombianos a dolares y euros");
    let cantidadPesos = parseFloat(prompt("Ingrese la cantidad a convertir"));
    let tasa = parseInt(prompt("Ingrese la divisa a cambiar: USD = 1, EUR = 2"));
    let conversion;
    switch (tasa) {
        case 1:
            conversion = cantidadPesos * tasacambio.USD;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " Dolares");
            break;
        case 2:
            conversion = cantidadPesos * tasacambio.EUR;
            alert(cantidadPesos + " Pesos colombianos son " + conversion + " Euros");
            break;
        default:
            alert("Tasa de cambios no permitida");
            break;
    }
}

function calcularPromedio() {
    alert("Este algoritmo determina el promedio de calificaciones ingresadas por el usuario");
    let calificaciones = [];
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones"));
    for(let i = 1; i <= cantidadNotas; i++){
        calificaciones.push(parseFloat(prompt("Ingrese la calificacion # " + i + " : ")));
    }
    let sumaCalif = 0;
    for(let calificacion of calificaciones){
        sumaCalif += calificacion;
    }
    let promedio = sumaCalif/calificaciones.length;
    alert("El promedio de las calificaiones es: " + promedio);
}
function consultarPeli() {
    alert("Este algoritmo muestra la informaciond e una pelicula elegida");
    let peliculas = [
        {
            titulo: "El padrino",
            director: "Nombre del director",
            anio: "1972",
            genero: "Drama"
        },
        {
            titulo: "Interestelar",
            director: "Nombre del director",
            anio: "2014",
            genero: "Ficcion"
        },
        {
            titulo: "harry Potter",
            director: "Nombre del director",
            anio: "2008",
            genero: "Ficcion"
        }
    ];
    let nombrePelicula = prompt("Por favor ingrerse el nombre de la pelicula");
    let infoPelicula = "";
    for(let pelicula of peliculas){
        if(pelicula.titulo === nombrePelicula){
            infoPelicula = "Titulo: " + pelicula.titulo + "\n" + "Director: " + pelicula.director + "\n" + 
            "Anio: " + pelicula.anio + "\n" + 
            "Genero: " + pelicula.genero;
            break;
        }
    }
    if (infoPelicula !== "") {
        alert("La pelicula consultada tiene la siguiente informacion " + "\n" + infoPelicula);
    }else{
        alert("La pelicula no se encuentra en nuestro sistema");
    }
}












