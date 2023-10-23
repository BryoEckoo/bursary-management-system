<template>
  <div>
    <div class="registration row-md-5 row-lg-6 mt-4">
        <div class="head col text-center">
            <img class="w-10 h-5" src="../assets/logo.png" alt="logo">
            <h4 class="col " >Registration Page</h4>
        </div>
    </div>
    <hr class="mt-4"/>
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-7">
            <form>
              <div class="form-group row mt-4">
                <label class="col-md-4 col-form-label" for="username">Email Address</label>
                <div class="col-md-8">
                  <input type="text" id="username" name="username" v-model="email" class="form-control" autocomplete="off" required autofocus>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label class="col-md-4 col-form-label" for="password">Password</label>
                <div class="col-md-8">
                  <input type="password" id="password" class="form-control" v-model="password" name="password" placeholder="Password" autocomplete="current-password" required>
                </div>
              </div>
              <input type="hidden" name="_csrf_token" value="f9762c9.pk7O-twetHP3t17lExefTz64-IrXimtJgaMONUz3fgc.lBm7gpFT0ja9_QfcKifHBH_Lj8au4z0T1MB7f3yEHHLSOPm7qV_QF57Oag">
              <div class="form-group text-center mt-2">
                <button class="btn btn-primary proceed" @click.prevent="register">REGISTER</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// Import Axios library
import axios from 'axios';
import { registerUser} from'../../../routes/register';

export default {
  name: 'registerPage',
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    async mounted(){
      const response = await axios.get("users")

    },
    async register() {
      try {
        // Create an object to hold the user data
        const userData = {
          email: this.email,
          password: this.password,
        };

        // Make an HTTP POST request to your backend's registration endpoint
        const response = await registerUser(userData);

        // Check the response status and provide feedback to the user
        if (response.status === 201) {
          // Registration successful
          console.log('Registration successful:', response.data);
          // Optionally, you can redirect the user to a success page or perform other actions.
        } else {
          // Registration failed
          console.error('Registration Fail:', response.data);
          // Optionally, display an error message to the user.
        }
      } catch (error) {
        console.error('Registration fail:', error);
        // Handle any unexpected errors (e.g., network issues).
        // Optionally, display an error message to the user.
      }
    }
  }
}
//import axios from 'axios';
//import authenticationService from '@/services/AuthenticationService';

//export default {
    // name: 'registerPage',
    // data() {
    //     return {
    //         email: "",
    //         password: "",
    //     }
    // },
    // methods: {
    //     async register() {
    //         try {
    //             await authenticationService.loadUserCollection({
    //                 email: this.email,
    //                 password: this.password
    //             });
    //         } catch (error) {
    //             console.error("Registration failed:", error);
    //         }
    //     }
    


      
      /*async registerUser() {
        
  try {
    // Capture user registration data
    const email = this.userData.userEmail;
    const password = this.userData.userPassword;

    // Make a POST request to your server's registration endpoint using Axios
    const response = await axios.post('/api/register', {
      email,
      password,
    });

    if (response.status === 200) {
      // Registration successful
      // Optionally, provide feedback to the user
      alert('Registration successful!');
      this.$router.push('/');
    } else {
      // Registration failed
      // Optionally, display an error message to the user
      alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error(error);
    // Handle any unexpected errors
    alert('An error occurred during registration. Please try again later.');
  }
}*/

  //},
//}
</script>