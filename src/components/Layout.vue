<template lang="pug">
  #layout
    header
      nav
        .nav-wrapper.blue-grey
          a.brand-logo(href="#") OFAJ Assistant
          a.sidenav-trigger(href="#" data-target="mobile-demo")
            i.material-icons menu
          ul#nav-mobile.right.hide-on-med-and-down
            li
              router-link(:to="'documents'") Documents
            li
              router-link(:to="'about'") About
            li
              a(@click="logout()") Logout
      ul#mobile-demo.sidenav
        li
          router-link(:to="'documents'") Documents
        li
          router-link(:to="'about'") About
        li
          a(@click="logout()") Logout
    main
      slot
    //- footer
</template>

<script>
import M from 'materialize-css'

export default {
  name: 'Layout',
  // beforeCreate: function() {
  //   if (!this.$session.exists() || !this.$session.get('user'))
  //     this.$router.push('/login')
  // },
  mounted: () => {
    M.AutoInit()
  },
  methods: {
    logout() {
      this.$session.remove('user')
      this.$session.destroy()
      this.$router.push('/login')
    }
  }
}
</script>
<!-- styling for the component -->
<style lang="scss" scoped>
#layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;

  main {
    flex: 1 0 auto;
  }
}
</style>
