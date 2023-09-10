<template>
  <div id="app">
    <PageHeader></PageHeader>
    <transition name="fade-right" mode="out-in">
      <router-view></router-view>
    </transition>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
export default {
  name: 'App',
  components: {
    PageHeader, PageFooter
  }
}
</script>

<style lang="scss" scoped>
.fade-right-enter-active, .fade-right-leave-active {
  transition: all 0.5s; /* 过渡动画持续时间 */
}
.fade-right-enter, .fade-right-leave-to {
  /* 进场前和离场后的初始/结束状态，设置透明度为0 */
  opacity: 0;
  /* 向左移动30像素 */
  transform: translateX(-30px); 
}

</style>