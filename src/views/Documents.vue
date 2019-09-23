<template lang="pug">
  layout
    section#documents.section
      .row
        .col.s12
          document-list(:documents="this.documents")
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout'

import DocumentList from '@/components/DocumentList'

export default {
  name: 'home',
  components: {
    Layout,
    DocumentList
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

