<template>
    <header>
      <h1 v-on:click="changeTitle()">{{title}}</h1>
    </header>
</template>

<script>
    export default {
      name: "app-header",
      data(){
          return{

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
header{
  padding: 10px;
  background-color: lightgreen;
}
  h1{
    color: #222;
    text-align: center;
  }
</style>
