<template>
    <div class="row" id="body-row">
        <headerAdmin/>
        <div class="row">
          <sidebar />
          <div class="col-sm-9 text-center">
            <div class="main-wrapper">
              <!-- Header -->
              <div class="header">
                <!-- Include the header component here -->
                <HeaderComponent />
              </div>
              <!-- /Header -->
          
              <!-- Sidebar -->
              <SidebarComponent />
              <!-- /Sidebar -->
          
              <!-- Page Wrapper -->
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
                    <!-- Add your Vue code for the card components here -->
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
              <!-- /Page Wrapper -->
            </div>
          </div>
            
        </div>
        
        <!-- MAIN -->
    
    </div>
</template>
<script>
import sidebar from './sideBar.vue';
import headerAdmin from './headerAdmin.vue';
export default{
    name:'AdminPage',
    components:{
       sidebar,
       headerAdmin,
    }
}
</script>
