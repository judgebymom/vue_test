<template>
  <div id="content">
      {{title}}
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'content',
  data() {
    return {        
        title: ' 我是content.vue文件中的内容 '
    }
  },
    props: ['MyContent']
  }

</script>

<style>
</style>
