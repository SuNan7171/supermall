完整的导航解析流程：
    1.导航被触发
    2.在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
    3.调用全局的前置守卫 beforeEach
    4.在复用的组件里调用 beforeRouteUpdate  如果没有复用组件将会调用 beforeEnter
    5.调用路由独享的守卫 beforeEnter
    6.解析异步路由组件
    7.在被激活的组件里（即将进入的组件页面）调用beforeRouteEnter
    8.调用全局的解析守卫 beforeResolve
    9.导航被确认
    10.调用全局的后置守卫 afterEach   所有的钩子都完成了
    11.会触发DOM的更新渲染   此时页面就渲染完了
    12.用创建好的实例，调用beforeRouteEnter守卫里传给next的回调函数（vm）

    

路由源信息：
        