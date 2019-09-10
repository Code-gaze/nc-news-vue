<template>
    <div class="deletebutton">
         <button 

            :disabled='author !== user'
         > Delete </button></div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name:'DeleteComment',
    props:['author'],
    computed:{
        ...mapGetters([
            'user'
        ])
    }
}
</script>