<template>
  <!-- Bootstrap row -->
  <div class="col-sm-3 p-0"  id="body-row">
    <!-- Sidebar -->
    <div id="sidebar-container" :class="{ 'sidebar-expanded': isExpanded, 'sidebar-collapsed': !isExpanded }" class="d-none d-md-block">
      <!-- Bootstrap List Group -->
      <ul class="list-group" style="border: 0px solid;">
        <!-- /END Separator -->
        <!-- Menu with submenu -->
        <a @click="toggleSidebar" @mouseenter="toggleSidebarr" class="mt-4 bg-grey list-group-item list-group-item-action d-flex align-items-center" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <i class="fa-solid fa-bars-staggered"></i>
            <span id="collapse-text" class="menu-collapsed"></span>
          </div>
        </a>
        <a href="#" @click="$router.push('/admin/dashboard')" class="bg-grey   list-group-item list-group-item-action" style="border: 0px;">
          <div @mouseenter="toggleSidebarr"  class="d-flex w-100 justify-content-start align-items-center element-to-hover">
            <span class="fa fa-th-large fa-fw mr-3"></span>
            <span class="menu-collapsed" >Dashboard</span>
          </div>
        </a>
        <a href="#" @mouseenter="toggleSidebarr" class="bg-grey list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-file fa-fw mr-3"></span>
            <span class="menu-collapsed" @click="$router.push('/admin/applications')">Applications</span>
          </div>
        </a>
        <a href="#" @mouseenter="toggleSidebarr" class="bg-grey list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-users fa-fw mr-3"></span>
            <span class="menu-collapsed" @click="$router.push('/admin/beneficiaries')">Beneficiaries</span>
          </div>
        </a>
        <a @click="toggleSubmenu(1)" @mouseenter="toggleSidebarr" :aria-expanded="isSubmenuExpanded[1]" class="bg-grey list-group-item list-group-item-action flex-column align-items-start" style="border: 0px; cursor:pointer;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <i class="fa-solid fa-file-lines"></i>
            <span class="menu-collapsed">Reports</span>
            <span class="ml-auto" v-if="isSubmenuExpanded[1]"></span>
          </div>
        </a>
        <!-- Submenu content -->
        <div v-if="isSubmenuExpanded[1]" class="sidebar-submenu" style="border-radius: 3px;">
          <a href="#" class="list-group-item list-group-item-action bg-grey color">
            <i class="fa fa-money-bill"></i><span class="menu-collapsed" @click="$router.push('/admin/reports/amount')">Amount Reports</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey color">
            <i class="fa fa-shopping-cart"></i><span class="menu-collapsed" @click="$router.push('/admin/reports/bursary')">Bursary Reports</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey color">
            <i class="fa-solid fa-earth-oceania"></i><span class="menu-collapsed" @click="$router.push('/admin/reports/wards')">Wards Reports</span>
          </a>
        </div>
        <a href="#"  class="bg-grey list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <i class="fa-solid fa-user"></i><span class="menu-collapsed" @click="$router.push('/admin/users')">Users</span>
          </div>
        </a>
      </ul><!-- List Group END -->
    </div><!-- sidebar-container END -->
    
  </div><!-- body-row END -->
</template>

<script>
export default {
  data() {
    return {
      isExpanded: true,
      isSubmenuExpanded: {
        1: false,
        2: false,
      },
    };
  },
  methods: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded;
    },
    toggleSubmenu(id) {
      this.isSubmenuExpanded[id] = !this.isSubmenuExpanded[id];
    },
    toggleSidebarr() {
      this.isExpanded = true;
    },
  },
};
</script>
  <style>
  #body-row {
    margin-left:0;
    margin-right:0;
}
#sidebar-container {
    min-height: 100vh;   
    background-color: #f7f7fa;
    padding: 0;
}

/* Sidebar sizes when expanded and expanded */
.sidebar-expanded {
    width: 230px;
}
.sidebar-collapsed {
    width: 60px;
}

/* Menu item*/
#sidebar-container .list-group a, .color {
    height: 50px;
    color: #6f6f6f;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
   
}
#sidebar-container .list-group a:hover,
.color:hover {
  color: #18aefa; /* Change the color on hover */
}

/* Submenu item*/
#sidebar-container .list-group .sidebar-submenu a {
    height: 45px;
    padding-left: 30px;
}
.sidebar-submenu {
    font-size: 0.9rem;
}

/* Separators */
.sidebar-separator-title {
    background-color: #f7f7fa;
    height: 35px;
}
.sidebar-separator {
    background-color: #f7f7fa;
    height: 25px;
}
.logo-separator {
    background-color: #f7f7fa;    
    height: 60px;
}

/* Closed submenu icon */
#sidebar-container .list-group .list-group-item[aria-expanded="false"] .submenu-icon::after {
  content: " \f0d7";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
/* Opened submenu icon */
#sidebar-container .list-group .list-group-item[aria-expanded="true"] .submenu-icon::after {
  content: " \f0da";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
.bg-grey{
  background-color: #f7f7fa;
}
  </style>
  