<template lang="pug">
  ul.collapsible
    li(v-for="doc in documents" :key="doc._id")
      .collapsible-header {{ doc.name }}
      .collapsible-body.white
        document-holder(@showMenu="$emit('showMenu',$event)")
</template>

<script>
import DocumentHolder from '@/components/DocumentHolder.vue'

export default {
  props: ['documents'],
  components: {
    DocumentHolder
  }
}
</script>

<style scoped lang="scss">
ul {
  border-radius: 2px;
  overflow: hidden;
}
</style>
