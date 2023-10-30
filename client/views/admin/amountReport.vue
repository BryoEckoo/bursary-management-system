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
                          <a href="#" @click="$router.push('/admin/reports/amount')"  class="nav_link active"> <i class='fa fa-money-bill fa-fw nav_icon'></i> <span class="nav_name">Amount Reports</span> </a>
                          <a href="#" @click="$router.push('/admin/reports/bursary')"  class="nav_link"> <i class='fa fa-shopping-cart fa-fw nav_icon'></i> <span class="nav_name">Bursary Reports</span> </a>
                          <a href="#" @click="$router.push('/admin/reports/wards')"  class="nav_link"> <i class='fa-solid fa-earth-oceania fa-fw nav_icon'></i> <span class="nav_name">Wards Reports</span> </a>
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
                  <li class="breadcrumb-item active">Amount Reports</li>
                </ul>
              </div>
            </div>
          </div>
    
          <div class="row">
            <div class="col-md-12">
              <a href="#" @click="printAllReports" class="btn btn-primary mb-3">Print All</a>
              <a href="#" @click="openPrintByLocationModal" class="btn btn-secondary mb-3">Print By Location</a>
              <div class="modal fade" id="Print" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="text-center">Print Bursement List</h4>
                    </div>
                    <div class="modal-body">
                      <form @submit.prevent="printReportsByLocation">
                        <label class="font-weight-bold">Location:</label>
                        <select v-model="selectedLocation" class="form-control font-weight-bold">
                          <option value="">-Select Location Here-</option>
                          <option>Munyaka</option>
                          <option>Silas</option>
                          <option>Ilula</option>
                          <option>Block 10</option>
                          <option>Marura</option>
                          <option>Jerusalem</option>
                        </select>
                        <input type="submit" value="Print" name="print" class="btn font-weight-bold text-white btn-success form-control mt-2">
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card card-chart">
                <h4 class="font-weight-bold">TOTAL BURSEMENT AMOUNT: {{ formattedNumber }}</h4>
                <div id="line_graph">
                  <!-- Your graph content here -->
                </div>
                <div class="table-responsive">
                  <table class="table table-bordered table-striped" id="sample">
                    <thead>
                      <tr>
                        <th class="font-weight-bold text-center">#</th>
                        <th class="font-weight-bold text-center">Report Id</th>
                        <th class="font-weight-bold text-center">Student Name</th>
                        <th class="font-weight-bold text-center">Parent Name</th>
                        <th class="font-weight-bold text-center">School Level</th>
                        <th class="font-weight-bold text-center">School Name</th>
                        <th class="font-weight-bold text-center">Location</th>
                        <th class="font-weight-bold text-center">Amount Awarded</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(val, index) in data" :key="val.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ val.report_id }}</td>
                        <td>{{ val.student_name }}</td>
                        <td>{{ val.parent }}</td>
                        <td>{{ val.school_level }}</td>
                        <td>{{ val.school_name }}</td>
                        <td>{{ val.location }}</td>
                        <td>{{ val.Amount_awarded }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>  
</template>
<script>
export default {
  name:'amountReport',
  data(){
      return{
          isSubmenuExpanded: {
              1: false,
              2: false,
              data: [], // Replace with your actual data
              selectedLocation: '',
              formattedNumber: 0, // Replace with your formatted number
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
   // Replace with your API calls or methods
   printAllReports() {
      // Implement the logic to print all reports
    },
    openPrintByLocationModal() {
      // Implement the logic to open the print by location modal
    },
    printReportsByLocation() {
      // Implement the logic to print reports by location
    },
},
created() {
    // Fetch and set the data (replace with actual data fetching)
    this.data = [
      // Replace with your actual data
    ];
  },
};

</script>
