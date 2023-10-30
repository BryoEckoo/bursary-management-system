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
                         <a href="#" @click="toggleSubmenu(1)" class="nav_link"> <i class='fa-solid fa-file-lines nav_icon'></i> <span class="nav_name">Reports</span> <span class="ml-auto" v-if="isSubmenuExpanded[1]"></span> </a> 
                         <div v-if="isSubmenuExpanded[1]">
                            <a href="#" @click="$router.push('/admin/reports/amount')"  class="nav_link"> <i class='fa fa-money-bill fa-fw nav_icon'></i> <span class="nav_name">Amount Reports</span> </a>
                            <a href="#" @click="$router.push('/admin/reports/bursary')"  class="nav_link"> <i class='fa fa-shopping-cart fa-fw nav_icon'></i> <span class="nav_name">Bursary Reports</span> </a>
                            <a href="#" @click="$router.push('/admin/reports/wards')"  class="nav_link"> <i class='fa-solid fa-earth-oceania fa-fw nav_icon'></i> <span class="nav_name">Wards Reports</span> </a>
                         </div> 
                         <a href="#" @click="$router.push('/admin/users')" class="nav_link active"> <i class='fa-solid fa-user nav_icon'></i> <span class="nav_name">Users</span> </a>  
                    </div>
                </div> 
                <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
            </nav>
        </div>
        <!--Container Main start-->
        <div class="page-wrapper mt-5">
          <div class="content container-fluid">
            <div class="page-header">
              <div class="row">
                <div class="col-sm-12">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item active font-weight-bold" style="text-transform: uppercase;">Users</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="container col-md-10">
                <div v-if="successMessage" class="alert alert-success alert-dismissible fade show text-center" role="alert" style="position: sticky">
                  <span class="font-weight-bold">{{ successMessage }}</span>
                  <button type="button" class="close" @click="clearSuccessMessage" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show text-center" role="alert" style="position: sticky">
                  <span class="font-weight-bold">{{ errorMessage }}</span>
                  <button type="button" class="close" @click="clearErrorMessage" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <a href="#" class="btn btn-secondary" data-toggle="modal" data-target="#New">Add New User</a>
                <div class="modal fade" id="New" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h4 class="text-center">Add New User</h4>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="addUser">
                          <div class="form-group">
                            <label class="font-weight-bold">Enter Fullname:</label>
                            <input v-model="newUser.fullname" type="text" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold">Enter Email:</label>
                            <input v-model="newUser.email" type="email" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold">Enter Phone:</label>
                            <input v-model="newUser.phone" type="number" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <label class="font-weight-bold">Select Role:</label>
                            <select v-model="newUser.role" class="form-control" required>
                              <option value="">--select role--</option>
                              <option>Admin</option>
                              <option>Ass_admin</option>
                            </select>
                          </div>
                          <button type="submit" class="btn btn-success form-control mt-2">A D D</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Revenue Chart -->
                <div class="card card-chart">
                  <div class="card-body">
                    <div id="line_graph"></div>
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped table-hover">
                        <thead>
                          <tr>
                            <td>#</td>
                            <td>Fullname</td>
                            <td>Email</td>
                            <td>Actions</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="user in users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.fullname }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                              <div class="row">
                                <div class="col-md-6">
                                  <a href="#" class="btn btn-primary" data-toggle="modal" :data-target="'#Modal' + user.id">EDIT</a>
                                </div>
                                <div class="modal fade" :id="'Modal' + user.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                        <h4 class="text-center">Edit User Details</h4>
                                      </div>
                                      <div class="modal-body">
                                        <form @submit.prevent="editUser(user.id)">
                                          <div class="form-group">
                                            <label class="font-weight-bold">Enter Fullname:</label>
                                            <input v-model="user.fullname" type="text" class="form-control" required>
                                          </div>
                                          <div class="form-group">
                                            <label class="font-weight-bold">Enter Email:</label>
                                            <input v-model="user.email" type="email" class="form-control" required>
                                          </div>
                                          <div class="form-group">
                                            <label class="font-weight-bold">Enter Phone:</label>
                                            <input v-model="user.phone" type="number" class="form-control" required>
                                          </div>
                                          <div class="form-group">
                                            <label class="font-weight-bold">Enter Role:</label>
                                            <select v-model="user.role" class="form-control" required>
                                              <option :value="user.role">{{ user.role }}</option>
                                              <option value="">--select role--</option>
                                              <option>Admin</option>
                                              <option>Ass_admin</option>
                                            </select>
                                          </div>
                                          <button type="submit" class="btn btn-success form-control mt-2">E D I T</button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <a href="#" class="btn btn-secondary" data-toggle="modal" :data-target="'#Change' + user.id">Change Password</a>
                                </div>
                              </div>
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
</template>
<script>
export default {
    name:'adminUser',
    data(){
        return{
            isSubmenuExpanded: {
                1: false,
                2: false,
                users: [], // User data array
                newUser: {
                  fullname: '',
                  email: '',
                  phone: '',
                  role: '',
                }, // New user data
                successMessage: '', // Success message
                errorMessage: '', // Error message
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
    addUser() {
      if (this.newUser.fullname && this.newUser.email && this.newUser.phone && this.newUser.role) {
        // Implement the logic to add a new user
        // Push the new user data to the this.users array
        // Display a success message
        this.users.push({
          id: this.users.length + 1, // You may need to adjust the ID generation logic
          fullname: this.newUser.fullname,
          email: this.newUser.email,
          phone: this.newUser.phone,
          role: this.newUser.role,
        });
        this.successMessage = 'New user added successfully';
        this.clearNewUserForm();
      } else {
        this.errorMessage = 'Please fill in all required fields';
      }
    },
    // editUser(id) {
    //   const user = this.users.find((u) => u.id === id);
    //   if (user && user.fullname && user.email && user.phone && user.role) {
    //    //user="";
    //    const fullname = user.fullname;
    //    user.email="";
    //    user.phone="";
    //    user.role="";
    //    // Implement the logic to edit the user
    //     // Update user data in the this.users array
    //     // Display a success message
    //     //user.role = user.role; // Change user role accordingly
    //     this.successMessage = 'User details updated successfully';
    //   } else {
    //     this.errorMessage = 'Please fill in all required fields';
    //   }
    // },
    // clearNewUserForm() {
    //   this.newUser = {
    //     fullname: '',
    //     email: '',
    //     phone: '',
    //     role: '',
    //   };
    // },
    // clearSuccessMessage() {
    //   this.successMessage = '';
    // },
    // clearErrorMessage() {
    //   this.errorMessage = '';
    // },
  }
};

</script>
