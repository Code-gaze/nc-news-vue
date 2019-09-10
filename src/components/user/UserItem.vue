<template>
    <div class='user'>
   <img :src='avatar_url' alt="avatar_img" class='img' />
   <div class='description'>
    <p> Username: {{username}}</p>
    <p>Name: {{name}}</p>
   </div>
  </div>
</template>

<script>
export default {
    name: 'UserItem',
    props:['username', 'name', 'avatar_url']
}
</script>

<style scoped>
.user{
 display: flex;
 flex-flow: wrap row;
 justify-content: center;
 align-items: center; 
 margin: 1em .3em 1em;
}
.img{
 width: 60px;
 height: 60px;
}
.description{
 font-size: 1rem;
 margin-left: 1em;
 font-weight: bold;
 color: rgb(37, 17, 83)
}
</style>