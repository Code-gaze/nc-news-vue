<template>
    <div class="deletebutton">
         <button 
            @click="handleDelete"
            :disabled='author !== user'
         > Delete </button></div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'DeleteComment',
    props:['author', 'id'],
    computed:{
        ...mapGetters([
            'user'
        ])
    },
    methods:{
        handleDelete(){
            this.$store.dispatch('deleteComment', this.id)
        }
    }
}
</script>