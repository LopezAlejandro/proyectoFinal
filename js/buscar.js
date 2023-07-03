const { createApp } = Vue;
createApp({
  data() {
    return {
      sumarios: [],
      //url: "http://127.0.0.1:5000/",
      searchTerm: "",
      searchField: "autor",
      // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
      //url:'https://alopez.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
    };
  },
  methods: {
    async search() {
      
      if (this.searchTerm == "") {
        // Si la búsqueda está vacía, se muestra un mensaje de error o se realiza otra acción apropiada.
        console.log("Por favor, ingresa un término de búsqueda.");
        return;
      }    
      
          if (this.searchField == "autor") {
        this.url = "http://127.0.0.1:5000/sumario_a/";
      } else {
        this.url = "http://127.0.0.1:5000/sumario_t/";
      }
          
      try {
        const response = await fetch(this.url + this.searchTerm);
        const data = await response.json();
        this.sumarios = data;
        //console.log(this.sumarios);
      } catch (error) {
        console.error("Error al buscar:", error);
      }
    },
  },
}).mount("#app");
