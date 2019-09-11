# A Vue Northcoders-News Client with Vuex and Vue Router

This App web is hosted on [click here](https://nc-news-vue.netlify.com/).

Northcoders News is a social news aggregation, web content rating, and discussion website. Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments (comment can only be deleted by its author, so please select the correct current user to delete a comment) which they have added.

## Features

- Maximize **`component reuse`**, such as the voting button, toggle-button, article list, comment-list, sort-select and handler functions.

- Lots of interactivity such as sorting, ordering, selecting page and item limit in each page, voting, posting and deleting comment with user authorization.

- Applying **`slot pattern`**  to reuse the CommentItem in both Article and User Page, where an additional article link only present in userPage.

- Implement **`optimistic response`** for the vote button.

- Page-number style **`pagination`** implemented.

- Responsive.

## Installation

- git clone https://github.com/Code-gaze/nc-news-vue.git
- cd nc-news-vue.
- npm install.
- npm run serve.
- visit http://localhost:8080