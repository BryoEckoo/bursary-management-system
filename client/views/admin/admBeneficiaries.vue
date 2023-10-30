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
                       <a href="#" @click="$router.push('/admin/beneficiaries')" class="nav_link active"> <i class='fa fa-users fa-fw nav_icon'></i> <span class="nav_name">Beneficiaries</span> </a> 
                       <a href="#" @click="toggleSubmenu(1)" class="nav_link"> <i class='fa-solid fa-file-lines nav_icon'></i> <span class="nav_name">Reports</span> <span class="ml-auto" v-if="isSubmenuExpanded[1]"></span> </a> 
                       <div v-if="isSubmenuExpanded[1]">
                          <a href="#" @click="$router.push('/admin/reports/amount')"  class="nav_link"> <i class='fa fa-money-bill fa-fw nav_icon'></i> <span class="nav_name">Amount Reports</span> </a>
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
      <div class="height-100 bg-light body">
          <h4>BENEFICIARIES</h4>
          <div class="page-wrapper">
            <div class="content container-fluid">
              <div class="page-header">
                <div class="row">
                  <div class="col-sm-12">
                    <h3 class="page-title">Beneficiaries List Documents</h3>
                    <ul class="breadcrumb">
                      <li class="breadcrumb-item active">Beneficiaries List Documents</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <a href="#" class="btn btn-primary mb-3" @click="showNewBeneficiaryModal">Add New Beneficiary Document</a>
                  <a href="#" class="btn btn-secondary mb-3" @click="printBeneficiaryList">Print Beneficiary List</a>
        
                  <!-- Print Beneficiary Documents Modal -->
                  <div class="modal fade" id="Print" tabindex="-1" role="dialog" aria-labelledby="PrintLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="text-center">Print Beneficiary List</h4>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="printBeneficiaryList">
                            <label class="font-weight-bold">Select Year Below :</label>
                            <select v-model="selectedYear" class="form-control">
                              <option value="">-Select Year-</option>
                              <option v-for="year in years" :key="year">{{ year }}</option>
                            </select>
                            <span class="text-danger">{{ printYearError }}</span>
                            
                            <label for="" class="font-weight-bold">Location : </label>
                            <select v-model="selectedLocation" class="form-control font-weight-bold">
                              <option value="">-Select Location Here-</option>
                              <option>Munyaka</option>
                              <option>Silas</option>
                              <option>Ilula</option>
                              <option>Block 10</option>
                              <option>Marura</option>
                            </select>
                            <button type="submit" class="btn font-weight-bold text-white btn-success form-control mt-2">P R I N T</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <!-- Add New Beneficiary Document Modal -->
                  <div class="modal fade" id="New" tabindex="-1" role="dialog" aria-labelledby="NewLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="text-center">Upload New Beneficiary Document</h4>
                        </div>
                        <div class="modal-body">
                          <form @submit.prevent="uploadDocument">
                            <label class="font-weight-bold">Enter Document Name :</label>
                            <input v-model="documentName" type="text" placeholder="Enter the document name" class="form-control" required>
                            <span class="text-danger">{{ documentNameError }}</span>
        
                            <label class="font-weight-bold">Select Document :</label>
                            <input type="file" ref="fileInput" @change="handleFileChange" class="form-control" required>
                            <span class="text-danger">{{ documentError }}</span>
        
                            <button type="submit" class="btn btn-success form-control mt-2">U P L O A D</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div class="card card-chart">
                    <div class="card-body">
                      <div id="line_graph">
                        <!-- Your graph content here -->
                      </div>
                      <div class="table-responsive">
                        <table class="table table-bordered table-striped" id="sample">
                          <thead>
                            <tr>
                              <th class="font-weight-bold text-center">#</th>
                              <th class="font-weight-bold text-center">Document Name</th>
                              <th class="font-weight-bold text-center">Document</th>
                              <th class="font-weight-bold text-center">Updated at</th>
                              <th class="font-weight-bold text-center">Uploaded By</th>
                              <th class="font-weight-bold text-center">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(data, index) in value" :key="data.id">
                              <td>{{ index + 1 }}</td>
                              <td>{{ data.document_name }}</td>
                              <td>{{ data.document }}</td>
                              <td>{{ data.updated_at }}</td>
                              <td>{{ data.uploaded_by }}</td>
                              <td class="justify-content-between">
                                <a :href="'download/' + data.document" class="btn btn-warning">DOWNLOAD</a>
                                <a href="#" class="btn btn-secondary">View</a>
                              </td>
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
      </div>
  </div>  
</template>
<script>
export default {
  name:'admBeneficiaries',
  data(){
      return{
          isSubmenuExpanded: {
              1: false,
              2: false,
              value: [], // Replace with your actual data
              selectedYear: "",
              printYearError: "",
              selectedLocation: "",
              years: [],
              documentName: "",
              documentNameError: "",
              selectedFile: null,
              documentError: "",
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
  // Implement your methods here
  showNewBeneficiaryModal() {
      // Add code to show the "Add New Beneficiary Document" modal
    },
    printBeneficiaryList() {
      // Add code to handle printing the beneficiary list
    },
    uploadDocument() {
      // Add code to handle uploading a new beneficiary document
    },
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
},
created() {
    // Fetch and set the years data
    this.years = Array.from({ length: new Date().getFullYear() - 2019 }, (_, i) => 2020 + i);
    // Fetch and set the value data (replace with actual data fetching)
    this.value = [
      // Replace with your actual data
    ];
  },
};

</script>
