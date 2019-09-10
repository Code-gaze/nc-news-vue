<template>
  <div class='outline'>
    <h4>Post a comment to this article with current author</h4>
    <form onSubmit={this.onHandleSubmit} >
     <div class='form'>
      <div class='body'>
       <input label='comment' value={text} onChange={this.handleChange} margin='none' fullWidth />
      </div>
      <div class='submit'>
       <button type="submit" variant="contained" size="small" color="primary" disabled={!text}> Submit </button>
      </div>
     </div>
    </form>
   </div>
</template>

<script>
export default {
    name: 'AddComment',
}
</script>

<style scoped>
.outline{
 margin: 0.5em, 0.5em;
 border-radius: 1em;
 border: 1.5px solid rgb(3, 70, 6);
 margin-bottom: 0.5em;
}
.form{
 display: flex;
 flex-flow: wrap column;
 align-items: center; 
 margin-bottom: 0.9em;
}

.username{
 
 text-align: left;
}
.comment{
 
 text-align: justify;
 line-height: 1.5em;
 margin-left: 0.5em;
}
.submit{
 
 margin: 1em 0.5em 0em;
}
</style>