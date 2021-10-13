<template>

  <v-card width="350px" class="my-10">

    <div v-if="question.lebel === '1'">
      <img src="/logo/hito_blue.png" height="300px">
        <div class="pa-3 text-h5" style="position: absolute; bottom: 0; background-color: rgba(107, 107, 107, 0.5);">
          <span class="primary--text">&#9679;</span>
          <strong> {{ answers.length }} Answers/ </strong>
        </div>
    </div>
    <div v-else-if="question.lebel === '2'">
      <img src="/logo/hito_yellow.png" height="300px">
        <div class="pa-3 text-h5" style="position: absolute; bottom: 0; background-color: rgba(107, 107, 107, 0.5);">
          <span class="primary--text">&#9679;</span>
          <strong> {{ answers.length }} Answers/ </strong>
        </div>
    </div>
    <div v-else-if="question.lebel === '3'">
      <img src="/logo/hito_red.png" height="300px">
        <div class="pa-3 text-h5" style="position: absolute; bottom: 0; background-color: rgba(107, 107, 107, 0.5);">
          <span class="primary--text">&#9679;</span>
          <strong> {{ answers.length }} Answers/ </strong>
        </div>
    </div>    

    <v-card-text class="text-center">
      <h2>{{ question.date }}</h2>
      <!-- <h2>{{ question.time }}</h2> -->
    </v-card-text>

    <v-card-actions class="flex-column" style="height: 100px">
      <v-btn
        block
        color="primary flex-grow-0"
        nuxt
        :to="`/questions/${question.id}`"
        style="text-transform: none"
        >Check Question Room</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn
        v-if="isLogined"
        block
        color="secondary flex-grow-0"
        nuxt
        :to="`/questions/${question.id}/createAnswer`"
        style="text-transform: none"
        >+Create Answer</v-btn
      >
    </v-card-actions>
  </v-card>

</template>
<script>
const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default {
  props: {
    questionId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    isLogined: false,
  }),
  computed: {
    question() {
      const question = this.$store.getters['questions/byId'](this.questionId)
      // const start = question.start.toDate()
      // const end = question.end.toDate()
      // question.date = `${start.getFullYear()}/${
      //   start.getMonth() + 1
      // }/${start.getDate()}/(${weekday[start.getDay()]})`
      // question.time = `${start.getHours()}:${('00' + start.getMinutes()).slice(
      //   -2
      // )}~${end.getHours()}:${('00' + end.getMinutes()).slice(-2)}`

      return question
    },
    answers() {
      return this.$store.getters['answers/byQuestion'](this.questionId)
    },
  },
  created() {
    this.$fire.auth.onAuthStateChanged((user) => {
      this.isLogined = !!user
    })
  },
}
</script>