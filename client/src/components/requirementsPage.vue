<template>
    <HeaderPage />
    <div class="info">
        <h4 class="text-center info-text">Upload Documents</h4>
    </div>
    <div class="card">
        <div class="page-header">
           <h4 class="text-center">  Please have the following documents ready for uploading at the end of your profile details. </h4>
        </div>
        <div class="card-block">
            <div class="table-responsive">
            <table border="1" class=" table table-striped details-table border-success-subtle">
                <tbody>     
                    <tr class="profile-th text-white">
                        <th style="text-align: center;">
                                    <strong>No.</strong>
                            </th>
                            <th style="text-align: center; text-white">
                                    <strong>Documents</strong>
                            </th>
                            <th style="text-align: center; text-white">
                                    <strong>Status</strong>
                            </th>
                    </tr> 
                    <tr>
                        <td class="text-center">
                            1.
                        </td>
                            <td class="text-center">
                                Duly filled Application form
                            </td>
                            <td class="bg-red text-center">
                                Mandatory
                            </td>                                      
                    </tr>       
                    <tr>
                        <td class="text-center">
                            2.
                        </td>
                        <td class="text-center">
                            PWD Registration card:
                        </td>
                        <td class="bg-red text-center">
                            Optional
                        </td>    
                    </tr>
                    <tr>
                        <td class="text-center">
                            3.
                        </td>
                        <td class="text-center">
                            Fee Structure ( During application )
                        </td>
                        <td class="bg-red text-center">
                            Mandatory
                        </td> 
                    </tr>
                    <tr>
                        <td class="text-center">
                            4.
                        </td>
                        <td class="text-center">
                            Result slip / Transcript / Report Form ( During application )
                        </td>
                        <td class="bg-red text-center">
                            Mandatory
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">
                            5.
                        </td>
                        <td class="text-center">
                            Parent(s) Death Certificates ( If Orphan )
                        </td>
                        <td class="bg-blue text-center">
                            Mandatory
                        </td>
                    </tr>          
                </tbody>
            </table>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderPage from './headerPage.vue'
export default{
    name:'RequirementsPage',
    components:{
        HeaderPage,
    },
}
</script>
<style>
table {
    border-collapse: collapse; /* Merge cell borders into a single border */
    width: 100%; /* Optionally, set the table width */
}

th, td {
    border: 1px solid #ddd; /* Add a 1px solid border to table headers and cells */
    padding: 8px; /* Add padding to space content inside cells */
    text-align: left; /* Optionally, set the text alignment */
}

th {
    background-color: #f2f2f2; /* Optionally, add background color to table headers */
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
  }
  
  /* Style the router link on hover */
  .proceed:hover {
    background-color: #034039; /* Change background color on hover */
    color: #ddd;
    border: 1px solid #034039;
    cursor: pointer;
  }
</style>