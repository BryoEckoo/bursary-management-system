<template>
    <div class="row" id="body-row">
        <headerAdmin/>
        <div class="row">
            <sidebar />
        </div>
    </div>
    
  </template>
  
  <script>
  import sidebar from './sideBar.vue';
  import headerAdmin from './headerAdmin.vue';

  export default {
    name:'admBeneficiaries',
    components:{
            headerAdmin,
            sidebar,
    } ,
    data() { 
              
      return {
      };
    },
    methods: {
    },
  };
  </script>
  