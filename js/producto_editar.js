console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
//id:0,
autor: "",
titulo: "",
numero: 0,
mes: "",
anio:0,
url: 'https://alopez.pythonanywhere.com/sumario/' + id,
//url:'http://localhost:5000/sumario/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.autor = data.autor
this.titulo=data.titulo
this.numero=data.numero
this.mes=data.mes
this.anio=data.anio    
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let sumario = {
autor: this.autor,
titulo: this.titulo,
numero: this.numero,
mes: this.mes,
anio: this.anio,
}
var options = {
body: JSON.stringify(sumario),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../templates/buscar.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')