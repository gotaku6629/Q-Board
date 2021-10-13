<template>
  <v-form ref="form">
    <h2>Create a new Question</h2>

    <!-- 0. date -->
    <v-text-field
      v-model="date"
      label="date-time (2021/10/15 12:00)"
      background-color="rgb(50,50,50)"
      outlined
      required
      :rules="[(v) => !!v || 'title is required']"
    ></v-text-field>

    <!-- 1. category -->
    <v-text-field
      v-model="category"
      label="category (技術系, 営業系, スタッフ系)"
      background-color="rgb(50,50,50)"
      outlined
      required
      :rules="[(v) => !!v || 'title is required']"
    ></v-text-field>

    <!-- 2. title -->
    <v-text-field
      v-model="title"
      label="Question title"
      background-color="rgb(50,50,50)"
      outlined
      required
      :rules="[(v) => !!v || 'title is required']"
    ></v-text-field>

    <!-- 3. detail -->
    <v-textarea
      v-model="detail"
      label="Detail"
      background-color="rgb(50,50,50)"
      height="300"
      outlined
    ></v-textarea>

    <!-- 4. level -->
    <v-text-field
      v-model="lebel"
      label="Question lebel (1:low, 2:mid, 3:high)"
      background-color="rgb(50,50,50)"
      outlined
      required
      :rules="[(v) => !!v || 'title is required']"
    ></v-text-field>

    <!-- 5. botton -->
    <div class="d-flex justify-space-between">
      <v-btn color="green" @click="backToList">Back To List</v-btn>
      <v-btn color="primary" @click="create">Create Question</v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  middleware: 'checkAuth',
  data() {
    return {
      date: '',
      category: '',
      title: '',
      detail: '',
      lebel: '',
    }
  },
  head () {
    return {
      title: 'Create Question'
    }
  },
  methods: {
    ...mapActions({ createQuestion: 'questions/add' }),

    backToList() {
      this.$router.push('/')
    },

    async create() {  
      const valid = this.$refs.form.validate()
      if(valid) {
        const userId = this.$fire.auth.currentUser.displayName //uid
        const questionInfo = {
          user: userId,
          date: this.date,
          category: this.category,
          title: this.title,
          detail: this.detail,
          lebel: this.lebel,
        }
        const res = await this.createQuestion(questionInfo)
        // 作成したルームのページに移動
        //this.$router.push('/questions/' + questionId + '/' + res.id)
        this.$router.push('/')
      }
    },
  },
}
</script>