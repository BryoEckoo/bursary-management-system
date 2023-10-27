<template>
    <div class="row" id="body-row">
        <headerAdmin/>
        <div class="row">
            <sidebar />
            <div class="page-wrapper">
                <div class="content container-fluid">
                  <div class="page-header">
                    <div class="row">
                      <div class="col-sm-12">
                        <ul class="breadcrumb">
                          <li class="breadcrumb-item active">Applicants</li>
                        </ul>
                      </div>
                    </div>
                  </div>
            
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-chart">
                        <div class="card-body">
                          <div id="line_graph">
                            <div class="alert alert-warning alert-dismissible fade show text-center" role="alert" style="position: sticky" v-if="message">{{ message }}
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="message = ''">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="alert alert-success alert-dismissible fade show text-center" role="alert" style="position: sticky" v-if="success">{{ success }}
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="success = ''">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                          </div>
                          <div class="table-responsive">
                            <table class="table table-bordered table-striped" id="sample">
                              <thead>
                                <tr>
                                  <th class="font-weight-bold text-center">#</th>
                                  <th class="font-weight-bold text-center">Full Name</th>
                                  <th class="font-weight-bold text-center">Age</th>
                                  <th class="font-weight-bold text-center">School Level</th>
                                  <th class="font-weight-bold text-center">County</th>
                                  <th class="font-weight-bold text-center">Location</th>
                                  <th class="font-weight-bold text-center">Sub-location</th>
                                  <th class="font-weight-bold text-center">Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(val, index) in data" :key="index">
                                  <td>{{ val.id }}</td>
                                  <td>{{ val.student_fullname }}</td>
                                  <td>{{ val.age }}</td>
                                  <td>{{ val.school_level }}</td>
                                  <td>{{ val.county }}</td>
                                  <td>{{ val.location }}</td>
                                  <td class="font-weight-bold">{{ val.sub_location }}</td>
                                  <td class="text-center">
                                    <a href="{{ url('edit') }}" class="btn btn-primary" data-toggle="modal" :data-target="'#Edit' + val.student_fullname">Edit</a>
                                    <div :id="'Edit' + val.student_fullname" class="modal fade" role="dialog">
                                      <div class="modal-dialog">
                                        <form @submit.prevent="updateStudent(val.id)">
                                          <!-- Modal content-->
                                          <div class="modal-content">
                                            <div class="modal-header" style="background: #398AD7; color: #fff;">
                                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                                              <h4 class="modal-title">UPDATE</h4>
                                            </div>
                                            <div class="modal-body">
                                              <label for="" class="font-weight-bold">Fullname:</label>
                                              <input v-model="val.student_fullname" class="form-control">
                                              <label for="" class="font-weight-bold">Age:</label>
                                              <input v-model="val.age" type="number" class="form-control">
                                              <label for="" class="font-weight-bold">Family Status:</label>
                                              <select v-model="val.family_status" class="form-control">
                                                <option v-for="status in familyStatusOptions" :key="status" :value="status">{{ status }}</option>
                                              </select>
                                              <label for="" class="font-weight-bold">School Level:</label>
                                              <select v-model="val.school_level" class="form-control">
                                                <option v-for="level in schoolLevelOptions" :key="level" :value="level">{{ level }}</option>
                                              </select>
                                              <label for="" class="font-weight-bold">School Name:</label>
                                              <select v-model="val.school_name" class="form-control">
                                                <option v-for="name in schoolNameOptions" :key="name" :value="name">{{ name }}</option>
                                              </select>
                                              <label for="" class="font-weight-bold">County:</label>
                                              <input v-model="val.county" class="form-control">
                                              <label for="" class="font-weight-bold">Ward:</label>
                                              <select v-model="val.ward" class="form-control">
                                                <option v-for="ward in wardOptions" :key="ward" :value="ward">{{ ward }}</option>
                                              </select>
                                              <label for="" class="font-weight-bold">Location:</label>
                                              <select v-model="val.location" class="form-control">
                                                <option v-for="loc in locationOptions" :key="loc" :value="loc">{{ loc }}</option>
                                              </select>
                                              <label for="" class="font-weight-bold">Sub Location:</label>
                                              <select v-model="val.sub_location" class="form-control">
                                                <option v-for="subloc in subLocationOptions" :key="subloc" :value="subloc">{{ subloc }}</option>
                                              </select>
                                            </div>
                                            <div class="modal-footer">
                                              <button type="submit" name="delete_acc" class="btn btn-danger">UPDATE</button>
                                              <button type="button" class="btn btn-default" data-dismiss="modal">CANCEL</button>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
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
  import sidebar from './sideBar.vue';
  import headerAdmin from './headerAdmin.vue';

  export default {
    name:'adminApplications',
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
  