<template>
    <div><CommentItem v-for='comment in comments' :key='comment.comment_id' :comment='comment'/></div>
</template>

<script>
import { mapGetters } from 'vuex';
import CommentItem from './CommentItem';

export default {
    name: 'CommentList',
    components:{
        CommentItem,
    },
    computed:{
        ...mapGetters([
            'comments'
        ])
    },
    props:['id'],
    created(){
        this.$store.dispatch('getComments', this.id)
    }
}
</script>