<template>
  <div id="app">
    <div class="AdminTemplate">
      <div class="RightSideHome">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/auth.service";
const authService = new Auth();

export default {
  mounted() {
    window.onload = () => {
      document.addEventListener("touchstart", event => {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });

      let lastTouchEnd = 0;
      document.addEventListener(
        "touchend",
        event => {
          const now = new Date().getTime();
          if (now - lastTouchEnd <= 500) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        },
        false
      );
    };
  },
  data() {
    return {
      activeName: "all"
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.user;
    }
  },
  watch: {
    "$route.name"() {
      this.checkAuthority();
    }
  },
  methods: {
    async checkAuthority() {
      const { $router } = this;
      const userResult = await authService.getCurrentUser().catch(e => {
        return { error: true, msg: e };
      });
      if (userResult.error) {
        return $router.push("/sign-in");
      } else if (!userResult.signInUserSession) {
        return $router.push("/sign-in");
      }
    },
    onClickCreateOrder() {
      const { $router } = this;
      $router.push("/orders/create/step1");
    }
  }
};
</script>

<style scoped>
#app > * {
  height: 100%;
  touch-action: manipulation;
}
.AdminTemplate {
  display: flex;
}
.RightSideHome {
  width: 100%;
  box-sizing: border-box;
}
</style>
<style lang="stylus">
html, body {
  height: 100%;
  margin: 0;
  font-family: 'Noto Sans JP', -apple-system, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ', meiryo, Verdana, 'lr oSVbN';
}

.viewContainerWithHeader {
  height: calc(100% - 61px);
}

.viewContainer {
  height: 100%;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* -------------------------------------
 * 	vue-transition css
 * ------------------------------------- */
.fade-enter-active, .fade-leave-active, .step-right-enter-active, .step-right-leave-active, .step-left-enter-active, .step-left-leave-active, .slide-right-enter-active, .slide-right-leave-active, .slide-left-enter-active, .slide-left-leave-active, .slide-top-enter-active, .slide-top-leave-active, .slide-bottom-enter-active, .slide-bottom-leave-active {
  transition: all 0.3s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translate3d(0, 0, 0);
}

.step-left-enter {
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
}

.step-left-leave-active {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
}

.step-right-enter {
  opacity: 0;
  transform: translate3d(100px, 0, 0);
}

.step-right-leave-active {
  opacity: 0;
  transform: translate3d(-100px, 0, 0);
}

.slide-top-enter, .slide-top-leave-active {
  transform: translate3d(0, -30px, 0);
  opacity: 0;
}

.slide-right-enter, .slide-right-leave-active {
  transform: translate3d(30px, 0, 0);
  opacity: 0;
}

.slide-bottom-enter, .slide-bottom-leave-active {
  transform: translate3d(0, 30px, 0);
  opacity: 0;
}

.slide-left-enter, .slide-left-leave-active {
  transform: translate3d(-30px, 0, 0);
  opacity: 0;
}

.slide-bottomLong-enter-active, .slide-bottomLong-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-bottomLong-enter, .slide-bottomLong-leave-active {
  transform: translate3d(0, 100vh, 0);
}

.slide-rightLong-enter-active, .slide-rightLong-leave-active {
  transition: all 0.3s ease;
}

.slide-rightLong-enter, .slide-rightLong-leave-active {
  transform: translate3d(105vw, 0, 0);
}

.slide-topMiddle-enter-active, .slide-topMiddle-leave-active, .slide-bottomMiddle-enter-active, .slide-bottomMiddle-leave-active {
  transition: all 0.25s ease-in-out;
}

.slide-topMiddle-enter, .slide-topMiddle-leave-active {
  transform: translate3d(0, -7.5vh, 0) scale(0.9333);
  opacity: 0;
}

.slide-bottomMiddle-enter, .slide-bottomMiddle-leave-active {
  transform: translate3d(0, 7.5vh, 0) scale(0.9333);
  opacity: 0;
}

/* -------------------------------------
 * 	vue-transition css
 * ------------------------------------- */
.slide-topdown-enter-active, .slide-topdown-leave-active {
  transition: all 0.3s ease;
}

.slide-topdown-enter {
  transform: translate3d(0, -16px, 0);
  opacity: 0;
}

.slide-topdown-leave-active {
  transform: translate3d(0, 16px, 0);
  opacity: 0;
}

.slide-leftdown-enter-active, .slide-leftdown-leave-active {
  transition: all 0.3s ease;
}

.slide-leftdown-enter, .slide-leftdown-leave-active {
  transform-origin: 80% 100%;
  transform: translate3d(0, 32px, 0) rotate(-8deg);
  opacity: 0;
}

.fade-scaleOut-enter-active, .fade-scaleOut-leave-active {
  transition: all 0.4s ease;
}

.fade-scaleOut-enter, .fade-scaleOut-leave-active {
  transform: scale(1.1);
  opacity: 0;
}

.fade-scaleIn-enter-active, .fade-scaleIn-leave-active {
  transition: all 0.4s ease;
}

.fade-scaleIn-enter, .fade-scaleIn-leave-active {
  transform: scale(0.93);
  opacity: 0;
}

.slide-mapSpot-enter-active, .slide-mapSpot-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-mapSpot-enter, .slide-mapSpot-leave-active {
  transform: translate3d(0, 141px, 0);
  transform: translate3d(0, calc(141px + constant(safe-area-inset-bottom)), 0);
  transform: translate3d(0, calc(141px + env(safe-area-inset-bottom)), 0);
}

/* -------------------------------------
 * 	vue-transition css > for Judges component
 * ------------------------------------- */
.slide-judge-enter-active, .slide-judge-leave-active {
  transition: all 1s ease;
}

.slide-judge-enter {
  transform: translateY(70px);
  opacity: 0;
}

.slide-judge-leave-to {
  transform: translateX(0px);
  opacity: 0;
}

.slide-judge-leave-active {
  position: absolute;
}
</style>
