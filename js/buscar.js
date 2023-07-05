const { createApp } = Vue;
createApp({
  data() {
    return {
      sumarios: [],
      //url: "http://127.0.0.1:5000/",
      searchTerm: "",
      searchField: "autor",
      searchF: false,
      // si el backend esta corriendo local usar localhost 5000
      //url:'https://alopez.pythonanywhere.com/', // si ya lo subieron a pythonanywhere
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
        this.url = "https://alopez.pythonanywhere.com/sumario_a/";
      } else {
        this.url = "https://alopez.pythonanywhere.com/sumario_t/";
      }

      try {
        const response = await fetch(this.url + this.searchTerm);
        const data = await response.json();
        if (data.length > 0) {
          this.sumarios = data;
        } else {
          this.sumarios = [];
          this.searchF = true;
        }

        //console.log(this.sumarios);
      } catch (error) {
        console.error("Error al buscar:", error);
      }
    },
    eliminar(sumario) {
      const url = "https://alopez.pythonanywhere.com/sumario/" + sumario;
      var options = {
        method: "DELETE",
      };
      fetch(url, options)
        .then((res) => res.text()) // or res.json()
        .then((res) => {
          location.reload();
        });
    },
  },
}).mount("#app");
