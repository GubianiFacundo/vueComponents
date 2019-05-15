import $ from 'jquery';

export default {
  name: 'clientes',
  components: {},
  props: [],
  data() {
    return {
      clientes: [],
      paginaActual: 0,
      nombreFantasia: "",
      page: {
        totalPages: 0
      },
      order: "",
    }
  },
  created: function() {
    this.consultaClientes(0, "");
  },
  mounted() {

  },
  methods: {
    cargar: function (json) {
      this.clientes = json._embedded.clienteResources;
      this.page = json.page;
      this.paginaActual = json.page.number;
    },
    consultaClientes: function (page, nombreFantasia) {
      $.get({
        url: 'http://10.0.0.197:9003/clientes',
        crossDomain: true,
        data: {
          page: page,
          nom_fantasia: nombreFantasia,
          sort: this.order
        },
        headers: {
          EmpID: 1,
          Authorization: 'Basic ' + btoa(this.$store.getters.user + ':' + this.$store.getters.password)
        }
      }).done((json) => {
        this.cargar(json)
      }).fail(() => {
        alert("HICISTE ALGO MAL FALITENS !!!");
      })
    },
    buscar: function () {
      this.paginaActual = 0;
      this.consultaClientes(this.paginaActual, this.nombreFantasia)
    },
    previous: function () {
      this.paginaActual--;
      this.consultaClientes(this.paginaActual, this.nombreFantasia)
    },
    next: function () {
      this.paginaActual++;
      this.consultaClientes(this.paginaActual, this.nombreFantasia)
    },
    detallarCliente: function (clientId) {
      this.$router.push({name: "detalle", params: { id: clientId } });
      //detalles.detallar(cliente);
    }
  },
  computed: {
    hasNext: function () {
      return this.paginaActual + 1 !== this.page.totalPages
    },
    hasPrevious: function () {
      return this.paginaActual !== 0
    },
  },
}
