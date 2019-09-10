<template>
  <Select :value='user' @change='onChange'>
   <option value="jessjelly">jessjelly</option>
   <option value="tickle122">tickle122</option>
   <option value="grumpy19">grumpy19</option>
   <option value="happyamy2016">happyamy2016</option>
   <option value="cooljmessy">cooljmessy</option>
   <option value="weegembump">weegembump</option>
  </Select>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'UserSelect',
    computed:{
        ...mapGetters([
            'user'
        ])
    },
    methods:{
        onChange(event){
            this.$store.dispatch('updateUser', event.target.value);
        }
    }
}
</script>

