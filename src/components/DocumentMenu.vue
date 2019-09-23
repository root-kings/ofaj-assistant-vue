<template lang="pug">
  ul(:style="'left:'+position.x+';top:'+position.y+';'")
    li
        a.btn-floating.hoverable.waves-effect.waves-light.yellow
            i.material-icons comment
    li
      a.btn-floating.hoverable.waves-effect.waves-light.red
        i.material-icons edit 
    li
      a.btn-floating.hoverable.waves-effect.waves-light.orange
        i.material-icons forward
    li
      a.btn-floating.hoverable.waves-effect.waves-light.green
        i.material-icons done
    li
      a.btn-floating.hoverable.waves-effect.waves-light.blue
        i.material-icons done_all
</template>

<script>
export default {
  data() {
    return {
      position: {
        x: 0,
        y: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  position: fixed;
  z-index: 9999;
  display: none;
  li {
    padding: 3px;
    padding-left: 10px;
  }
}
</style>
