<template>
  <v-container class="responsive-style">
    <iframe
      width="560"
      height="315"
      :src="movie"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <video
      v-for="(stream, i) in streams"
      :key="i"
      autoplay
      :srcObject.prop="stream"
      style="display: none"
    />
  </v-container>
</template>

<script>
// import Peer from 'skyway-js'
import { mapActions } from 'vuex'

export default {
  beforeRouteUpdate(to, from, next) {
    if (this.call) {
      this.call.close()
      this.leaveAnswer({ answerId: this.$route.params.answerId })
    }
    next()
  },
  beforeRouteLeave(to, from, next) {
    if (this.call) {
      this.call.close()
      this.leaveAnswer({ answerId: this.$route.params.answerId })
    }
    next()
  },
  // layout: 'movie',
  middleware: 'checkAuth',
  data: () => ({
    streams: [],
    call: null,
    localStream: null,
  }),
  computed: {
    question() {
      const question = this.$store.getters['questions/byId'](
        this.$route.params.questionId
      )
      if (question) {
        const url = new URL(answer.answerLink)
        url.searchParams.set('autoplay', 1)
        return url
      }
      return null
    },
  },
}
</script>

<style lang="scss" scoped>
.responsive-style {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 50%;
}
.responsive-style iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
