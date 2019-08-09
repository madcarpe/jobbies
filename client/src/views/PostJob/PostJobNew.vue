<template>
    <PostJobForm
      :employer='employerData'
      :job='jobData'
    />
</template>

<script>
import PostJobForm from '@/components/PostJobForm'

export default {
  components: {
    PostJobForm
  },
  data () {
    return {
      employerData: {
        name: '',
        description: ''
      },
      jobData: {
        name: '',
        type: '',
        payRate: '',
        description: '',
        experience: ''
      }
    }
  }
}
</script>
