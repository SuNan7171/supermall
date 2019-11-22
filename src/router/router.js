import Home from '@/views/Home.vue'
export default [
    {
      path: '/',
      alias: '/home_123',
      name: 'home',
      // 别名
      component: Home,
      // props: route => {
      //   return {
      //     food: route.query.food
      //   }
      // }
      props: route => ({
        food: route.query.food
      }),
      beforeEnter: (to, from, next) => {
        // if(from.name === 'about') alert('这是从about页面来的')
        // else alert('这不是从about页面来的')
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      props: {
        food: 'banana'
      },
      meta: {
        title: '关于'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // （）=> 只有访问到这个页面的时候才会加载，起到懒加载的作用
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/argu/:name',
      name: 'argu',
      component: () => import('@/views/argu.vue'),
      props: true
    },
    {
      path: '/parent',
      name: 'parent',
      component: () => import('@/views/parent.vue'),
      children: [
        {
          path: 'child',
          component: () => import('@/views/child.vue')
        }
      ]
    },
    {
      path: '/named_view',
      components: {
        default: () => import('@/views/child.vue'),
        email: () => import('@/views/email.vue'),
        phone: () => import('@/views/phone.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    // 路由重定向
    {
      path: '/main',
      // redirect: to => {
      //   return {
      //     name: 'about'
      //   }
      // }
      redirect: to => '/about'
    },
    {
      path: '*',
      component: () => import('@/views/error_404.vue')
    }
]