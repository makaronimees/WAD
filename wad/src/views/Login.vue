<template>
  <div class="login">
    <Header />
    <LoginForm />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    Header,
    LoginForm,
    Footer
  }
};
</script>