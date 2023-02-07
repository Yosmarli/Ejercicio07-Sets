const fechaHoy = new Date()
console.log(fechaHoy)


const fechaNac = new Date(1996, 10, 06)
console.log(fechaNac)


const comparacionFechas = fechaHoy > fechaNac
console.log(comparacionFechas)


const diaNac = new Date(fechaNac).getDate()
console.log(diaNac)


const mesNac = fechaNac.getMonth() + 1
console.log(mesNac)


const anyoNac = fechaNac.getFullYear()
console.log(anyoNac)