<template>
  <div id="app">
    <router-view />
    <div
      style="position:fixed;text-align:center;bottom:0;margin:0 auto;width:100%;color: #5c6b77"
    >
      <a
        target="_blank"
        style="color: #5c6b77"
        href="https://beian.miit.gov.cn/"
      >粤ICP备2022087079号</a
      >
      &nbsp; @2022 提醒助手
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
