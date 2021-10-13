<template>
  <v-container>
    <v-row v-if="question">
      <v-col cols="6" sm="3">
        <v-btn outlined nuxt to="/"
          ><v-icon left> mdi-chevron-left </v-icon>Back Question List</v-btn
        >
      </v-col>
      <v-col class="text-left">
        <h1>{{ question.title }} {{ question.date }} {{ question.time }}</h1>
      </v-col>
    </v-row>
    <v-row v-if="question" justify="center">
      <v-col cols="12" sm="10">
        <p class="u-pre-wrap">{{ question.detail }}</p>
        <v-img :src="question.thumbnail1"></v-img>
      </v-col>
    </v-row>
    <v-row justify="end" class="mb-4">
      <v-col cols="12" sm="2" offset-sm="2">
        <v-btn
          block
          color="secondary"
          nuxt
          :to="`/questions/${$route.params.id}/createAnswer`"
          style="text-transform: none"
          >+Create Answer</v-btn
        >
      </v-col>
    </v-row>
    <v-row v-for="answer in answers" :key="answer.id" justify="center">
      <v-col cols="12" sm="10">
        <v-card color="black" outlined tile class="py-5">
          <v-card-title>{{ answer.title }} ({{ answer.users.length }}人回答中)</v-card-title>
          <v-subheader>Answer Detail</v-subheader>
          <v-card-text>{{ answer.detail }}</v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              nuxt
              :to="`/questions/${question.id}/${answer.id}`"
              style="text-transform: none"
              >Check Answer Room</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default {
  // FireStoreからデータを取ってくる
  computed: {
    question() {
      const question = this.$store.getters['questions/byId'](this.$route.params.id)
      if (question) {
        const start = question.start.toDate()
        const end = question.end.toDate()
        question.date = `${start.getFullYear()}/${
          start.getMonth() + 1
        }/${start.getDate()}/(${weekday[start.getDay()]})`
        question.time = `${start.getHours()}:${('00' + start.getMinutes()).slice(
          -2
        )}~${end.getHours()}:${('00' + end.getMinutes()).slice(-2)}`
      }

      return question
    },

    answers() {
      return this.$store.getters['answers/byQuestion'](this.$route.params.id)
    },
  },
}
</script>

<style></style>
