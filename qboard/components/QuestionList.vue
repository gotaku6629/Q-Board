<template>
  <v-card class="d-flex justify-space-around flex-wrap" style="min-height: 65vh">
    <Question v-for="question in questions" :key="question.id" :question-id="question.id" />
    <!--
    <Question v-for="question in questions" :key="question.id" />
    -->
  </v-card>
</template>
<script>
export default {
  props: {
    category: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    questions() {
      return this.$store.getters['questions/byCategory'](this.category)
    },
  },
}
</script>