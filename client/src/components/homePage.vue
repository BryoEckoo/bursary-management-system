<script>
import axios from "axios";

export default{
  name:'HomePage',
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const APIURL= 'http://localhost:7000';
      const { email, password } = this.form;
      if (!email || !password) {
        alert("Username and password are required");
        return;
      }
      
      try {
        const {
          data: { token },
        } = await axios.post(`${APIURL}/login`, {
          email,
          password,
        });
        localStorage.setItem("authtoken", token);
        this.$router.push("/details");
      } catch (error) {
        alert("Invalid username or password.");
      }
    },
    },
  };
</script>
<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 col-lg-12 w-100 ">
          <div class="wrap d-md-flex">
            <div class="six justify-content-center text-center align-middle col-md-5 col-md-lg-5 " >
              <h4 class="mt-18 text-center mt-4 align-middle">Welcome, Please Sign In or Create an Account To Apply</h4>
            </div>
            <div class="login-wrap p-2 p-md-5 ">
              <div class="alert alert-danger alert-dismissible fade" role="alert" >
                <strong>Error!</strong> Invalid Username or Password
                <button type="button" class="btn-close" @click="closeErrorAlert" aria-label="Close"></button>
              </div>
              <div class="rest col-md-5 col-lg-7"></div>
                <div class="d-flex justify-content-center">
                  <img src="../assets/logo1.jpg" alt="" style="width: 90px;">
                </div>
                <hr lass="mt-4">
                <div class="justify-content-center">
                  <h2 class="text-center font-weight-bold" style="font-size: 20px;">
                    Nandi County Bursary Management System
                  </h2>
                  <hr class="mt-4">
                  <h4 class="text-center mt-4">Sign In</h4>
                </div>
                <form id="login" class="login-form" @submit.prevent="login" method="post">
                  <div class="form-group mb-3">
                    <label class="label" for="username">Username</label>
                    <input type="text" id="username" v-model="form.email" name="username" class="form-control" placeholder="Email Address" autocomplete="off" required autofocus>
                  </div>
                  <div class="form-group mb-3">
                    <label class="label" for="password">Password</label>
                    <input type="password" id="password" v-model="form.password" class="form-control" name="password" placeholder="Password" autocomplete="current-password" required>
                  </div>
                  <input type="hidden" name="_csrf_token" value="f9762c9.pk7O-twetHP3t17lExefTz64-IrXimtJgaMONUz3fgc.lBm7gpFT0ja9_QfcKifHBH_Lj8au4z0T1MB7f3yEHHLSOPm7qV_QF57Oag">
                  <div class="form-group">
                    <input type="submit" class="proceed" value="Log in" />	
                    <router-link to="/register" class="proceed" >REGISTER</router-link>
                  </div>
                  <div class="form-group d-md-flex">
                    <div class="w-50 text-left">
                    </div>
                    <div class="w-50 text-md-right">
                      <a href="./recover">Forgot Password</a> <br>
                      <a href="./admin">Log In as Admin</a>
                    </div>
                  </div>
              </form>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </section>
  
</template>
<style>
.six{
  background-image: url(../assets/students.jpg);

}
@media (max-width: 768px) {
  .six {
    height: 400px; /* Set the height to 400px for screens 768px or less */
  }
}

</style>