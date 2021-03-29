<template>
  <div class="hello">
    <h1>{{ href }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup() {
    let href = ref(location.href)
    return {
      href
    }
  }
}
</script>
