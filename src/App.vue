<!--1.模板部分，html样式-->
<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <HelloWorld/>
    <user v-bind:users="users" ></user>
    <user v-bind:users="users" ></user>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<!--2.行为部分，处理逻辑-->
<script>
  // 局部组件
import HelloWorld from './components/HelloWorld'
import User from './components/User'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  data(){
    return{
      title : '这是我的第一次vue脚手架项目',
      users : [
        {name:'henry',position:'web开发',show:false},
        {name:'henry',position:'web开发',show:false},
        {name:'henry',position:'web开发',show:false},
        {name:'henry',position:'web开发',show:false},
        {name:'henry',position:'web开发',show:false},
        {name:'henry',position:'web开发',show:false},
        {name:'henry',position:'web开发',show:false}
      ],
      title:"传递一个值（string，num，boolean）"
    }
  },
  components: {
    HelloWorld,
    User,
    "app-header":Header,
    "app-footer":Footer,
  }
}
</script>

<!--3.样式部分，css样式-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: auto;
}
  h1{
    color: green;
  }
</style>
