<template>
  <div>
    <HeaderPage />
    <infoPage />

    <form
      @submit.prevent="onSubmit"
      style="
        background-color: #f8f3f3;
        padding: 20px;
        border: 1.5px solid #707df3;
        border-radius: 5px;
        margin-top: 15px;
      "
    >
      <div class="form-fill text-center">
        <h3 class="text-center title2-bg mb-4">Your Personal Details</h3>
        <div class="row">
          <div class="col-sm-6">
            <div class="form-group row">
              <div class="col-md-4 input-red" for="first_name">First Name * :</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="first_name"
                  id="first_name_"
                  class="form-control"
                  v-model="firstName"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="last_name">Last Name * :</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="last_name"
                  id="last_name_"
                  class="form-control"
                  v-model="lastName"
                  required
                />
              </div>
            </div>     
            <div class="form-group row">
              <div class="col-md-4 input-red" for="gender">Gender :</div>
              <div class="col-md-8">
                <select
                  name="gender"
                  v-model="gender"
                  class="form-control select select2-hidden-accessible"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="parental_status">
                Parental Status :
              </div>
              <div class="col-md-8">
                <select
                  name="parental_status"
                  v-model="parentalStatus"
                  class="form-control select select2-hidden-accessible"
                >
                  <option value="Both Parents Alive">Both Parents Alive</option>
                  <option value="Total Orphan">Total Orphan</option>
                  <option value="Single Mother">Single Mother</option>
                  <option value="Single Father">Single Father</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="last_name">Parent/ Guardian Name * :</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="parent_name"
                  id="parent_name_"
                  class="form-control"
                  v-model="parentName"
                  required
                />
              </div>
            </div> 
            <div class="form-group row">
              <div class="col-md-4 input-red" for="occupation">Occupation :</div>
              <div class="col-md-8">
                <select name="occupation" v-model="occupation" class="form-control select select2-hidden-accessible" aria-placeholder="Select" >
                  <option>Select </option>
                  <option value="Employed">Employed</option>
                  <option value="Self-employed">Self-employed</option>
                  <option value="Contract">Contract</option>
                  <option value="Unemployed">Unemployed</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
          </div>
          <div class="col-sm-6">
            <div class="form-group row">
              <div class="col-md-4 input-red" for="family_income">Annual Family Gross Income :</div>
              <div class="col-md-8">
                <select id="familyincome" v-model="familyIncome" class="form-control" name="familyincome">
                  <option>Select</option>
                  <option>Less than 80,000</option>
                  <option>Between 80,000 and 150,000</option>
                  <option>Between 150,000 and 200,000</option>
                  <option>More than 200,000</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-blue" for="id_no">ID Number :</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="id_no"
                  v-model="userId"
                  id="id_no_"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="phone">Phone * :</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="phone"
                  v-model="userPhone"
                  id="phone_"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="email">Email * :</div>
              <div class="col-md-8">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  required
                  v-model="userEmail"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="special_need">
                Special Need :
              </div>
              <div class="col-md-8">
                <select
                  name="special_need"
                  v-model="specialNeed"
                  class="validate[required] form-control select select2-hidden-accessible"
                >
                <option value="">Select</option>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="ward">Ward * :</div>
              <div class="col-md-8">
                  <select name="ward"  placeholder="Select Bank" v-model="ward" required class="select form-control select2-hidden-accessible">
                    <option value="">Select ward</option>
                      <option value="Chepkumia">Chepkumia</option>
                      <option value="Kapkangani">Kapkangani</option>
                      <option value="Kapsabet">Kapsabet</option>
                      <option value="Kilibwoni">Kilibwoni</option>
                  </select>
              </div>
          </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="form-fill text-center">
        <h3 class="text-center title2-bg mb-4">Institution Details</h3>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="category">Category :</div>
                    <div class="col-md-8">
                        <select name="category"  placeholder="Select Bank" v-model="category" class="select form-control select2-hidden-accessible">
                          <option value="">Select</option>
                            <option value="Secondary">Secondary</option>
                            <option value="TTC">TTC</option>
                            <option value="TVET">TVET</option>
                            <option value="College">College</option>
                            <option value="University">University</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="name">Institution Name * :</div>
                    <div class="col-md-8">
                        <input type="text" name="name" v-model="instName" id="name_" class="form-control"  required>
                    </div>
                  </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="telephone">Institution Telephone :</div><div class="col-md-8">
                      <input type="text" name="telephone" v-model="instTelephone"  id="telephone_" class="form-control">
                    </div>
                </div>      
            </div>
            <div class="col-md-6">
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="class">Current Class/Level :</div><div class="col-md-8">
                        <input type="text" name="class" id="class_" v-model="currentClass" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="admission_number">Enter UPI No/Adm No/Reg No :</div><div class="col-md-8">
                      <input type="text" name="admission_number" id="admission_number_" v-model="admissionNo" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="bank_name">Bank * :</div>    
                    <div class="col-md-8">
                        <select name="bank_name" v-model="bankName" placeholder="Select Bank" required class="select form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                          <option value="">Select</option>
                            <option value="1">Bank of Baroda</option>
                            <option value="3">Barclays Bank</option>
                            <option value="4">Cooperative Bank</option>
                            <option value="2">Equity Bank</option>
                            <option value="5">Kenya Commercial Bank (KCB)</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <h6 class="text-center mb-4 mt-5"><u>If an orphan, who has been paying for your school fees</u></h6>
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="sponsorname">Name/institution :</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorname" v-model="sponsorInst" class="form-control"  name="sponsorname" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="relation">Your relationship :</label>
                            </div>
                            <div class="col-md-6">
                                <input id="relation" class="form-control" v-model="sponsorRelationship"  name="relation" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="sponsorcontact">Contact :</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorcontact" v-model="sponsorContact" class="form-control" name="sponsorcontact" type="text">
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
      <hr>
      <div class="form-fill text-center">
        <h3 class="text-center title2-bg mb-4">Upload Evidential Documents</h3>
        <div class="row">
            <div class="col-sm-6">
                <div class="form-group row">
                    <p class="col-md-4">Death Certificate :</p>
                <input class="col-md-8" type="file" @change="onFileChange('deathCertificate')" id="deathCertificate" name="deathCertificate"><br>
                </div>   
            </div>
            <div class="col-sm-6">
                <div class="form-group row">
                    <p class="col-md-4">Fee statement *:</p>
                    <input class="col-md-8" type="file" @change="onFileChange('feeStatement')" id="feeStatement" name="feeStatement"><br>
                </div>
            </div>
        </div>
      </div>
      <div class="text-center">
        <button class="proceed" @click="onSubmit">SUBMIT</button>
      </div><br>
      <div class="text-center">
        <button class="proceed" @click="submit">SUBMIT doc</button>
      </div>
    </form>
    <form id="docup" enctype="multipart/form-data" name="docup" method="post">
        
    </form>
  </div>
</template>

<script>
import HeaderPage from "./headerPage.vue";
import infoPage from "./infoPage.vue";
import axios from 'axios';
import { APIURL } from '../../../server/config/key';

export default {
  name: "DetailsPage",
  components: {
    HeaderPage,
    infoPage,
    
  },
  data() {
    return {
        firstName: "",
        lastName: "",
        gender: "",
        parentalStatus: "",
        parentName: "",
        occupation: "",
        familyIncome:"",
        userId: "",
        userPhone: "",
        userEmail: "",
        specialNeed: "",
        ward:"",
        category: "",
        instTelephone:"",
        instType:"",
        instName:"",
        currentClass:"",
        admissionNo:"",
        bankName:"",
        sponsorInst:"",
        sponsorRelation:"",
        sponsorContact:"",
        selectedDeathCertificate: null,
        selectedFeeStatement: null,
    };
  },
  methods: {
    onFileChange(field) {
      // Function to handle file input changes
      const fileInput = this.$refs[field];
      this[field] = fileInput.files[0];
    },
    async onSubmit() {
      if (!this.firstName || !this.lastName ||!this.parentName || !this.ward || !this.userEmail || !this.userPhone || !this.instName || !this.bankName) {
      alert('Please fill in the required spaces.');
      return;
    }
      try {
        // Create an object with the form data
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          parentalStatus: this.parentalStatus,
          parentName: this.parentName,
          occupation: this.occupation,
          familyIncome: this.familyIncome,
          userId: this.userId,
          userEmail: this.userEmail,
          specialNeed: this.specialNeed,
          ward: this.ward,
          category: this.category,
          instTelephone: this.instTelephone,
          instType: this.instType,
          instName: this.instName,
          currentClass: this.currentClass,
          admissionNo: this.admissionNo,
          bankName: this.bankName,
          sponsorInst: this.sponsorInst,
          sponsorRelationship: this.sponsorRelationship,
          sponsorContact: this.sponsorContact,
          // deathCertificate: this.selectedDeathCertificate);
          // feeStatement: this.selectedFeeStatement)


        }

        // Add form fields to formData
        // formData.append('firstName', this.firstName);
        // formData.append('lastName', this.lastName);
        // formData.append('gender', this.gender);
        // formData.append('parentalStatus', this.parentalStatus);
        // formData.append('parentName', this.parentName);
        // formData.append('occupation', this.occupation);
        // formData.append('familyIncome', this.familyIncome);
        // formData.append('userId', this.userId);
        // formData.append('userEmail', this.userEmail);
        // formData.append('specialNeed', this.specialNeed);
        // formData.append('ward', this.ward);
        // formData.append('category', this.category);
        // formData.append('instTelephone', this.instTelephone);
        // formData.append('instType', this.instType);
        // formData.append('instName', this.instName);
        // formData.append('currentClass', this.currentClass);
        // formData.append('admissionNo', this.admissionNo);
        // formData.append('bankName', this.bankName);
        // formData.append('sponsorInst', this.sponsorInst);
        // formData.append('sponsorRelationship', this.sponsorRelationship);
        // formData.append('sponsorContact', this.sponsorContact);
        // formData.append('deathCertificate', this.selectedDeathCertificate);
        // formData.append('feeStatement', this.selectedFeeStatement);

        // Send a POST request to your backend API
        const response = await axios.post(`${APIURL}/applications/submit`, formData);

        if (response.data.success) {
          // Handle success, e.g., show a success message
          alert('Application submitted successfully');
          //this.$router.push('/profile')
        } else {
          // Handle errors, e.g., show an error message
          alert('Error submitting application');
        }
      } catch (error) {
        // Handle any network or request errors
        console.error(error);
        alert('An error occurred. Please try again.');
      }
      // // Send a POST request to your backend API for documents
      // const docData = new FormData();
      // docData.append('deathCertificate', this.selectedDeathCertificate);
      // docData.append('feeStatement', this.selectedFeeStatement);

      // try {
      //   await axios.post(`${APIURL}/documents/upload`, docData);
      //   // Handle the document data response if needed
      // } catch (docError) {
      //   // Handle any errors related to document submission
      //   console.error('Error uploading documents:', docError);
      //   // Optionally, show an error message to the user
      // }
    },
  },
};
</script>
<style>
.proceed {
    text-decoration: none; /* Remove underline */
    background-color: #ff6900; /* Set background color */
    border: 1px solid #ff6900; /* Add border */
    border-radius: 2px; /* Set border radius */
    padding: 5px 10px; /* Add padding for spacing */
    display: inline-block; /* Ensure it's displayed inline */
    color: white;
    font-size: large;
    transition: background-color 0.3s ease;
    margin: 4px;
    margin-top: 20px;
  }
  
  /* Style the router link on hover */
  .proceed:hover {
    background-color: #18ce0f; /* Change background color on hover */
    color: white;
    border: 1px solid #18ce0f;
    cursor: pointer;
  }
</style>
