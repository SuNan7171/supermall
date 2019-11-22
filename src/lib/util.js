// 与业务相结合的工具或者方法放在util文件里

export const setTitle = (title) => {
    window.document.title = title || 'admin'
}