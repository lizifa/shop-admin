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
        if (key === 'LOGOUT') {
          router.replace({ path: '/login' })
        }
      })
    })
  }
}
</script>
