<template>
    <div class='article' >
   <!-- <div className={Style.left}>
    <span className={Style.tag}><Link to={`/topics/${topic}`} >topic: {topic} </Link></span>
    <span className={Style.tag}><Link to={`/users/${author}`} >
     Author: {author}</Link></span>
    <span className={Style.tag}>Date: {created_at.split("T")[0]}</span>
    <span className={Style.tag}>Comments: {comment_count}</span>
   </div>
   <div className={Style.mid}>
    <p><strong>Title: {title}</strong></p>
    <p>Text: {body}</p>
   </div>
   <div className={Style.right}>
    <Vote votes={votes} id={article_id} handleVote={updateArticle} />
   </div> -->
   in article card
  </div>
</template>

<script>
export default {
    name: 'ArticleCard'
}
</script>

<style scoped>
 .article{
 display: flex;
 flex-flow: wrap column;
 align-items: center; 
 border: 1.5px solid rgb(1, 1, 37);
 border-radius: 1em;
 margin-bottom: 0.5em;
}

.left{
 display: flex;
 flex-flow: row wrap;
 text-align: left;
 margin-left: 0.5em;
 margin-right: 0.5em;
}
.mid{
 
 text-align: justify;
 line-height: 1.5em;
 margin: 0.5em 0.5em;
}
.right{
 display: flex;
 flex-flow: row wrap;
 text-align: center;
 justify-content: center;
 margin:0em 0.5em 1em;
}
.tag{
 margin: 0.6em 1em 0em;
}
.p{
 margin-right: 1em;
}
</style>