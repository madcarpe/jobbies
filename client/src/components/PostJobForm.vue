<template>
  <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card>
              <v-container>
                <v-form class='ma-5'>
                  <!-- Employer Information Section -->
                  <p class="font-weight-light headline">Employer Information</p>
                      <v-text-field
                        label='Company Name'
                        v-model='employer.name' />

                      <v-text-field
                        label='Company Description'
                        v-model='employer.description'
                      />

                  <!-- Job Information Section -->
                  <p class="font-weight-light headline mt-4">Job Information</p>
                      <v-text-field
                        label='Job Title'
                        v-model='job.name'
                      />

                      <v-text-field
                        label='Pay Rate'
                        v-model='job.payRate'
                      />

                      <v-text-field
                        label='Job Type (Full-Time, Part-Time, etc.)'
                        v-model='job.type'
                      />
                      
                      <v-text-field
                        label='Job Description'
                        v-model='job.description'
                      />

                      <v-text-field
                        label='Experience'
                        v-model='job.experience'
                      />
                </v-form>
              </v-container>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    employer: Object,
    job: Object
  },
  data () {
    return {
      // data goes here
    }
  }
}
</script>
