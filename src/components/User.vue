<template>
    <div class="users">
      <ul>
        <li v-for="user in users" v-on:click="user.show = !user.show">
          <h2>{{user.name}}</h2>
          <h3 v-show="user.show">{{user.position}}</h3>
        </li>
      </ul>
      <button v-on:click="deleteUser()">删除</button>

    </div>
</template>

<script>
    export default {
      name: "User",
      // props:['users'],
      props:{
        users:{
          type:Array,
          required:true
        },
      },
      data(){
          return{

          }
      },
      methods:{
        deleteUser:function () {
          this.users.pop();
        }
      }
    }
</script>

<style scoped>
  .users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0px 20px;
    box-sizing: border-box;

}
  li{
    text-align: left;
    flex-grow: 1;
    flex-basis: 200px;
    margin: 10px;
    border: 1px solid;
    text-align: center;
    padding: 0px;
  }
  ul{
    display: flex;
    flex-wrap:wrap;
    padding: 0px;
    list-style-type: none;
  }
</style>
