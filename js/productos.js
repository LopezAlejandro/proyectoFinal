const { createApp } = Vue
createApp({
data() {
return {
sumarios:[],
url:'http://127.0.0.1:5000/sumario',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
//url:'https://alopez.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para el guardar los valores del formulario */
id:0,
autor:"",
titulo:"",
numero: 0,
mes:"",
anio:0,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.sumarios = data,
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(sumario) {
const url = this.url+'/' + sumario;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
grabar(){
let sumario = {
autor: this.autor,
titulo: this.titulo,
numero: this.numero,
mes: this.mes,
anio: this.anio
}
var options = {
body:JSON.stringify(sumario),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "../templates/productos.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabarr")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')