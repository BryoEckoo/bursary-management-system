<template>
    <HeaderPage />
    <InfoPage />
    <ButtonPage/>
    <form id="docup" enctype="multipart/form-data" name="docup" action="fileupload.php" method="post">
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th class="text-center">
                                    <font style="font-family: Verdana; font-size: 19px;">Upload Evidential Documents</font>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Duly filled Application form:</td>
                                <td><input type="file" id="fpic" name="fpic" required="true"><br></td>
                            </tr>
                            <tr>
                                <td>Fathers's Death Certificate :</td>
                                <td>
                                    <input type="file" id="ftndoc" name="ftndoc"><br>
        
                                </td>
                            </tr>
                            <tr>
                                <td>Duly filled Application form :</td>
                                <td><input type="file" id="fpic" name="fpic" required="true"><br>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Mother's Death certificate :
                                </td>
                                <td>
                                    <input type="file" id="ftcdoc" name="ftcdoc"><br>
        
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    PWD Registration card:
        
                                </td>
        
        
                                <td>
                                    <input type="file" id="fdmdoc" name="fdmdoc"><br>
        
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Fee statement :
        
                                </td>
        
                                <td>
                                    <input type="file" id="fdcdoc" name="fdcdoc" required="true"><br>
                                </td>
                            </tr>
                            <tr>
                                <td> Latest Report form :
        
                                </td>
        
                                <td>
                                    <input type="file" id="fide" name="fide" required="true"><br>
        
                                </td>
                            </tr>
        
                            <tr>
                                <td>
                                    Any Other relevant document
                                </td>
        
                                <td>
                                    <input type="file" id="fsig" name="fsig"><br>
        
                                </td>
                            </tr>
                            <tr>
                                <td>I Confirm That the Above Information Is the absolute truth</td>
                                <td colspan="2">
                                    <div class="text-center">
                                        <button class="proceed" @click="proceedToProfile">Upload</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </form>    
</template>

<script>
import HeaderPage from './headerPage.vue';
import ButtonPage from './buttonPage.vue';
import InfoPage from './infoPage.vue';

export default{
    name:'SummaryPage',
    components:{
        HeaderPage,
        ButtonPage,
        InfoPage
    },
    data(){
        return{
            formData:{},
            institutionData:{},
            bankData:{},
            familyData:{},

        };
    },
    created() {
        const instData = localStorage.getItem('institutionData');
        const bankSavedData = localStorage.getItem('bankData');
        const famData = localStorage.getItem('familyData');
        const personalData = localStorage.getItem('formData');


        if (instData) {
        this.institutionData = JSON.parse(instData);
        }
        if (bankSavedData) {
        this.bankData = JSON.parse(bankSavedData);
        }
        if (famData) {
        this.familyData = JSON.parse(famData);
        }
        if (personalData) {
        this.formData = JSON.parse(personalData);
        }
    } ,
    methods:{
        proceedToProfile(){
            this.$router.push('/profile');
        }
    }

}
</script>

<style>
.summary{
    text-align: center;
}
ul li{
    list-style: none;
}
</style>