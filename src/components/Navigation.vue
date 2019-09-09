<template>
    <nav >
        <router-link to='/' class="title-link">Home</router-link>
            <p v-if='loading'>...loading</p>
            <router-link v-for='topic in topics' :key='topic.slug' :to="'/topics/' + topic.slug" class="title-link">
                {{topic.slug}}
            </router-link>
      </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name:'Navigation',
    computed: {
        ...mapGetters([
            'topics',
            'loading',
            'error'
        ]),
    },
    created(){
        this.$store.dispatch('getTopics');
    }
}
</script>