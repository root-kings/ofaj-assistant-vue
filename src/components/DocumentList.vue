<template lang="pug">
  ul.collapsible#document-list
    li(v-for="doc in documents" :key="doc._id")
      .collapsible-header {{ doc.name }}
      .collapsible-body.white {{ doc.content }}
</template>

<script>
export default {
  props: ['documents']
}
</script>

<style scoped lang="scss">
#document-list {
  border-radius: 2px;
  overflow: hidden;
}
</style>
