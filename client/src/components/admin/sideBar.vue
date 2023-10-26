<template>
  <!-- Bootstrap row -->
  <div class="col" id="body-row">
    <!-- Sidebar -->
    <div id="sidebar-container" :class="{ 'sidebar-expanded': isExpanded, 'sidebar-collapsed': !isExpanded }" class="d-none d-md-block">
      <!-- Bootstrap List Group -->
      <ul class="list-group">
        <!-- Separator with title -->
        <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
          <small>MAIN MENU</small>
        </li>
        <!-- /END Separator -->
        <!-- Menu with submenu -->
        <a @click="toggleSubmenu(1)" :aria-expanded="isSubmenuExpanded[1]" class="bg-grey list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-th-large mr-2"></span>
            <span class="menu-collapsed">Dashboard</span>
            <span class="submenu-icon ml-auto" v-if="isSubmenuExpanded[1]"></span>
          </div>
        </a>
        <!-- Submenu content -->
        <div v-if="isSubmenuExpanded[1]" class="sidebar-submenu">
          <a href="#" class="list-group-item list-group-item-action bg-grey text-white">
            <span class="menu-collapsed">Chahgag</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey text-white">
            <span class="menu-collapsed">Reports</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey text-white">
            <span class="menu-collapsed">Tables</span>
          </a>
        </div>
        <a @click="toggleSubmenu(2)" :aria-expanded="isSubmenuExpanded[2]" class="bg-grey list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-user fa-fw mr-3"></span>
            <span class="menu-collapsed">Profile</span>
            <span class="submenu-icon ml-auto" v-if="isSubmenuExpanded[2]"></span>
          </div>
        </a>
        <!-- Submenu content -->
        <div v-if="isSubmenuExpanded[2]" class="sidebar-submenu">
          <a href="#" class="list-group-item list-group-item-action bg-grey text-white">
            <span class="menu-collapsed">Settings</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-grey text-white">
            <span class="menu-collapsed">Password</span>
          </a>
        </div>
        <a href="#" class="bg-grey list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-tasks fa-fw mr-3"></span>
            <span class="menu-collapsed">Tasks</span>
          </div>
        </a>
        <!-- Separator with title -->
        <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
          <small>OPTIONS</small>
        </li>
        <!-- /END Separator -->
        <a href="#" class="bg-grey list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-calendar fa-fw mr-3"></span>
            <span class="menu-collapsed">Calendar</span>
          </div>
        </a>
        <a href="#" class="bg-grey list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-envelope-o fa-fw mr-3"></span>
            <span class="menu-collapsed">Messages <span class="badge badge-pill badge-primary ml-2">5</span></span>
          </div>
        </a>
        <!-- Separator without title -->
        <li class="list-group-item sidebar-separator menu-collapsed"></li>
        <!-- /END Separator -->
        <a href="#" class="bg-grey list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-start align-items-center">
            <span class="fa fa-question fa-fw mr-3"></span>
            <span class="menu-collapsed font-weight-bold">Help</span>
          </div>
        </a>
        <a @click="toggleSidebar" class="bg-grey list-group-item list-group-item-action d-flex align-items-center">
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
#sidebar-container .list-group a {
    height: 50px;
    color: #6f6f6f;
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
  