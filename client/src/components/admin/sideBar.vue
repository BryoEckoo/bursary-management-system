<template>
  <!-- Bootstrap row -->
  <div class="col-sm-3 p-0"  id="body-row">
    <!-- Sidebar -->
    <div id="sidebar-container" :class="{ 'sidebar-expanded': isExpanded, 'sidebar-collapsed': !isExpanded }" class="d-none d-md-block">
      <!-- Bootstrap List Group -->
      <ul class="list-group" style="border: 0px solid;">
        <!-- /END Separator -->
        <!-- Menu with submenu -->
        <a href="#" class="bg-grey  mt-4 list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-th-large fa-fw mr-3"></span>
            <span class="menu-collapsed">Dashboard</span>
          </div>
        </a>
        <a href="#" class="bg-grey list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-file fa-fw mr-3"></span>
            <span class="menu-collapsed">Applications</span>
          </div>
        </a>
        <a href="#" class="bg-grey list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-users fa-fw mr-3"></span>
            <span class="menu-collapsed">Beneficiaries</span>
          </div>
        </a>
        <a @click="toggleSubmenu(1)" :aria-expanded="isSubmenuExpanded[1]" class="bg-grey list-group-item list-group-item-action flex-column align-items-start" style="border: 0px; cursor:pointer;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-th-large mr-3"></span>
            <span class="menu-collapsed">Reports</span>
            <span class="submenu-icon ml-auto" v-if="isSubmenuExpanded[1]"></span>
          </div>
        </a>
        <!-- Submenu content -->
        <div v-if="isSubmenuExpanded[1]" class="sidebar-submenu" style="border-radius: 3px;">
          <a href="#" class="list-group-item list-group-item-action bg-grey color">
            <span class="menu-collapsed">Amount Reports</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey color">
            <span class="menu-collapsed">Bursary Reports</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey color">
            <span class="menu-collapsed">Wards Reports</span>
          </a>
        </div>
        <a href="#" class="bg-grey list-group-item list-group-item-action" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-tasks fa-fw mr-3"></span>
            <span class="menu-collapsed">Users</span>
          </div>
        </a>
        
        <a @click="toggleSidebar" class="bg-grey list-group-item list-group-item-action d-flex align-items-center" style="border: 0px;">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span id="collapse-icon" class="fa fa-2x mr-3"></span>
            <span id="collapse-text" class="menu-collapsed">Collapse</span>
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
  