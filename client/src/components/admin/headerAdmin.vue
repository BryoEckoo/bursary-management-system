<template>
    <div class="row p-0 m-0">
        <nav class="p-2 navbar navbar-expand-md navbar-dark bg-grey">
            <div class="row-sm-6">
                <button @click="toggleSidebar" class="col-sm-6 navbar-toggler bg-dark navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="menu-collapsed"></span>
                </button>
                <div class="col-sm-6 d-flex align-items-center">
                    <img src="../../assets/logo1.jpg" alt="logo" class="h-22 w-22">
                </div>
            </div>
            <div class="row-sm-6 text-center w-100">
                <h3 class="green">BURSARY MANAGEMENT SYSTEM</h3>
            </div>
            
        </nav>
        
    </div>
    
  </template>
  
  <script>
  export default {
    name:'headerAdmin',
    data() {
      return {
        res: null,
      };
    },
    methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    },
    toggleSubmenu(id) {
      this.isSubmenuExpanded[id] = !this.isSubmenuExpanded[id];
    },
  },
  };
  </script>
  <style>
img{
    height: 50px;
    width:50px;
}
.green{
    color: #0f893b;
}
</style>
  