<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-row class="mb-5">
        <!-- 1.images -->
        <v-tabs-items v-model="tab" style="width: 100%; height: 80vh">
          <v-tab-item>
            <v-img
              src="https://kenkou.plus/wp-content/uploads/2018/05/3ce436f04ca45fafceefeb757daa9c7b.png"
            ></v-img>
          </v-tab-item>
          <v-tab-item>
            <v-img
              src="https://ampmedia.jp/wp-content/uploads/2021/03/%E3%82%B8%E3%82%A7%E3%82%A4%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB_A3.png"
            ></v-img>
          </v-tab-item>
          <v-tab-item>
            <v-img
              src="https://www.scsk.jp/case/case-details/202105tomods/img/index.jpg"
            ></v-img>
          </v-tab-item>
        </v-tabs-items>

        <!-- 2.trends -->
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab>Trends</v-tab>
          <v-tab>Popular</v-tab>
          <v-tab>Recently Added</v-tab>
        </v-tabs>
      </v-row>

      <!-- 3.create_new_question -->
      <v-row justify="end" class="mb-4">
        <v-col cols="12" sm="2" offset-sm="2">
          <v-btn
            block
            color="secondary"
            nuxt
            :to="`/createQuestion`"
            style="text-transform: none"
            >+Create Question</v-btn
          >
        </v-col>
      </v-row>

      <v-row>
        <v-tabs center-active fixed-tabs>
          <!-- 4.category -->
          <v-tab v-for="category in categories" :key="category">
            <v-btn color="primary" x-large>{{ category }}</v-btn>
          </v-tab>

          <!-- 5.question_list -->
          <v-tab-item v-for="category in categories" :key="category">
            <QuestionList :category="category" />
          </v-tab-item>
        </v-tabs>

        <!-- 6.test_post_method_to_AWS
        <v-btn
          class="success float-right"
          @click="post();
          dialog = false"
        >
          送信
        </v-btn>
        -->
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import axios from 'axios'

  export default {
    data: () => ({
      tab: [],
      categories: [
        '技術系',
        '営業系',
        'スタッフ系',
      ],
      user: null,
    }),

    head() {
      return {
        title: 'トップページ',
        user_id: null,
        item_id: 9, // null
        result: null,
        message: null,
        snackbar: false
      }
    },

    created() {
      this.$fire.auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user
          if (this.user.photoURL === "sample") {
            this.user.photoURL = null
          }
        } else {
          this.user = null
        }
      })
    },
  
    methods: {
      post() {
        const instance = axios.create({
          baseURL: 'https://t1vgygnuvd.execute-api.ap-northeast-1.amazonaws.com'
          // baseURL: 'https://t1vgygnuvd.execute-api.ap-northeast-1.amazonaws.com/dev/postv2'
        })
        instance.post('/dev/postv2', {
          user_id: this.user, // "gotaku"
          item_id: this.item_id  // "9"
        }).then((response) => {
          this.result = response.data.body
          this.message = '送信が完了しました'
        }).catch((error) => {
          this.result = error
          this.message = '送信が失敗しました。もう一度お試しください。'
        }).finally(() => {
          this.loading = false
          this.snackbar = true
        })
      }
    }

}
</script>