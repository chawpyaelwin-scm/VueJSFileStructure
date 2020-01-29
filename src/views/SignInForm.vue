<template>
  <el-container class="signIn">
    <el-main>
      <div class="container">
        <el-row style="padding-bottom:2rem">
          <strong>SignIn Form</strong>
        </el-row>
        <el-row class="container__form">
          <el-input placeholder="example@gmail.com" v-model="email"></el-input>
        </el-row>
        <el-row class="container__form">
          <el-input placeholder="******" v-model="password" type="password"></el-input>
        </el-row>
        <el-row class="container__buttons">
          <div class="button button--right">
            <el-button
              @click="onClickSignIn(email,password)"
              type="primary"
              :loading="isLoading"
            >サインイン</el-button>
          </div>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Auth from "@/services/auth.service";
const authService = new Auth();
export default {
  components: {},
  mounted() {
  },
  data() {
    return {
      email: "",
      password: "",
      user: {
        email: "tester001@test.com",
        password: "test1234"
      },
      isLoading: false
    };
  },
  methods: {
    async onClickSignIn(email, password) {
      this.isLoading = true;
      if (email=== this.user.email && password === this.user.password) {
        this.$router.push("/userlist");
        return;
      }
      this.isLoading = false;
      alert("サインインに失敗しました。");
    },
    onChangeUser(event) {
      this.email = event;
      this.password = users.filter(el => el.email === event)[0].password;
    }
  }
};
</script>

<style scoped>
.container {
  width: 40vw;
  height: 40vw;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.logo {
  width: 50%;
  margin: 50px auto;
  display: block;
}
.container__form {
  margin-bottom: 10px;
}
.container__buttons {
  display: flex;
}

.button {
  display: flex;
  flex: 1;
  align-items: flex-end;
}

.button--right {
  justify-content: flex-end;
}
@media (max-width: 1024px) {
  .container {
    position: absolute;
  }
}
</style>
