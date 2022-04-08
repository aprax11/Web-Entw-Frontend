<template>
  <div class="container">
    <Header @show-addForm="showAddFunc" @show-deleteForm="showDeleteFunc" @show-searchForm="showSearchFunc" title="Pick your exercise" />
    <router-view :showDeleteForm="showDeleteForm" :showAddForm="showAddForm" :showSearchForm="showSearchForm"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showDeleteForm: false,
      showAddForm: false,
      showSearchForm: false
    }
  },
   methods: {
      showDeleteFunc() {
      this.showDeleteForm = !this.showDeleteForm
    },
    showAddFunc() {
      this.showAddForm = !this.showAddForm
    },
    showSearchFunc() {
      this.showSearchForm = !this.showSearchForm
    },
   }
  
}
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
body {
  background: url(background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}


.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid rgb(1, 1, 1);
  padding: 30px;
  border-radius: 5px;
}
</style>
