<template>
    <HeaderPage />
    <infoPage /> 
    <buttonPage />
    <form @submit.prevent="onBankSubmit" style="background-color: #f8f3f3; padding: 20px; border: 1px solid #ccc; border-radius: 5px; margin-top: 15px;">
        <div class="block-fluid">
            <h4 class="text-center title2-bg m-b-10 m-b-10">Family Details</h4>
            <div class="row mt-2">
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="f_name">Father's Name</label>   
                        </div>
                        <div class="col-md-6">
                            <input id="f_name" class="form-control"  name="f_name" type="text">  
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="f_occupation">Father's Occupation</label>
                        </div>
                        <div class="col-md-6">
                            <input id="f_occupation" class="form-control"  name="f_occupation" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="f_contact">Father's Contact</label>
                        </div>
                        <div class="col-md-6">
                            <input id="f_contact" class="form-control" name="f_contact" type="text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="m_name">Mother's Name</label>
                        </div>
                        <div class="col-md-6">
                            <input id="m_name" class="form-control"  name="m_name" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="m_occupation">Mother's Occupation</label>
                        </div>
                        <div class="col-md-6">
                            <input id="m_occupation" class="form-control"  name="m_occupation" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="m_contact">Mother's Contact</label>
                        </div>
                        <div class="col-md-6">
                            <input id="m_contact" class="form-control"  name="m_contact" type="number">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="g_name">Guardian's Name</label>
                        </div>
                        <div class="col-md-6">
                            <input id="g_name" class="form-control"  name="g_name" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="g_occupation">Guardian's Occupation</label>
                        </div>
                        <div class="col-md-6">
                            <input id="g_occupation" class="form-control"  name="g_occupation" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="g_contact">Guardian's Contact</label>
                        </div>
                        <div class="col-md-6">
                            <input id="g_contact" class="form-control"  name="g_contact" type="number">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-12">
                    <div class="row ">
                        <div class="col-md-4 text-center">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="f_age">Father's Age</label>
                                </div>
                                <div class="col-md-6">
                                    <input id="f_age" class="form-control"  name="f_age" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="m_age">Mother's Age</label>
                                </div>
                                <div class="col-md-6">
                                    <input id="m_age" class="form-control"  name="m_age" type="text">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="g_age">Guardian's Age</label>
                                </div>
                                <div class="col-md-6">
                                    <input id="g_age" class="form-control"  name="g_age" type="text">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <div class="row text-center">
                        <div class="col-md-5">
                            <label for="no_siblings">Siblings's Details <span>*</span></label>
                        </div>
                        <div class="col-md-5">
                            <input id="no_siblings" class="form-control" name="no_siblings" type="text" placeholder="Number of siblings" required="true">
                        </div>
                    </div>     
                </div>
                <div class="col-md-6 ">
                    <div class="row text-center">
                        <div class="col-md-5">
                            <label for="cum_fee">Sibling's Total Fee</label>
                        </div>
                        <div class="col-md-5">
                            <input id="cum_fee" class="form-control" name="cum_fee" type="text" placeholder="Siblings Total Fee">
                        </div>
                    </div>     
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="row text-center">
                        <div class="col-md-6">
                            <label for="familyincom">Total Family Gross Income(12months)</label>
                        </div>
                        <div class="col-md-4">
                            <select id="familyincome" class="form-control" name="familyincome" required="true">
                                <option>Select</option>
                                <option>Less than 80,000</option>
                                <option>Between 80,000 and 150,000</option>
                                <option>Between 150,000 and 200,000</option>
                                <option>More than 200,000</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row">
                <h5 class="text-center mb-4 mt-4">If an orphan, who has been paying for your school fees</h5>
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="sponsorname">Name/institution</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorname" class="form-control"  name="sponsorname" type="text">
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="relation">Your relationship</label>
                            </div>
                            <div class="col-md-6">
                                <input id="relation" class="form-control"  name="relation" type="text">
                            </div>
                        </div>
                    </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                    <div class="col-md-4 text-center">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="sponsorcontact">Contact</label>
                            </div>
                            <div class="col-md-6">
                                <input id="sponsorcontact" class="form-control" name="sponsorcontact" type="text">
                            </div>
                        </div>
                    </div>
                <!-- </div> -->

            </div>
        </div>
            <div class="text-center mt-4">
                <button class="proceed" @click="onFamSubmit">Submit</button>	
                <button class="proceed" @click="proceedToSumm" :disabled="!isFamValid">Continue</button>
                <button class="proceed" type="button" @click="clearFamilyData">Clear Data</button>       
            </div>   
    </form>
            
           
</template>

<script>
import HeaderPage from './headerPage.vue';
import infoPage from './infoPage.vue';
import buttonPage from './buttonPage.vue';

export default {
    name:'FamilyPage',
    components:{
        HeaderPage,
        infoPage,
        buttonPage
    },
    data(){
        return{
            familyData:{
                title:'',
                familyFirstName:'',
                familyLastName:'',
                familyMobile:'',
                familyEmail:'',
                familyIdNo:'',
                familyOccupation:'',
                familyRela:'',
                familyAddress:'',
                familyResidence:'',
                familyTown:'',
                familyCounty:'',
                familySubCounty:'',
                familyWard:'',
            },
        };
    },
    methods:{
        clearFamilyData(){
            localStorage.removeItem('familyData');
            this.familyData = {
                familyFirstName:'',
                familyLastName:'',
                familyMobile:'',
                familyEmail:'',
                familyIdNo:'',
                familyOccupation:'',
                familyRela:'',
                familyAddress:'',
                familyResidence:'',
                familyTown:'',
                familyCounty:'',
                familySubCounty:'',
                familyWard:'',
            };
        },
        isFamValid(){
            const familyData = this.familyData; // Replace with your form data object
            // Add validation logic here, e.g., check if all required fields are filled
            return (
                familyData.title &&
                familyData.familyFirstName &&
                familyData.familyLastName &&
                familyData.familyMobile &&
                familyData.familyEmail &&
                familyData.familyIdNo &&
                familyData.familyOccupation &&
                familyData.familyRela &&
                familyData.familyAddress &&
                familyData.familyResidence &&
                familyData.familyTown &&
                familyData.familyCounty &&
                familyData.familySubCounty &&
                familyData.familyWard
            );
        },
        onFamSubmit(){
            // Save form data to localStorage
            localStorage.setItem('familyData', JSON.stringify(this.familyData));
            
            if (this.isFamValid()) {
              alert("Data saved successfully");
            } else {
              alert('Please fill out all the required fields before proceeding.');
            }
            
        },
        proceedToSumm() {
            if (this.isFamValid()) {
                this.$router.push('/summary');
            }
        },
        created() {
        const famiData = localStorage.getItem('familyData');
        if (famiData) {
            this.familyData = JSON.parse(famiData);
        }
    },
    }
}
</script>