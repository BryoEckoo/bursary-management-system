<template>
    <div class="row" id="body-row">
        <headerAdmin/>
        <sidebar />
        <!-- MAIN -->
    <div class="col md-8 text-center">
        <h1 class="display-4 font-weight-bold fst-italic">hello world</h1>
        <div class="card">
          <h5 class="card-header font-weight-bold">Requirements</h5>
          <div class="card-body">
            <ul>
              <li>JQuery</li>
              <li class="font-weight-bold">Bootstrap 4.3</li>
              <li>FontAwesome</li>
            </ul>
          </div>
        </div>
      </div><!-- Main Col END -->
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
