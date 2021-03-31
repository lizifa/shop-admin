<template>
  <h1>
    {{ href }}
  </h1>
</template>

<script>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'VabTabs',
  setup() {
    let href = ref(location.href)
    let route = useRoute()
    watch(
      () => route.path,
      () => {
        href.value = location.href
      }
    )
    return {
      href
    }
  }
}
</script>
