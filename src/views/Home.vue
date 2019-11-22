<template>
  <div class="home">
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到argu</button>
    <button @click="handleClick('replace')">替换到parent</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'Apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 渲染该组件对应路由被确认之前调用，
    // 此时还没有渲染页面，所以获取不到this（当前组件的实例）
    // console.log(to.name)
    //
    next(vm => {
      // console.log(vm)
    })
  },
  // beforeRouteLeave (to, from, next) {
  //   // 在即将离开当前页面时调用此方法
  //   // const leave = confirm('您确定要离开吗?')
  //   // // 页面随用户点击跳转
  //   // if(leave) next()
  //   // // 如果传入false，页面不会跳转
  //   // else next(false)
  // },
  methods: {
    handleClick (type) {
      if(type === 'back') this.$router.back()
      else if (type === 'push') {
        this.$router.push({
          name: 'argu',
          params: {
            name: 'sunan'
          }
          // name: 'parent',
          // query: {
          //   name: 'sunan'
          // }
        })
      }
      else if(type === 'replace') this.$router.replace('/parent/child')
    }
  }
}
</script>
