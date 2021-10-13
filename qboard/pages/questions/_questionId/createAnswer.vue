<template>
  <v-form ref="form">
    <h2>Create a new Answer</h2>
    <v-text-field
      v-model="title"
      label="Answer title"
      background-color="rgb(50,50,50)"
      outlined
      required
      :rules="[(v) => !!v || 'title is required']"
    ></v-text-field>
    <v-textarea
      v-model="detail"
      label="Detail"
      background-color="rgb(50,50,50)"
      height="300"
      outlined
    ></v-textarea>
    <div class="d-flex justify-space-between">
      <v-btn color="green" @click="backToList">Back To List</v-btn>
      <v-btn color="primary" @click="create">Create Answer Room</v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'checkAuth',
  data() {
    return {
      title: '',
      detail: '',
    }
  },
  head () {
    return {
      title: 'Create Answer'
    }
  },
  methods: {
    ...mapActions({ createAnswer: 'answers/add' }),

    backToList() {
      this.$router.push('/questions/' + this.$route.params.questionId)
    },

    async create() {  
      const valid = this.$refs.form.validate()
      if(valid) {
        const userId = this.$fire.auth.currentUser.displayName //uid
        const questionId = this.$route.params.questionId
        const answerInfo = {
          title: this.title,
          detail: this.detail,
          userId: userId,
          questionId,
        }
        const res = await this.createAnswer(answerInfo)
        // 作成したルームのページに移動
        //this.$router.push('/questions/' + questionId + '/' + res.id)
        this.$router.push('/questions/' + this.$route.params.questionId)
      }
    },
  },
}
</script>