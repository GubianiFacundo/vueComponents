import $ from 'jquery';
export default {
  name: 'login',
  components: {},
  props: [],
  data() {
    return {
      user: "ADMIN",
      password: "ADMIN"
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    ingresar: function () {
      $.post({
        // http://demo-paljet.bbjetcloud.com/pjet-api/clientes 
        url: 'http://10.0.0.197:9003/usuarios/login',
        crossDomain: true,
        // data: {
        //     page: clientes.paginaActual,
        //     nom_fantasia: clientes.nombreFantasia
        // },
        data: JSON.stringify({
          origen: "BBJET_B2B"
        }),
        contentType: "application/json",
        headers: {
          EmpID: 1,
          Authorization: 'Basic ' + btoa(this.user + ':' + this.password)
        }
      }).done(() => {
        this.$store.commit("setUser", this.user);
        this.$store.commit("setPassword", this.password);
        this.$router.push({name: "clientes" });
        // login.logged = true;
        // clientes.cargar(resultadoJSON);
        // clientes.logged = true;

      }).fail(() => {
        alert("HICISTE ALGO MAL FALITENS !!!");
      });
    }
  }
}