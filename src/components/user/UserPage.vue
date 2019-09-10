<template>
    <div>
        <UserItem :username='author.username' :name='author.name' :avatar_url='author.avatar_url'/>
        <ArticleList :author='user' />
    </div>
</template>

<script>
import UserItem from './UserItem';
import { mapGetters } from 'vuex';
import {getUser}  from '../api';
import ArticleList from '../article/ArticleList';

export default {
    name: 'UserPage',
    components:{
       UserItem,
       ArticleList,
    },
    props:{
        user:{type: String}
    },
    computed:{
        ...mapGetters([
            'author',
        ])
    },
    watch:{
      user(){
          this.$store.dispatch('getAuthor', this.user)
      }
    },
    created(){
         this.$store.dispatch('getAuthor', this.user)
    }
}
</script>

