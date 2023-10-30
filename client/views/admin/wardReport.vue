<template>
  <div id="body-pd">
    <header class="header" id="header">
      <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
      <h4 class="text-center">BURSARY MANAGEMENT SYSTEM</h4>
      <img src="../../src/assets/logo1.jpg" class="header_img" alt="nandi logo">
  </header>
      <div class="l-navbar" id="nav-bar">
          <nav class="nav">
              <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">BBBootstrap</span> </a>
                  <div class="nav_list">
                       <a href="#" @click="$router.push('/admin/dashboard')" class="nav_link"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a>
                       <a href="#" @click="$router.push('/admin/applications')" class="nav_link"> <i class='fa fa-file fa-fw nav_icon'></i> <span class="nav_name">Applications</span> </a> 
                       <a href="#" @click="$router.push('/admin/beneficiaries')" class="nav_link"> <i class='fa fa-users fa-fw nav_icon'></i> <span class="nav_name">Beneficiaries</span> </a> 
                       <a href="#" @click="toggleSubmenu(1)" class="nav_link active"> <i class='fa-solid fa-file-lines nav_icon'></i> <span class="nav_name">Reports</span> <span class="ml-auto" v-if="isSubmenuExpanded[1]"></span> </a> 
                       <div v-if="isSubmenuExpanded[1]">
                          <a href="#" @click="$router.push('/admin/reports/amount')"  class="nav_link"> <i class='fa fa-money-bill fa-fw nav_icon'></i> <span class="nav_name">Amount Reports</span> </a>
                          <a href="#" @click="$router.push('/admin/reports/bursary')"  class="nav_link"> <i class='fa fa-shopping-cart fa-fw nav_icon'></i> <span class="nav_name">Bursary Reports</span> </a>
                          <a href="#" @click="$router.push('/admin/reports/wards')"  class="nav_link active"> <i class='fa-solid fa-earth-oceania fa-fw nav_icon'></i> <span class="nav_name">Wards Reports</span> </a>
                       </div> 
                       <a href="#" @click="$router.push('/admin/users')" class="nav_link "> <i class='fa-solid fa-user nav_icon'></i> <span class="nav_name">Users</span> </a>  
                  </div>
              </div> 
              <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
          </nav>
      </div>
      <!--Container Main start-->
      <div class="page-wrapper body">
        <div class="content container-fluid">
          <div class="page-header">
            <div class="row">
              <div class="col-sm-12">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active font-weight-bold" style="text-transform: uppercase;">Location Reports</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div id="line_graph">
              <div v-if="message" class="alert alert-warning alert-dismissible fade show text-center" role="alert" style="position: sticky">
                <span class="font-weight-bold">{{ message }}</span>
                <button type="button" class="close" @click="clearMessage" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <form @submit.prevent="printLocationReport">
              <label>Select Location:</label>
              <select v-model="selectedLocation" class="form-control">
                <option value="">-select location-</option>
                <option>Munyaka</option>
                <option>Ilula</option>
                <option>Marura</option>
                <option>Block 10</option>
                <option>Silas</option>
                <option>Jerusalem</option>
              </select>
              <input type="submit" value="PRINT" class="btn btn-warning mt-2">
            </form>
          </div>
        </div>
      </div>
  </div>  
</template>
<script>
export default {
  name:'wardReport',
  data(){
      return{
          isSubmenuExpanded: {
              1: false,
              2: false,
              selectedLocation: '', // Selected location
              message: '', // Message to display
          },
      };
  },
mounted() {
  document.addEventListener("DOMContentLoaded", () => {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);
      const bodypd = document.getElementById(bodyId);
      const headerpd = document.getElementById(headerId);

      // Validate that all variables exist
      if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
          // show navbar
          nav.classList.toggle('show');
          // change icon
          toggle.classList.toggle('bx-x');
          // add padding to body
          bodypd.classList.toggle('body-pd');
          // add padding to header
          headerpd.classList.toggle('body-pd');
        });
      }
    };

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
      if (linkColor) {
        linkColor.forEach((l) => l.classList.remove('active'));
        this.classList.add('active');
      }
    }

    linkColor.forEach((l) => l.addEventListener('click', colorLink));

    // Your code to run since DOM is loaded and ready
  });
},
methods:{
  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  },
  toggleSubmenu(id) {
    this.isSubmenuExpanded[id] = !this.isSubmenuExpanded[id];
  },
  printLocationReport() {
      if (this.selectedLocation) {
        // Implement the logic to print the location report for the selected location
        // You can use this.selectedLocation for the selected location value
        // Display success or error messages as needed
        this.message = `Location report for ${this.selectedLocation} printed successfully`;
      } else {
        this.message = 'Please select a valid location';
      }
    },
    clearMessage() {
      this.message = ''; // Clear the message
    },
  },
};

</script>
