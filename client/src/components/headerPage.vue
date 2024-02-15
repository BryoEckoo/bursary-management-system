<template>
  <div class="header-pp color">
    <div class="navbar navbar-expand-lg d-flex align-items-center ">
      <div class="col-md-4 text-center">
        <img src="../assets/ke.png" class="h-25 w-25" alt="Kenya Logo">
      </div>
      <div class="container-block text-center col-md-4" style="margin-left:20px;">
        <h4 class="text-center">COUNTY GOVERNMENT OF NANDI</h4>
        <h5 class="text-center">BURSARY MANAGEMENT SYSTEM</h5>
      </div>
      <div class="col-md-4 text-center">
        <img src="../assets/logo1.jpg" class="h-25 w-25"  alt="County Logo">
      </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-body-tertiary custom-navbar-bg" style="background-color: #042e1d;">
      <div class="container-fluid">
        <div class="flex-fill"></div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/details" class="nav-link active fw-bold" aria-current="page">Dashboard</router-link>
            </li>
           
            <li class="nav-item">
              <router-link to="/profile" class="nav-link fw-bold">My Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link fw-bold">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  
  
  
</template>
<script>
export default{
    name:'HeaderPage',
    data() {
    return {
      isFixedNav: false,
    };
  },
 
}
</script>
<style>

.menu{
  display: inline-block;
}
.dropdown-menu li {
list-style: none;
color: white;
}
img{
  width:7%;
  height: 7%;
}
.btn-group{
  display: flex;
  flex-direction: row;
  align-items: center;
  
}
p{
  width: 40px;
  font: bold, 5px;
}
.navbar-spacer {
  width: 200px; 
}
nav a{
  color: #333;
  font: bold;
}
.header-pp{
  background-color: #18ce0f;
  color: white;
}
.custom-navbar-bg {
  background-color: #18ce0f !important; /* Use !important to ensure the style takes precedence */
}
</style>