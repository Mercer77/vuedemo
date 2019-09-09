<template>
    <footer>
      <h1>{{title}}</h1>
      <p v-on:click="changeTitle()">{{copyright}}</p>
    </footer>
</template>

<script>
    export default {
        name: "app-footer",
      data(){
          return{
            copyright : 'copyRight 2019'
          }
      },
      props:{
          title:{
            type:String
          }
      },
      methods:{
        changeTitle:function () {
          this.title='changed'
        }
      }
    }
</script>

<style scoped>
  footer{
    background-color: #222;
    padding: 10px;
    margin-top: 20%;

  }
  p{
    color: lightgreen;
    text-align: center;
  }

</style>
