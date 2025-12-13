<template>
    <div class="APost">
        <APost />
    </div>

</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import APost from '../components/APost.vue';

    export default {
        name: 'APost',
        components: {
            Header,
            APost,
            Footer
    
  }
}
</script>
<style>
    
</style>