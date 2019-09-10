<template>
    <div class="sort">
   <label>SORT BY:</label>
   <select :value='sortValue' @change="$emit('sortChange', $event.target.value)">
    <option v-for='option in options' :key='option' :value='option'>{{option}}</option>
   </select>
  </div>
</template>

<script>
export default {
    name: 'SortSelect',
    props:['sortValue', 'options']
}
</script>