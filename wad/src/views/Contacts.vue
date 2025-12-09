<template>

<div class="contacts">
  
    
</div>

<Contact/>

</template>


<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Contacts',
  components: {
    Header,
    Contact,
    Footer
    
  }
}

</script>