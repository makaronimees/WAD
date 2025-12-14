<template>
  <div class="signup">
    <Header />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'Signup',
  components: {
    Header,
    Form,
    Footer
  }
};
</script>