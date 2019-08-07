import Axios from '@/services/Axios'

export default {
  fetchPosts () {
    return Axios().get('/posts')
  }
}
