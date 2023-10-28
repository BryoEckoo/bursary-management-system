  <template>
    <div id="body-pd">
        <header class="header" id="header">
            <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
            <h4>BURSARY MANAGEMENT SYSTEM</h4>
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
        <div class="height-100 bg-light">
            <div class="page-wrapper">
              <div class="content container-fluid">
                <div class="page-header">
                  <div class="row">
                    <div class="col-sm-12">
                      <h3 class="page-title">Applications</h3>
                      <ul class="breadcrumb">
                        <li class="breadcrumb-item active">Applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
          
                <div class="row">
                  <div class="col-md-12">
                    <!-- Revenue Chart -->
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
                                <th class="font-weight-bold text-center">REF-NO.</th>
                                <th class="font-weight-bold text-center">Applicant Name</th>
                                <th class="font-weight-bold text-center">School Type</th>
                                <th class="font-weight-bold text-center">Location</th>
                                <th class="font-weight-bold text-center">Application Date</th>
                                <th class="font-weight-bold text-center">Status</th>
                                <th class="font-weight-bold text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(val, index) in data" :key="val.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ val.reference_number }}</td>
                                <td>{{ val.student_fullname }}</td>
                                <td>{{ val.school_type }}</td>
                                <td>{{ val.location }}</td>
                                <td>{{ val.today_date }}</td>
                                <td class="text-warning font-weight-bold">{{ val.status }}</td>
                                <td class="text-center">
                                  <button @click="editApplication(val.reference_number)" class="btn btn-primary" data-toggle="modal" :data-target="'#Edit' + val.reference_number">Edit</button>
                                  <button @click="approveApplication(val.id)" class="btn btn-success" data-toggle="modal" :data-target="'#Approve' + val.id">Approve</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <!-- /Revenue Chart -->
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>  
  </template>
  <script>
  export default {
    name:'adminApplications',
    data(){
        return{
            isSubmenuExpanded: {
                1: false,
                2: false,
                data: [], // Replace with your actual data
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
    //  // Implement your methods here
    //  editApplication(referenceNumber) {
    //   // Add code to handle editing the application with the given reference number
    // },
    // approveApplication(id) {
    //   // Add code to handle approving the application with the given ID
    // },
  },
  created() {
    // Fetch and set the data (replace with actual data fetching)
    this.data = [
      // Replace with your actual data
    ];
  },
};
  
</script>