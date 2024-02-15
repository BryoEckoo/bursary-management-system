<script>
import HeaderPage from "./headerPage.vue";
import InfoPage from "./infoPage.vue"
import axios from 'axios';
const APIURL = 'http://localhost:7000';

export default {
  name: "DetailsPage",
  components: {
    HeaderPage,
    InfoPage,
  },
  data() {
    return {
      isInputInvalid: false,
      studentFullName:"",
      gender: "",
      parentName: "",
      occupation: "",
      userId: "",
      userPhone: "",
      userEmail: "",
      ward: "",
      location: "",
      subLocation: "",
      category: "",
      instName: "",
      currentClass: "",
      admissionNo: "",
      sponsorInst: "",
      sponsorRelation: "",
      sponsorContact: "",
    };
  },
  methods: {
    focusOnModalInput() {
    const myModal = document.getElementById('staticBackdrop');
    const myInput = document.getElementById('inputInModal');
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus();
    });
  },
    
    // Function to handle file input changes
    onFileChange(field) {
      const fileInput = this.$refs[field];
      this[field] = fileInput.files[0];
    },

    // Function to submit the form data
    async onSubmit() {
      let emptyField = null; 
      if (!this.validateForm()) {
        this.isInputInvalid = true;
        alert('Please fill in the required spaces.');
        const emptyField = document.querySelector('.form-control:invalid');
    
        // Scroll to the empty field
        if (emptyField) {
          emptyField.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        return;
      }

      try {
        const formData = {
          studentFullName:this.studentFullName,
          gender: this.gender,
          parentName: this.parentName,
          occupation: this.occupation,
          familyIncome: this.familyIncome,
          userId: this.userId,
          userPhone:this.userPhone,
          userEmail: this.userEmail,
          ward: this.ward,
          location: this.location,
          subLocation: this.subLocation,
          category: this.category,
          instName: this.instName,
          currentClass: this.currentClass,
          admissionNo: this.admissionNo,
          sponsorInst: this.sponsorInst,
          sponsorRelationship: this.sponsorRelationship,
          sponsorContact: this.sponsorContact,
        };

        const response = await axios.post(`${APIURL}/applications/submit`, formData);

        if (response.data.success) {
          alert('Application submitted successfully');
          this.isInputInvalid = false;
          this.$router.push("/profile");
          
        } else {
          alert('Error submitting application');
        }
        if (emptyField) {
        this.scrollIntoView(emptyField);
      }
      } catch (error) {
        console.error(error);
        alert('An error occurred. Please try again.');
      }
    },
    

    // Function to validate the form data
    validateForm() {
      return (
        this.studentFullName &&
        this.parentName &&
        this.ward &&
        this.location&&
        this.subLocation&&
        this.userPhone &&
        this.instName &&
        this.category&&
        this.instName&&
        this.currentClass&&
        this.admissionNo
      );
    },
    scrollIntoView(element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
  },
};

</script>
<template>
  <div style="background-color:#f8f3f3;">
    <HeaderPage />
    <InfoPage />
    <form
      style="
        padding-left: 60px;
        padding-right: 60px;
        border-radius: 5px;
      "
    >    
    <h1 class="text-center">New application</h1>  
        <div class="mb-4">
          <h3 class="title2-bg mb-4" style="color:green;">Personal details</h3>
          <span style="color:red;">Fields marked (<span style="color:red;">*</span>) are required.</span>
        </div>
        <div class="row" style="margin-bottom: 20px;">
          <div class="form-group col-md-4 mb-2">
            <div class="input-red" for="last_name" style="display: flex;">Student full name <span style="color:red;">*</span></div>              
              <input
                type="text"
                name="last_name"
                id="last_name_"
                class="form-control"
                placeholder="Enter student full name"
                v-model="studentFullName"
                :class="{ 'border-danger': isInputInvalid }"
                required
              />              
          </div>     
          <div class="form-group col-md-4 mb-2">
            <div class="input-red" for="gender" style="display: flex;">Student gender</div>              
              <select
                name="gender"
                v-model="gender"
                class="form-control select select2-hidden-accessible"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>              
          </div>            
          <div class="form-group col-md-4 mb-2">
            <div class=" input-red" for="last_name" style="display: flex;">Parent/guardian full name <span style="color:red;">*</span></div>              
              <input
                type="text"
                name="parent_name"
                id="parent_name_"
                class="form-control"
                placeholder="Enter parent/guardian full name"
                v-model="parentName"
                :class="{ 'border-danger': isInputInvalid }"
                required
              />              
          </div>
        </div> 
        <div class="row" style="margin-bottom: 20px;">
          <div class="form-group col-md-4 mb-2">
            <div class=" input-red" for="occupation" style="display: flex;">Parent/guardian occupation</div>              
              <select name="occupation" v-model="occupation" class="form-control select select2-hidden-accessible" aria-placeholder="Select" >
                <option value="">Select parent occupation </option>
                <option value="Employed">Employed</option>
                <option value="Self-employed">Self-employed</option>
                <option value="Contract">Contract</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Other">Other</option>
              </select>              
          </div>
          <div class="form-group col-md-4 mb-2">
            <div class=" input-blue" for="id_no" style="display: flex;">Id number. <span style="color:red;">*</span></div>              
              <input
                type="text"
                name="id_no"
                v-model="userId"
                placeholder="Enter parent/student/guardian Id no."
                id="id_no_"
                class="form-control"
                :class="{ 'border-danger': isInputInvalid }"
                required
              />              
          </div>
          <div class="form-group col-md-4 row mb-2">
          <div class=" input-red" for="phone" style="display: flex;">Phone <span style="color:red;">*</span></div>              
            <input
              type="text"
              name="phone"
              v-model="userPhone"
              id="phone_"
              placeholder="Enter student/parent/guardian phone"
              class="form-control"
              :class="{ 'border-danger': isInputInvalid }"
              required
            />              
        </div>
        </div>
        <div class="row" style="margin-bottom: 20px;">
          <div class="form-group col-md-4 mb-2">
            <div class=" input-red" for="email" style="display: flex;">Email</div>           
            <input
              type="email"
              name="email"
              placeholder="Enter student/parent/guardian email"
              class="form-control"
              v-model="userEmail"
            />              
          </div>            
          <div class="form-group col-md-4  mb-2">
            <div class=" input-red" for="ward" style="display: flex;">Ward <span style="color:red;">*</span></div>              
              <input type="text" name="ward" placeholder="Enter student ward" v-model="ward" :class="{ 'border-danger': isInputInvalid }" required class="select form-control select2-hidden-accessible">
          </div>
          <div class="form-group col-md-4 mb-2">
            <div class=" input-red" for="ward" style="display: flex;">Location <span style="color:red;">*</span></div>              
              <input type="text" name="ward" placeholder="Enter student location" v-model="location" :class="{ 'border-danger': isInputInvalid }" required class="select form-control select2-hidden-accessible">              
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-4 mb-2">
            <div class="input-red" for="ward" style="display: flex;">Sub-location <span style="color:red;">*</span></div>              
              <input type="text" name="ward" placeholder="Enter student sub-location" v-model="subLocation" :class="{ 'border-danger': isInputInvalid }" required class="select form-control select2-hidden-accessible">              
          </div>
        </div>    
      <hr>
      <div class="form-fill " style="margin-top: 10px;">
        <div class="mb-4">
        <h3 class="title2-bg mb-4" style="color:green;">Institution details</h3>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-group row mb-2">
                    <div class="col-md-4 input-red" for="category" style="display: flex;">School level <span style="color:red;">*</span></div>
                    <div class="col-md-8">
                        <select name="category"  placeholder="Select Bank" v-model="category" :class="{ 'border-danger': isInputInvalid }" class="select form-control select2-hidden-accessible" required>
                          <option value="">Select student school level</option>
                            <option value="Secondary">Secondary</option>
                            <option value="TTC">TTC</option>
                            <option value="TVET">TVET</option>
                            <option value="College">College</option>
                            <option value="University">University</option>
                        </select>
                    </div>
                </div>
                <div class="form-group row mb-2">
                    <div class="col-md-4 input-red" for="name" style="display: flex;">Institution name <span style="color:red;">*</span></div>
                    <div class="col-md-8">
                        <input type="text" name="name" v-model="instName" :class="{ 'border-danger': isInputInvalid }" id="name_" class="form-control"  required>
                    </div>
                  </div>                      
            </div>
            <div class="col-md-6">
                <div class="form-group row mb-2">
                    <div class="col-md-4 input-red" for="class" style="display: flex;">Current class/level <span style="color:red;">*</span></div><div class="col-md-8">
                        <input type="text" name="class" id="class_" v-model="currentClass" :class="{ 'border-danger': isInputInvalid }" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row mb-2">
                    <div class="col-md-4 input-red" for="admission_number" style="display: flex;">Student adm/reg no. <span style="color:red;">*</span></div><div class="col-md-8">
                      <input type="text" name="admission_number" id="admission_number_" placeholder="Enter student adm/reg no." v-model="admissionNo" :class="{ 'border-danger': isInputInvalid }" class="form-control" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <h6 class="text-center mb-4 mt-5" style="margin-top:50px;"><u>If an orphan, who has been paying for your school fees</u></h6>
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row mb-2">
                            <div class="col-md-6">
                                <label for="sponsorname" style="display: flex;">Name/institution</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorname" placeholder="Enter name of institution" v-model="sponsorInst" class="form-control"  name="sponsorname" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="row mb-2">
                            <div class="col-md-6">
                                <label for="relation" style="display: flex;">Your relationship </label>
                            </div>
                            <div class="col-md-6">
                                <input id="relation" placeholder="Enter type of relationship"  class="form-control" v-model="sponsorRelationship"  name="relation" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-center">
                        <div class="row mb-2">
                            <div class="col-md-6">
                                <label for="sponsorcontact" style="display: flex;">Contact </label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorcontact" placeholder="Enter contact"  v-model="sponsorContact" class="form-control" name="sponsorcontact" type="text">
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>
      <hr>    
    </form>
    <div class="text-center ">
      <button class="proceed mb-4" @click="onSubmit()">SUBMIT</button>
    </div> 
  </div>
</template>


<style>
body {
  
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-style: normal;
}
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
    font-family: "Protest Riot", sans-serif;
  }
  
  /* Style the router link on hover */
  .proceed:hover {
    background-color: #18ce0f; /* Change background color on hover */
    color: white;
    border: 1px solid #18ce0f;
    cursor: pointer;
  }
  .border-danger {
    border: 1px solid red;
   }
</style>
