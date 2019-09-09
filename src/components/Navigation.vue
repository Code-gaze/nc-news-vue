<template>
    <nav >
        <!-- <Link to={`/`} className="title-link">Home</Link>
        {loading && <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />}
        {error && <p>error: {error}</p>}
        {topics && topics.map(topic => <Link to={`/topics/${topic.slug}`} key={topic.slug} className="title-link">{topic.slug}</Link>
        )} -->
        in navigation, {{topics[0].slug}}
      </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name:'Navigation',
    computed: {
        ...mapGetters([
            'topics'
        ]),
    },
    created(){
        this.$store.dispatch('getTopics');
    }
}
</script>