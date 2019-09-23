<template lang="pug">
  layout
    section#documents.section
      document-menu#menu(ref="menu")    
      .row
        .col.s12
          document-list(:documents="this.documents" @showMenu="showContextMenu($event)")
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout'

import DocumentList from '@/components/DocumentList'
import DocumentMenu from '@/components/DocumentMenu.vue'

export default {
  name: 'home',

  components: {
    Layout,
    DocumentList,
    DocumentMenu
  },

  methods: {
    showContextMenu($evt) {
      // console.log($evt)
      let menu = this.$refs.menu
      menu.position.x = $evt.clientX
      menu.position.y = $evt.clientY
      menu.$el.style.display = 'block'

      document.addEventListener('click', function hidemenu() {
        menu.$el.style.display = 'none'
        document.removeEventListener('click', hidemenu)
      })
    }
  },

  data() {
    return {
      documents: [
        { _id: 1, name: 'krushn', content: 'dayshmookh' },
        { _id: 2, name: 'tushar', content: 'joshi' },
        { _id: 3, name: 'aditi', content: 'sulke' }
      ]
    }
  }
}
</script>
