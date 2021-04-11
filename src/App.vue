<template>
  <router-view />
</template>
<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    let router = useRouter()
    onMounted(() => {
      window.addEventListener('storage', ({ key }) => {
        switch (key) {
          case 'LOGOUT':
            router.replace({ path: '/login' })
            break
          default:
            break
        }
      })
    })
  }
}
</script>
