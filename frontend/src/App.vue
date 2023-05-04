  <template>
  <router-link to="/login" @click="handleclick" v-if="isLogin">Login</router-link>
  <router-view></router-view> -->
  </template>

  <script>
  export default {
    name: 'App',
    components: {
      // HomePage,
      // SignupForm,
      // LoginForm,
    },
    data(){
      return{
        isLogin:false
      }
    },
    methods:{
      handleclick(){
        this.isLogin = true
      }
    }
  }
  </script>

  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
