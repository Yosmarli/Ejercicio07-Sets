const datosPersonales = {
    nombre: "Yosmarli",
    edad: 26,
    altura: 1.63,
    isDeveloper: true,
}
console.log(datosPersonales)


const miEdad = datosPersonales.edad
console.log(miEdad)


const listaPersonalAmigos = [
    {
        ...datosPersonales
    },
    
    {
        nombre: "Adriana",
        apellido: "Hernandez",
        edad: 30,
        altura: 1.65,
        isDeveloper: false
    },

    {
        nombre: "David",
        apellido: "Hernandez",
        edad: 25,
        altura: 1.75,
        isDeveloper: false
    },
]
console.log(listaPersonalAmigos)


const listaOrdenadaEdad = listaPersonalAmigos.sort((a, b) => b.edad - a.edad)
console.log(listaOrdenadaEdad)