<template>
    <div className={Style.article} >
      <div className={Style.left}>
        <span className={Style.tag}><Link to={`/users/${author}`} >Author:  {author}</Link></span>
        <span className={Style.tag}>Date: {created_at.split("T")[0]}</span>
      </div>
      <div className={Style.mid}>
        <p>Comment: {body}</p>
      </div>
      <div className={Style.right}>
        <div className="vote"><Vote votes={votes} id={comment_id} handleVote={updateComment} /></div>
        <div className="vote">
          {children}
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:'CommentItem',
    props:['comment']
}
</script>

<style scoped>
.article{
 display: flex;
 flex-flow: wrap column;
 align-items: center; 
 border: 1px solid rgb(1, 1, 37);
 border-radius: 1em;
 margin: 0.7em .3em 0.3em 0em;
}

.left{
 text-align: left;
 display: flex;
 flex-flow: row wrap;
 margin:0.5em 0.8em 0.2em;
}
.mid{
 
 text-align: justify;
 line-height: 1.5em;
 margin: 0.2em 0.5em;
}
.right{
 display: flex;
 flex-flow: row wrap;
 text-align: center;
 justify-content: center;
 align-items: center;
 margin-bottom: 0.5em;
}
.button{
 margin: 0.5em 0.8em;
}
.tag{
 margin: 0.5em 0.4em 0.2em;
}
</style>