<template>
    <div class="toggle-button">
        <button :disabled='!onLeft' @click="$emit('orderClicked', left)"> {{left}} </button>
        <button :disabled='!onLeft' @click="$emit('orderClicked', right)"> {{right}}</button>
      </div>
</template>

<script>
export default {
    name: 'ToggleButton',
    data(){
        return {
            onLeft:true,
        }
    },
    props:['left', 'right']
}
</script>