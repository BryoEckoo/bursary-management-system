<template>
    <div class="main-wrapper">
		
        
        <div class="header">
            
            <div class="header-left">
                <a href="http://bursary-ms.vercel.app/index" class="logo">
                    <img src="http://bursary-ms.vercel.app/images/logo.png" alt="Logo">
                </a>
                <a href="http://bursary-ms.vercel.app/index" class="logo logo-small">
                    <img src="http://bursary-ms.vercel.app/images/logo.png" alt="Logo" width="30" height="30">
                </a>
            </div>
           
            
            <a href="javascript:void(0);" id="toggle_btn">
                <i class="fas fa-align-left"></i>
            </a>

            
                <label style="font-weight: 900; margin-top: 1%; color: #0f893b; font-size: 25px; margin-left: 7%;">BURSARY MANAGEMENT SYSTEM</label>            
       
            <a class="mobile_btn" id="mobile_btn">
                <i class="fas fa-bars"></i>
            </a>
           
            <ul class="nav user-menu">

                
                <li class="nav-item dropdown has-arrow">
                    <a href="http://bursary-ms.vercel.app/index" class="dropdown-toggle nav-link" data-toggle="dropdown" id="menu1">
                        <span class="user-img"><img class="rounded-circle" src="" width="31" alt="User Loggedin"></span>
                    </a>
                    <div class="dropdown-menu" role="menu" aria-labelledby="menu1">
                        <div class="user-header">
                            
                            <div class="user-text">
                                                    <p>ndongdan4@gmail.com</p>
                                    </div>
                        </div>
                        <a class="dropdown-item" href="http://bursary-ms.vercel.app/profile">My Profile</a>
                        
                        
                        <a class="dropdown-item" href="http://bursary-ms.vercel.app/logout">Logout</a>
                    </div>
                </li>
                
                
            </ul>
           

<div class="sidebar" id="sidebar">
            <div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: 581px;"><div class="sidebar-inner slimscroll" style="overflow: hidden; width: 100%; height: 581px;">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title"> 
                            
                        </li>
                        <li class="active"> 
                            <a href="http://bursary-ms.vercel.app/index"><i class="fa fa-th-large"></i> <span>Dashboard</span></a>
                        </li>
                        <li> 
                            <a href="http://bursary-ms.vercel.app/applications"><i class="fa fa-file"></i> <span>Applications</span></a>
                        </li>
                        
                        <li> 
                            <a href="http://bursary-ms.vercel.app/students"><i class="fa fa-list"></i> <span>Applicants</span></a>
                        </li>
                        <li> 
                            <a href="http://bursary-ms.vercel.app/beneficiaries"><i class="fa fa-users"></i> <span>Beneficiaries</span></a>
                        </li>
                        <li> 
                            <a href="http://bursary-ms.vercel.app/reports"><i class="fa fa-shopping-cart"></i> <span>Bursary Reports</span></a>
                        </li>
                    
                        <li class="submenu">
                            <a href="http://bursary-ms.vercel.app/index"><i class="fa fa-file"></i> <span>Reports</span> <span class="menu-arrow"></span></a>
                            <ul>
                                <li><a href="http://bursary-ms.vercel.app/location_report">Location Report</a></li>
                                <li><a href="http://bursary-ms.vercel.app/sub_location_report">Sub-location Report</a></li>
                            </ul>
                        </li>
            
                        <li> 
                            <a href="http://bursary-ms.vercel.app/users"><i class="fa fa-user"></i> <span>Users</span></a>
                        </li>
                        <li> 
                            <a href="http://bursary-ms.vercel.app/settings"><i class="fa fa-cog"></i> <span>settings</span></a>
                        </li>
                    </ul>
                </div>
            </div><div class="slimScrollBar" style="background: rgb(204, 204, 204); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 581px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
        </div>			
        
        
        <div class="page-wrapper" style="min-height: 641px;">
        
            <div class="content container-fluid">

                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item active">Dashboard</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card bg-one">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-icon">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <div class="db-info">
                                        <h3>
                                            2
                                        </h3>
                                        <h6>Staff</h6>
                                    </div>										
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card bg-two">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-icon">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <div class="db-info">
                                        <h3>
                                    12
                                        </h3>
                                        <h6>Students</h6>
                                    </div>										
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card bg-three">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-icon">
                                        <i class="fa fa-receipt"></i>
                                    </div>
                                    <div class="db-info">
                                        <h3>
                                            0
                                        </h3>
                                        <h6>Today's Applications</h6>
                                    </div>										
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-sm-6 col-12">
                        <div class="card bg-four">
                            <div class="card-body">
                                <div class="db-widgets d-flex justify-content-between align-items-center">
                                    <div class="db-icon">
                                        <i class="fa fa-window-close"></i>
                                    </div>
                                    <div class="db-info">
                                        <h3>
                                            
                                        </h3>
                                        <h6>Today's Rollout</h6>
                                    </div>										
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col-md-12">
                    
                        <!-- Revenue Chart -->
                        <div class="card card-chart">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="card-title">Recent Applications</h5>
                                    </div>
                                    <div class="col-6">
                                                                                
                                    </div>
                                </div>						
                            </div>
                            <div class="card-body">
                                <div id="line_graph">
                                                                                                                </div>
                                <div class="table-responsive">
                                    <div id="Modal17" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/delete_application/17"></form>
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                                        <!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Delete</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-danger">Are you Sure you want Delete.... <strong>BUR9135?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="delete_acc" class="btn btn-danger">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                            </div>
                                                                                    </div><div id="Modal18" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/delete_application/18"></form>
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                                        <!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Delete</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-danger">Are you Sure you want Delete.... <strong>BUR8976?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="delete_acc" class="btn btn-danger">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                            </div>
                                                                                    </div><div id="Modal19" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/delete_application/19"></form>
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                                        <!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Delete</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-danger">Are you Sure you want Delete.... <strong>BUR4514?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="delete_acc" class="btn btn-danger">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                            </div>
                                                                                    </div><div id="Modal20" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/delete_application/20"></form>
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                                        <!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Delete</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-danger">Are you Sure you want Delete.... <strong>BUR8143?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="delete_acc" class="btn btn-danger">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div>
                                            </div>
                                                                                </div><div id="sample_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="sample_length"><label>Show <select name="sample_length" aria-controls="sample" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div><div id="sample_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="sample"></label></div><table class="table table-bordered table-striped dataTable no-footer" id="sample" aria-describedby="sample_info" style="width: 886px;">
                                    <thead>
                                        <tr><td class="font-weight-bold text-center sorting sorting_asc" tabindex="0" aria-controls="sample" rowspan="1" colspan="1" aria-sort="ascending" aria-label="#: activate to sort column descending" style="width: 26px;">#</td><td class="font-weight-bold text-center sorting" tabindex="0" aria-controls="sample" rowspan="1" colspan="1" aria-label="REF-NO.: activate to sort column ascending" style="width: 91px;">REF-NO.</td><td class="font-weight-bold text-center sorting" tabindex="0" aria-controls="sample" rowspan="1" colspan="1" aria-label="Applicant Name: activate to sort column ascending" style="width: 175px;">Applicant Name</td><td class="font-weight-bold text-center sorting" tabindex="0" aria-controls="sample" rowspan="1" colspan="1" aria-label="Location: activate to sort column ascending" style="width: 96px;">Location</td><td class="font-weight-bold text-center sorting" tabindex="0" aria-controls="sample" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style="width: 90px;">Status</td><td class="font-weight-bold text-center sorting" tabindex="0" aria-controls="sample" rowspan="1" colspan="1" aria-label="Actions: activate to sort column ascending" style="width: 180px;">Actions</td></tr>
                                    </thead>
                                    
                                    <tbody>
                                                                                    
                                         
                                         
                                         
                                         
                                         
                                         
                                         
                                         <tr class="odd">
                                            <td class="sorting_1">17</td>
                                            <td>BUR9135</td>
                                            <td>Amaya Hogan</td>
                                            <td>Jerusalem</td>
                                            <td class="text-warning font-weight-bold">Approved</td>
                                            <td class="text-center"><a href="" class="btn btn-primary" data-toggle="modal" data-target="#EditAmaya Hogan">Edit</a>
                                                <div class="modal fade" id="EditAmaya Hogan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                       <h4 class="text-center">EDIT APPLICATION</h4>
                                    </div>
                                    <div class="modal-body">
                                       <form method="post" action="http://bursary-ms.vercel.app/edit/BUR9135">
                                           <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                               <label class="font-weight-bold">Reference Number :</label>
                                        <input type="text" name="ref" class="form-control" id=""  value="BUR9135">
                                       <label class="font-weight-bold">UPI/ADM/REG No :</label>
                                        <input type="text" name="upi_reg" class="form-control" id=""  value="Et labore eligendi r">
                                        <label class="font-weight-bold">Fullname :</label> 
                                        <input type="text" name="name" class="form-control" id=""  value="Amaya Hogan">
                                        
                                        <label class="font-weight-bold">School type :</label> 
                                        <select name="school_type" id="" class="form-control">
                                            <option>Secondary School</option>
                                            <option>--select role--</option>
                                            <option>Primary School</option>
                                            <option>Secondary School</option>
                                            <option>University School</option>
                                         </select>
                                         <label class="font-weight-bold">School name :</label> 
                                        <input type="text" name="school_name" class="form-control" id=""  value="Noel Cameron">
                                        <label class="font-weight-bold">Location :</label> 
                                        <select name="location" id="" class="form-control">
                                            <option>--select role--</option>
                                            <option>Jerusalem</option>
                                            <option>Munyaka</option>
                                            <option>Ziwa</option>
                                            <option>Ilula</option>
                                            <option>Block10</option>
                                            <option>Subaru</option>
                                            <option>Vet</option>
                                            <option class="">Langas</option>
                                         </select>
                                         <label class="font-weight-bold">Bank name :</label> 
                                        <input type="text" name="bank" class="form-control" id="" value="moi">
                                        <label class="font-weight-bold">School Account no :</label> 
                                        <input type="number" name="account" class="form-control" id=""  value="855">
                                        <input type="submit" value="E D I T" name="edit" class="btn btn-success form-control mt-2">
                                       </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            
                                            <a href="" data-toggle="modal" data-target="#Approve17" class="btn btn-success">Approve</a>
                                        
                                        <div id="Approve17" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/approve_application/17">
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">														<!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Approve</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-warning">Are you Sure you want Approve.... <strong>BUR9135?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="approve" class="btn btn-success">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div></form>
                                            </div>
                                        </div></td>
                                        </tr><tr class="even">
                                            <td class="sorting_1">18</td>
                                            <td>BUR8976</td>
                                            <td>Juliet Castillo</td>
                                            <td>Ziwa</td>
                                            <td class="text-warning font-weight-bold">Approved</td>
                                            <td class="text-center"><a href="" class="btn btn-primary" data-toggle="modal" data-target="#EditJuliet Castillo">Edit</a>
                                                <div class="modal fade" id="EditJuliet Castillo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                       <h4 class="text-center">EDIT APPLICATION</h4>
                                    </div>
                                    <div class="modal-body">
                                       <form method="post" action="http://bursary-ms.vercel.app/edit/BUR8976">
                                           <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                               <label class="font-weight-bold">Reference Number :</label>
                                        <input type="text" name="ref" class="form-control" id=""  value="BUR8976">
                                       <label class="font-weight-bold">UPI/ADM/REG No :</label>
                                        <input type="text" name="upi_reg" class="form-control" id=""  value="Doloribus voluptas n">
                                        <label class="font-weight-bold">Fullname :</label> 
                                        <input type="text" name="name" class="form-control" id="" value="Juliet Castillo">
                                        
                                        <label class="font-weight-bold">School type :</label> 
                                        <select name="school_type" id="" class="form-control">
                                            <option >University/College/TVET</option>
                                            <option>--select role--</option>
                                            <option>Primary School</option>
                                            <option>Secondary School</option>
                                            <option>University School</option>
                                         </select>
                                         <label class="font-weight-bold">School name :</label> 
                                        <input type="text" name="school_name" class="form-control" id=""  value="Quon Hodge">
                                        <label class="font-weight-bold">Location :</label> 
                                        <select name="location" id="" class="form-control" >
                                            <option >Ziwa</option>
                                            <option>--select role--</option>
                                            <option>Jerusalem</option>
                                            <option>Munyaka</option>
                                            <option>Ziwa</option>
                                            <option>Ilula</option>
                                            <option>Block10</option>
                                            <option>Subaru</option>
                                            <option>Vet</option>
                                            <option class="">Langas</option>
                                         </select>
                                         <label class="font-weight-bold">Bank name :</label> 
                                        <input type="text" name="bank" class="form-control" id="" value="moi">
                                        <label class="font-weight-bold">School Account no :</label> 
                                        <input type="number" name="account" class="form-control" id=""  value="99">
                                        <input type="submit" value="E D I T" name="edit" class="btn btn-success form-control mt-2">
                                       </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            
                                            <a href="" data-toggle="modal" data-target="#Approve18" class="btn btn-success">Approve</a>
                                        
                                        <div id="Approve18" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/approve_application/18">
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">														<!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Approve</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-warning">Are you Sure you want Approve.... <strong>BUR8976?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="approve" class="btn btn-success">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div></form>
                                            </div>
                                        </div></td>
                                        </tr><tr class="odd">
                                            <td class="sorting_1">19</td>
                                            <td>BUR4514</td>
                                            <td>Damian Cooke</td>
                                            <td>Munyaka</td>
                                            <td class="text-warning font-weight-bold">Approved</td>
                                            <td class="text-center"><a href="" class="btn btn-primary" data-toggle="modal" data-target="#EditDamian Cooke">Edit</a>
                                                <div class="modal fade" id="EditDamian Cooke" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                       <h4 class="text-center">EDIT APPLICATION</h4>
                                    </div>
                                    <div class="modal-body">
                                       <form method="post" action="http://bursary-ms.vercel.app/edit/BUR4514">
                                           <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                               <label class="font-weight-bold">Reference Number :</label>
                                        <input type="text" name="ref" class="form-control" id=""  value="BUR4514">
                                       <label class="font-weight-bold">UPI/ADM/REG No :</label>
                                        <input type="text" name="upi_reg" class="form-control" id=""  value="Nulla aut sed dolore">
                                        <label class="font-weight-bold">Fullname :</label> 
                                        <input type="text" name="name" class="form-control" id=""  value="Damian Cooke">
                                        
                                        <label class="font-weight-bold">School type :</label> 
                                        <select name="school_type" id="" class="form-control">
                                            <option >Secondary School</option>
                                            <option>--select role--</option>
                                            <option>Primary School</option>
                                            <option>Secondary School</option>
                                            <option>University School</option>
                                         </select>
                                         <label class="font-weight-bold">School name :</label> 
                                        <input type="text" name="school_name" class="form-control" id="" value="Kristen Pacheco">
                                        <label class="font-weight-bold">Location :</label> 
                                        <select name="location" id="" class="form-control" >
                                            <option >Munyaka</option>
                                            <option>--select role--</option>
                                            <option>Jerusalem</option>
                                            <option>Munyaka</option>
                                            <option>Ziwa</option>
                                            <option>Ilula</option>
                                            <option>Block10</option>
                                            <option>Subaru</option>
                                            <option>Vet</option>
                                            <option class="">Langas</option>
                                         </select>
                                         <label class="font-weight-bold">Bank name :</label> 
                                        <input type="text" name="bank" class="form-control" id="" value="moi">
                                        <label class="font-weight-bold">School Account no :</label> 
                                        <input type="number" name="account" class="form-control" id=""  value="43">
                                        <input type="submit" value="E D I T" name="edit" class="btn btn-success form-control mt-2">
                                       </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            
                                            <a href="" data-toggle="modal" data-target="#Approve19" class="btn btn-success">Approve</a>
                                        
                                        <div id="Approve19" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/approve_application/19">
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">														<!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Approve</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-warning">Are you Sure you want Approve.... <strong>BUR4514?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="approve" class="btn btn-success">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div></form>
                                            </div>
                                        </div></td>
                                        </tr><tr class="even">
                                            <td class="sorting_1">20</td>
                                            <td>BUR8143</td>
                                            <td>Dan Ndong</td>
                                            <td>Munyaka</td>
                                            <td class="text-warning font-weight-bold">Approved</td>
                                            <td class="text-center"><a href="" class="btn btn-primary" data-toggle="modal" data-target="#EditDan Ndong">Edit</a>
                                                <div class="modal fade" id="EditDan Ndong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                       <h4 class="text-center">EDIT APPLICATION</h4>
                                    </div>
                                    <div class="modal-body">
                                       <form method="post" action="http://bursary-ms.vercel.app/edit/BUR8143">
                                           <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                                               <label class="font-weight-bold">Reference Number :</label>
                                        <input type="text" name="ref" class="form-control" id=""  value="BUR8143">
                                       <label class="font-weight-bold">UPI/ADM/REG No :</label>
                                        <input type="text" name="upi_reg" class="form-control" id=""   value="com/1002/18">
                                        <label class="font-weight-bold">Fullname :</label> 
                                        <input type="text" name="name" class="form-control" id=""    value="Dan Ndong">
                                        
                                        <label class="font-weight-bold">School type :</label> 
                                        <select name="school_type" id="" class="form-control">
                                            <option  >University/College/TVET</option>
                                            <option>--select role--</option>
                                            <option>Primary School</option>
                                            <option>Secondary School</option>
                                            <option>University School</option>
                                         </select>
                                         <label class="font-weight-bold">School name :</label> 
                                        <input type="text" name="school_name" class="form-control" id=""    value="Moi University">
                                        <label class="font-weight-bold">Location :</label> 
                                        <select name="location" id="" class="form-control"   >
                                            <option  >Munyaka</option>
                                            <option>--select role--</option>
                                            <option>Jerusalem</option>
                                            <option>Munyaka</option>
                                            <option>Ziwa</option>
                                            <option>Ilula</option>
                                            <option>Block10</option>
                                            <option>Subaru</option>
                                            <option>Vet</option>
                                            <option class="">Langas</option>
                                         </select>
                                         <label class="font-weight-bold">Bank name :</label> 
                                        <input type="text" name="bank" class="form-control" id="" value="moi">
                                        <label class="font-weight-bold">School Account no :</label> 
                                        <input type="number" name="account" class="form-control" id=""    value="000111378787788">
                                        <input type="submit" value="E D I T" name="edit" class="btn btn-success form-control mt-2">
                                       </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                                            
                                            <a href="" data-toggle="modal" data-target="#Approve20" class="btn btn-success">Approve</a>
                                        
                                        <div id="Approve20" class="modal fade" role="dialog">
                                            <div class="modal-dialog">
                                                <form method="post" action="http://bursary-ms.vercel.app/approve_application/20">
                                                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">														<!-- Modal content-->
                                                    <div class="modal-content">
                                
                                                        <div class="modal-header" style="background: #398AD7; color: #fff;">
                                                            <button type="button" class="close" data-dismiss="modal">×</button>
                                                            <h4 class="modal-title">Approve</h4>
                                                        </div>
                                
                                                        <div class="modal-body">
                                                            <p>
                                                                </p><div class="alert alert-warning">Are you Sure you want Approve.... <strong>BUR8143?</strong><p></p>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="submit" name="approve" class="btn btn-success">YES</button>
                                                                <button type="button" class="btn btn-default" data-dismiss="modal">NO</button>
                                                            </div>
                                                        </div>
                                                
                                                </div></form>
                                            </div>
                                        </div></td>
                                        </tr></tbody>
                                    
                                    </table><div class="dataTables_info" id="sample_info" role="status" aria-live="polite">Showing 1 to 4 of 4 entries</div><div class="dataTables_paginate paging_simple_numbers" id="sample_paginate"><a class="paginate_button previous disabled" aria-controls="sample" aria-disabled="true" aria-role="link" data-dt-idx="previous" tabindex="-1" id="sample_previous">Previous</a><span><a class="paginate_button current" aria-controls="sample" aria-role="link" aria-current="page" data-dt-idx="0" tabindex="0">1</a></span><a class="paginate_button next disabled" aria-controls="sample" aria-disabled="true" aria-role="link" data-dt-idx="next" tabindex="-1" id="sample_next">Next</a></div></div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

            </div>

        </div>
            
    </div>
    </div>
</template>
<script>
export default{
    name:'AdminPage',
    components:{

    }
}
</script>