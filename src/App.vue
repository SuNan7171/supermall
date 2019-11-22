<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- 命名路由 -->
      <!-- <router-link :to="{name: 'about'}">About</router-link> -->
    </div>
    <transition-group :name="routerTransition">
      <router-view key="default"/>
      <!-- 命名视图 如果想在同一个页面显示多个视图，而且让每一个视图显示在指定的位置 -->
      <router-view key="email" name="email"/>
      <router-view key="phone" name="phone"/>
    </transition-group>
  </div>
</template>

<style lang="scss">
// 页面进入时的效果
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease; 
}
.router-enter-to {
  opacity: 1;
}
// 页面离开时的效果
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease; 
}
.router-leave-to {
  opacity: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>

<script>
export default {
  data() {
    return {
      routerTransition: ''
    }
  },
  watch: {
    '$route' (to) {
      to.meta && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>