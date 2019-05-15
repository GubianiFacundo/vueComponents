import $ from 'jquery';
export default {
  name: 'detalle',
  components: {},
  props: {
    id: {
      default: ""
    },
    user: {
      default: ""
    },
    password: {
      default: ""
    }
  },
  data() {
    return {
      cliente: {
        razonSocial: "",
        cuit: "",
        nombreFantasia: "asd",
        domicilios: [
          {
            domicilio: "",
            localidad: {
              nombre: "",
              provincia: {
                nombre: ""
              }
            }
          }
        ],
        email: "",
        fecha_nacim: "",
        telefonos: [
          {
            nombre: ""
          }
        ],
        web: ""
      }
    }
  },
  computed: {

  },
  beforeRouteUpdate(to) {
    this.showClientDet(to.params.id);
  },
  created: function () {
    this.showClientDet(this.id);
  },
  mounted() {

  },
  methods: {
    showClientDet: function (clientId) {
      if (clientId != "") {
        $.get({
          url: "http://10.0.0.197:9003/clientes/" + clientId,
          crossDomain: true,
          headers: {
            EmpID: 1,
            Authorization: "Basic " + btoa(this.$store.getters.user + ":" + this.$store.getters.password)
          }
        }).done(json => {
          this.cliente = json;
        }).fail(function () {
          alert("TODO MAL");
        });
      }
    },
    goBack: function () {
      // this.$router.push({ name: "clientes" })
      this.$router.go(-1);
    }
  }
}
