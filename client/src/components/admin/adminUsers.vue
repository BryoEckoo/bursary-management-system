<!-- <template>
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
   -->
<template>
    <div id="body-pd">
        <header class="header" id="header">
            <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
            <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""> </div>
        </header>
        <div class="l-navbar" id="nav-bar">
            <nav class="nav">
                <div> <a href="#" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">BBBootstrap</span> </a>
                    <div class="nav_list">
                         <a href="#" class="nav_link active"> <i class='bx bx-grid-alt nav_icon'></i> <span class="nav_name">Dashboard</span> </a>
                         <a href="#" class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">Users</span> </a> 
                         <a href="#" class="nav_link"> <i class='bx bx-message-square-detail nav_icon'></i> <span class="nav_name">Messages</span> </a> 
                         <a href="#" class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Bookmark</span> </a> 
                         <a href="#" class="nav_link"> <i class='bx bx-folder nav_icon'></i> <span class="nav_name">Files</span> </a> <a href="#" class="nav_link"> <i class='bx bx-bar-chart-alt-2 nav_icon'></i> <span class="nav_name">Stats</span> </a> 
                    </div>
                </div> 
                <a href="#" class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">SignOut</span> </a>
            </nav>
        </div>
        <!--Container Main start-->
        <div class="height-100 bg-light">
            <h4>Main Components</h4>
            <div>
                <div class="page-wrapper">
                    <div class="content container-fluid">
                      <div class="page-header">
                        <div class="row">
                          <div class="col-sm-12">
                            <!-- <h3 class="page-title">Welcome Admin!</h3> -->
                            <ul class="breadcrumb">
                              <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                          </div>
                        </div>
                      </div>
              
                      <div class="row">
                        <div class="col-xl-3 col-sm-6 col-12">
                          <div class="card bg-one">
                            <div class="card-body">
                              <div class="db-widgets d-flex justify-content-between align-items-center">
                                <div class="db-icon">
                                  <i class="fa fa-users"></i>
                                </div>
                                <div class="db-info">
                                  <h3>
                                    {{$staff}}
                                  </h3>
                                  <h6>Staff</h6>
                                </div>										
                              </div>
                            </div>
                          </div>
                        </div>
            
                        <div class="col-xl-3 col-sm-6 col-12">
                          <div class="card bg-two">
                            <div class="card-body">
                              <div class="db-widgets d-flex justify-content-between align-items-center">
                                <div class="db-icon">
                                  <i class="fa fa-user"></i>
                                </div>
                                <div class="db-info">
                                  <h3>
                                {{$student}}
                                  </h3>
                                  <h6>Students</h6>
                                </div>										
                              </div>
                            </div>
                          </div>
                        </div>
            
                        <div class="col-xl-3 col-sm-6 col-12">
                          <div class="card bg-three">
                            <div class="card-body">
                              <div class="db-widgets d-flex justify-content-between align-items-center">
                                <div class="db-icon">
                                  <i class="fa fa-receipt"></i>
                                </div>
                                <div class="db-info">
                                  <h3>
                                    {{$application}}
                                  </h3>
                                  <h6>Today's Applications</h6>
                                </div>										
                              </div>
                            </div>
                          </div>
                        </div>
            
                        <div class="col-xl-3 col-sm-6 col-12">
                          <div class="card bg-four">
                            <div class="card-body">
                              <div class="db-widgets d-flex justify-content-between align-items-center">
                                <div class="db-icon">
                                  <i class="fa fa-window-close"></i>
                                </div>
                                <div class="db-info">
                                  <h3>
                                    
                                  </h3>
                                  <h6>Today's Rollout</h6>
                                </div>										
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
              
                      <div class="row">
                        <div class="col-md-12">
                          <!-- Revenue Chart -->
                          <div class="card card-chart">
                            <div class="card-header">
                              <div class="row align-items-center">
                                <div class="col-6">
                                  <h5 class="card-title">Recent Applications</h5>
                                </div>
                                <div class="col-6">
                                  <!-- Your content here -->
                                </div>
                              </div>
                            </div>
                            <div class="card-body">
                              <div id="line_graph">
                                <!-- Your content here -->
                              </div>
                              <div class="table-responsive">
                                <table class="table table-bordered table-striped" id="sample">
                                  <thead>
                                    <tr>
                                      <th class="font-weight-bold text-center">#</th>
                                      <th class="font-weight-bold text-center">REF-NO.</th>
                                      <th class="font-weight-bold text-center">Applicant Name</th>
                                      <th class="font-weight-bold text-center">Location</th>
                                      <th class="font-weight-bold text-center">Status</th>
                                      <th class="font-weight-bold text-center">Actions</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <!-- Iterate over your applications using a v-for loop -->
                                    <tr v-for="app in applications" :key="app.id">
                                      <td>{{ app.id }}</td>
                                      <td>{{ app.reference_number }}</td>
                                      <td>{{ app.student_fullname }}</td>
                                      <td>{{ app.location }}</td>
                                      <td class="text-warning font-weight-bold">{{ app.status }}</td>
                                      <!-- Your Vue logic for actions here -->
                                      <!-- Example: <a @click="editApplication(app)" class="btn btn-primary">Edit</a> -->
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
    </div>  
</template>
<script>
export default {
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
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap");

:root {
  --header-height: 3rem;
  --nav-width: 68px;
  --first-color: #4723D9;
  --first-color-light: #AFA5D9;
  --white-color: #F7F6FB;
  --body-font: 'Nunito', sans-serif;
  --normal-font-size: 1rem;
  --z-fixed: 100;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: var(--header-height) 0 0 0;
  padding: 0 1rem;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  transition: 0.5s;
}

a {
  text-decoration: none;
}

.header {
  width: 100%;
  height: var(--header-height);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: var(--white-color);
  z-index: var(--z-fixed);
  transition: 0.5s;
}

.header_toggle {
  color: var(--first-color);
  font-size: 1.5rem;
  cursor: pointer;
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.header_img img {
  width: 40px;
}

.l-navbar {
  position: fixed;
  top: 0;
  left: -30%;
  width: var(--nav-width);
  height: 100vh;
  background-color: var(--first-color);
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: var(--z-fixed);
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: var(--white-color);
}

.nav_logo-name {
  color: var(--white-color);
  font-weight: 700;
}

.nav_link {
  position: relative;
  color: var(--first-color-light);
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.nav_link:hover {
  color: var(--white-color);
}

.nav_icon {
  font-size: 1.25rem;
}

.show {
  left: 0;
}

.body-pd {
  padding-left: calc(var(--nav-width) + 1rem);
}

.active {
  color: var(--white-color);
}

.active::before {
  content: '';
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: var(--white-color);
}

.height-100 {
  height: 100vh;
}

@media screen and (min-width: 768px) {
  body {
    margin: calc(var(--header-height) + 1rem) 0 0 0;
    padding-left: calc(var(--nav-width) + 2rem);
  }

  .header {
    height: calc(var(--header-height) + 1rem);
    padding: 0 2rem 0 calc(var(--nav-width) + 2rem);
  }

  .header_img {
    width: 40px;
    height: 40px;
  }

  .header_img img {
    width: 45px;
  }

  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }

  .show {
    width: calc(var(--nav-width) + 156px);
  }

  .body-pd {
    padding-left: calc(var(--nav-width) + 188px);
  }
}

</style>