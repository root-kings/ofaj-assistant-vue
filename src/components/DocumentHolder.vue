<template lang="pug">
  #document-holder(@contextmenu.prevent="$emit('showMenu',$event)")
</template>

<style lang="scss" scoped>
#document-holder {
  width: 100%;
  height: 300px;
  border: 1px solid black;
}
</style>
