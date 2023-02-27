console.log("More exercices JS 27-feb");


console.log("FOR LOOP 1")
// Crea un bucle que muestre por consola los números del 2 al 10 inclusive multiplicados por 3. Utiliza el bucle for.

for (let i = 0; i <= 10; i++) {
    console.log(i * 3);
}


console.log("FOR LOOP 2")
// Crea un bucle que muestre por consola la siguiente secuencia de números: 1, 2, 4, 7, 11, 16, 22. Utiliza el bucle for.

let number = 1;

for(let i = 0; i <= 6; i++) {
    number = number + i;
    console.log(number);
}


console.log("ARRAY ESTUDIANTES");

let estudiantes = [
    {
      nombre: "Juan",
      edad: 20,
      calificacion: 7.5,
    },
    {
      nombre: "Maria",
      edad: 22,
      calificacion: 9.0,
    },
    {
      nombre: "Pedro",
      edad: 19,
      calificacion: 8.0,
    },
    {
      nombre: "Luis",
      edad: 21,
      calificacion: 6.5,
    },
    {
      nombre: "Ana",
      edad: 18,
      calificacion: 8.5,
    },
    {
      nombre: "Sofia",
      edad: 20,
      calificacion: 7.0,
    }
  ];

//   Crea un bucle que muestre por consola los nombres de todos los estudiantes de la array. Utiliza el bucle for of.


for (let estudiante of estudiantes) {
    console.log(estudiante.nombre);
}

// Crea un bucle que muestre por consola la edad de todos los estudiantes mayores de 20 años. Utiliza el bucle for of.

for(let estudiante of estudiantes) {
    if (estudiante.edad > 20) {
        console.log(`${estudiante.nombre}, ${estudiante.edad}`);
    }
}


// Crea un bucle que muestre por consola el promedio de las calificaciones de los estudiantes. Utiliza el bucle for of y la propiedad length para calcular el promedio.

let sum = 0;

for(let estudiante of estudiantes) {
    sum = sum + estudiante.calificacion;
}

let average = sum / estudiantes.length;
console.log("Promedio es " + average);


