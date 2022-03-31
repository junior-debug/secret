<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'HomeView',
  components: {
    Modal
  },
}
</script>
<template>
  <main class="main">
    <Modal />
  </main>
</template>
<style scoped>
  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
