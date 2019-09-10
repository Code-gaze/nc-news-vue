<template>
    <div>
        <UserItem :username='author.username' :name='author.name' :avatar_url='author.avatar_url'/>
    </div>
</template>

<script>
import UserItem from './UserItem';
import { mapGetters } from 'vuex';
import {getUser}  from '../api'

export default {
    name: 'UserPage',
    components:{
       UserItem,

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

