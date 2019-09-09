<template>
    <div class="users">
      <ul>
        <li v-for="user in users">
          {{user}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "User",
      data(){
          return{
            users : ['henry','mercer','jack']
          }
      }
    }
</script>

<style scoped>
.users{
  width: 100%;
  align-content: center;
  text-align: center;
}
</style>
