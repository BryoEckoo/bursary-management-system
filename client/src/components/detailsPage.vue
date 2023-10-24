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
              <div class="col-md-4 input-red" for="first_name">First Name</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="first_name"
                  id="first_name_"
                  class="form-control"
                  v-model="firstName"
                  required="required"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="last_name">Last Name</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="last_name"
                  id="last_name_"
                  class="form-control"
                  v-model="lastName"
                  required="required"
                />
              </div>
            </div>     
            <div class="form-group row">
              <div class="col-md-4 input-red" for="gender">Gender</div>
              <div class="col-md-8">
                <select
                  name="gender"
                  v-model="gender"
                  required="required"
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
                Parental Status
              </div>
              <div class="col-md-8">
                <select
                  name="parental_status"
                  v-model="parentalStatus"
                  class="form-control select select2-hidden-accessible"
                  required="required"
                >
                  <option value="Both Parents Alive">Both Parents Alive</option>
                  <option value="Total Orphan">Total Orphan</option>
                  <option value="Single Mother">Single Mother</option>
                  <option value="Single Father">Single Father</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="form-group row">
              <div class="col-md-4 input-blue" for="id_no">ID Number</div>
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
              <div class="col-md-4 input-red" for="phone">Phone</div>
              <div class="col-md-8">
                <input
                  type="text"
                  name="phone"
                  v-model="userPhone"
                  id="phone_"
                  class="form-control"
                  required="required"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="email">Email</div>
              <div class="col-md-8">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  v-model="userEmail"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 input-red" for="special_need">
                Special Need
              </div>
              <div class="col-md-8">
                <select
                  name="special_need"
                  v-model="specialNeed"
                  required="required"
                  class="validate[required] form-control select select2-hidden-accessible"
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
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
                    <div class="col-md-4 input-red" for="category">Category </div>
                    <div class="col-md-8">
                        <select name="category"  placeholder="Select Bank" v-model="category" class="select form-control select2-hidden-accessible">
                            <option value="Secondary">Secondary</option>
                            <option value="TTC">TTC</option>
                            <option value="TVET">TVET</option>
                            <option value="College">College</option>
                            <option value="University">University</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="name">Institution Name </div>
                    <div class="col-md-8">
                        <input type="text" name="name" v-model="instName" id="name_" class="form-control"  required="required">
                    </div>
                  </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="telephone">Institution Telephone </div><div class="col-md-8">
                      <input type="text" name="telephone" v-model="instTelephone"  id="telephone_" class="form-control">
                    </div>
                </div>      
            </div>
            <div class="col-md-6">
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="class">Current Class/Level </div><div class="col-md-8">
                        <input type="text" name="class" id="class_" v-model="currentClass" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="admission_number">Admission Number </div><div class="col-md-8">
                      <input type="text" name="admission_number" id="admission_number_" v-model="admissionNo" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-md-4 input-red" for="bank_name">Bank </div>    
                    <div class="col-md-8">
                        <select name="bank_name" v-model="bankName" placeholder="Select Bank" class="select form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
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
                                <label for="sponsorname">Name/institution</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorname" class="form-control"  name="sponsorname" type="text">
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="relation">Your relationship</label>
                            </div>
                            <div class="col-md-6">
                                <input id="relation" class="form-control"  name="relation" type="text">
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="sponsorcontact">Contact</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorcontact" class="form-control" name="sponsorcontact" type="text">
                            </div>
                        </div>
                    </div>
                <!-- </div> -->

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
                <input class="col-md-8" type="file" id="ftndoc" name="ftndoc"><br>
                </div>   
            </div>
            <div class="col-sm-6">
                <div class="form-group row">
                    <p class="col-md-4">Fee statement :</p>
                    <input class="col-md-8" type="file" id="ftndoc" name="ftndoc"><br>
                </div>
            </div>
            
            
        </div>
      </div>
      <div class="text-center">
        <button
          class="proceed"
          @click="proceedToInstitution"
          :disabled="!isFormValid"
        >
          SUBMIT
        </button>
      </div>
    </form>
    <form id="docup" enctype="multipart/form-data" name="docup" method="post">
        
    </form>
  </div>
</template>

<script>
import HeaderPage from "./headerPage.vue";
import infoPage from "./infoPage.vue";


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
        userId: "",
        userPhone: "",
        userEmail: "",
        specialNeed: "",
        category: "",
        instTelephone:"",
        instType:"",
        instName:"",
        currentClass:"",
        admissionNo:"",
        bankName:"",
    };
  },
  methods: {
    onSubmit() {
      // Save form data to localStorage
      localStorage.setItem("formData", JSON.stringify(this.formData));

      // Optionally, you can provide feedback to the user
      alert("Form data saved successfully!");
    },
    clearFormData() {
      localStorage.removeItem("formData");
      this.formData = {
        firstName: "",
        lastName: "",
        dateOb: "",
        gender: "",
        parent: "",
        countyBirth: "",
        subCounty: "",
        ward: "",
        residence: "",
        idNo: "",
        phone: "",
        email: "",
        specialNeed: "",
        typeOfNeed: "",
      };
    },
    isFormValid() {
      const formData = this.formData; // Replace with your form data object
      // Add validation logic here, e.g., check if all required fields are filled
      return (
        formData.firstName &&
        formData.lastName &&
        formData.dateOb &&
        formData.gender &&
        formData.gender &&
        formData.parent &&
        formData.specialNeed &&
        formData.phone &&
        formData.idNo &&
        formData.residence &&
        formData.ward &&
        formData.subCounty &&
        formData.countyBirth
      );
    },
    proceedToInstitution() {
      if (this.isFormValid()) {
        this.$router.push("/profile");
      } else {
        // Optionally, provide feedback to the user about the incomplete form
        alert("Please fill out all the required fields before proceeding.");
      }
    },
  },
  created() {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      this.formData = JSON.parse(savedData);
    }
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
