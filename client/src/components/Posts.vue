<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.
    <div>
      <li v-for="post in posts" :key="post._id">
        <b>{{ post.title }}</b>
      </li>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  created () {
    PostsService.fetchPosts()
      .then(res => {
        console.log('post data: ', res.data)
        this.posts = res.data.posts
      })
      .catch(err => {
        console.log('post error: ', err)
      })
      .finally(() => {
        console.log('posts: ', this.posts)
      })
  }
}
</script>
