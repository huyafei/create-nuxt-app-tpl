<template>
  <div class="layout-default">
    <EaHeader></EaHeader>
    <nuxt />
    <EaFooter></EaFooter>
  </div>
</template>
<script>
  import EaHeader from '@/components/Header';
  import EaFooter from '@/components/Footer';
  export default {
    name:'',
    components:{
      EaHeader,
      EaFooter
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>
<style>

</style>
