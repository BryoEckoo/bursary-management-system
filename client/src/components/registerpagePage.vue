<script>
// Import Axios library

import axios from 'axios';
import router from '@/router';

export default {
  name: 'registerPage',
  data() {
    return {
      form:{
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register(){
      const APIURL= 'http://localhost:7000';
      const { email, password } = this.form;
      if (!email || !password) {
        alert("Username and password required");
      }
      try {
        await axios.post(`${APIURL}/register`, {
          email,
          password,
        });
        router.push('/');
        alert('registration successful');
      } catch (error){
        console.log(error);
        alert("registration failed.");
      }
    },
  },
};
</script>
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
                  <input type="text" id="username" name="username" v-model="form.email" class="form-control" autocomplete="off" required autofocus>
                </div>
              </div>
              <div class="form-group row mt-2">
                <label class="col-md-4 col-form-label" for="password">Password</label>
                <div class="col-md-8">
                  <input type="password" id="password" class="form-control" v-model="form.password" name="password" placeholder="Password" autocomplete="current-password" required>
                </div>
              </div>
              <div class="form-group text-center mt-2">
                <button class="btn btn-primary proceed" @click.prevent="register()">REGISTER</button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

