<template>
  <div class="overflow-hidden">
    <div class="text-center mb-8">
      <!-- TODO toggle ボタンをいい感じのデザインにする -->
      <v-btn
        color="dark"
        @click="drawer = !drawer"
      >
        Toggle Navigation
      </v-btn>
    </div>
    <v-bottom-navigation
      :input-value="drawer"
      color="primary"
      height="600"
    >
      <AnswerList :question-uid="questionUid" />
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 1,
      drawer: true,
    }
  },
  computed: {
    questionUid() {
      return this.$route.params.questionId
    }
  },
}
</script>