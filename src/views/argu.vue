<template>
    <div>
        {{ name }}
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'sunan'
        }
    },
    // 路由发生变化，组件被复用的时候调用
    beforeRouteUpdate(to, from, next) {
        // console.log(to.name, from.name)
    }
}
</script>