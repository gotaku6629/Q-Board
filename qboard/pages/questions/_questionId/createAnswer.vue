<template>
  <v-row justify="space-between" align="center">
    <v-col justify="center" align="center" cols="12">
      <p
        class="text-justify"
        style="margin-top: 30px; margin-bottom: 0%"
      >Answer title<br></p>
      <v-text-field
        v-model="title"
        label="Answer title"
        background-color="rgb(50,50,50)"
        outlined
      ></v-text-field>
    </v-col>
    <v-col justify="center" align="center" cols="12">
      <p
        class="text-justify"
        style="margin-bottom: 0%"
      >Answer title<br></p>
      <v-textarea
        v-model="detail"
        label="Detail"
        background-color="rgb(50,50,50)"
        height="300"
        outlined
      ></v-textarea>
    </v-col>
    <v-btn color="green" @click="back_to_list"
    >Back To List</v-btn>
    <v-btn color="orange" @click="create_answer"
    >Create Answer Room</v-btn>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  middleware: "checkAuth",
  data() {
    return {
      movie_id: '',
      user_id: '',
      title: '',
      detail: '',
      skyway: '',
      room_info: { },
      debug: 'hello'
    }
  },
  methods : {
    ...mapActions({ createRoom: 'answers/add' }),

    back_to_list() {
      this.question_id = this.$router.resolve('questions/').location.path.split('/')[2]
      this.$router.push("/questions/" + this.question_id)
    },
    create_answer() {
      this.question_id = this.$router.resolve('questions/').location.path.split('/')[2]
      this.user_id = this.$fire.auth.currentUser.uid;

      // this.debug = this.movie_id + " ## " + this.user_id + " ## " + this.title + " ## " + this.detail

      this.answer_info = {
        title: this.title,
        users: [this.user_id],
        detail: this.detail,
        adminId: this.user_id,
        skyway: '',
        movieId: this.movie_id,
        id: '0'
      };
      this.createAnswer(this.answer_info)
      // 作成したルームのページに移動
      this.$fire.firestore.collection("answers").where('id', "==", '0')
        .where('title', '==', this.title).where('detail', '==', this.detail)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // this.debug += doc.id + " * "
              this.$router.push("/questions/" + this.question_id + "/" + doc.id)
          });
      })
      .catch((error) => {
          console.error("Error getting documents: ", error);
      });
    }
  }
}
</script>
