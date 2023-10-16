<template>
    <HeaderPage />
    <infoPage /> 
    <buttonPage />	
    <form @submit.prevent="onBankSubmit" style="background-color: #f8f3f3; padding: 20px; border: 1px solid #ccc; border-radius: 5px; margin-top: 15px;">
        <div class="block-fluid">
            <h4 class="text-center title2-bg m-b-10 m-b-10">School Fees Details</h4>
            <div class="row">
                <div class="col-md-4  text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="schoolfee" class="mt-2">Current Total School Fee </label>
                        </div>
                        <div class="col-md-6">
                            <input id="schoolfee" class="form-control" style="margin-top: 4px;" name="schoolfee" type="number" placeholder="Total School Fee" required="TRUE" min="1">
                        </div>
                    </div>
                </div>                   
                <div class="col-md-4  text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="feebalance" class="mt-2">Fee balance </label>
                        </div>
                        <div class="col-md-6">
                            <input id="feebalance" class="feebalance form-control" style="margin-top: 4px;" name="feebalance" type="number" placeholder="Fee Balance" required="TRUE" min="1">
                        </div>
                    </div>
                </div>
                <div class="col-md-4  text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="amount_applied" class="mt-2">Amount Being Applied For </label>
                        </div>
                        <div class="col-md-6">
                            <input id="amount_applied" class="form-control" style="margin-top: 4px;" name="amount_applied" type="number" placeholder="Amount Applied for" required="true" min="1">
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group row text-center mt-4 mb-4">
                <div class="row">
                    <div class="col-md-6 mt-2">
                        <label for="bsupport">Have you received any other bursary support from a public source before?<span>*</span></label>
                    </div>
                    <div class="col-md-2">
                        <select id="bsupport" class="form-control" name="bsupport" required="true">
                            <option>Yes</option>
                            <option>No</option>
                        </select>   
                    </div> 
                </div>
            </div>
            <div class="row">
                <div class="col-md-4  text-center">
                    <div class="row">            
                        <div class="col-md-6">
                            <label for="source">If yes, disclose the source.</label>
                        </div>
                            <div class="col-md-6">
                                <input id="source" class="form-control" style="margin-top: 4px;" name="source" type="text">
                            </div>
                    </div>
                </div>
                <div class="col-md-4  text-center">
                    <div class="row">
                        <div class="col-md-6">
                            <label for="amount">Amount</label>
                        </div>
                        
                            <div class="col-md-6">
                                <input id="amount" class="form-control" style="margin-top: 4px;" name="amount" type="number">
                            </div>    
                        
                    </div>  
                </div>  
                <div class="col-md-4  text-center">
                    <div class="row">            
                        <div class="col-md-6">
                            <label for="whichyear">Year Received</label>
                        </div>
                        
                            <div class="col-md-6">
                                <input id="whichyear" class="form-control" style="margin-top: 4px;" name="whichyear" maxlength="4" type="number">
                            </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        <hr>
        <div class="text-center ">
            <button type="submit" class="proceed" @click="onBankSubmit">Submit</button>	
            <button class="proceed" @click="proceedToFamily" :disabled="!isBankValid">Continue</button>
            <button class="proceed" type="button" @click="clearBankData">Clear Data</button>       
        </div>
    </form>
</template>

<script>
import HeaderPage from './headerPage.vue';
import infoPage from './infoPage.vue';
import buttonPage from './buttonPage.vue';

export default {
    name:'BankPage',
    components:{
        HeaderPage,
        infoPage,
        buttonPage
    },
    data(){
        return{
            bankData:{
                bankName: "",
                bankBranch: "",
                bankAccountName: "",
                bankAccountNo: "",
            },
        };
    },
    methods: {
        clearBankData() {
            localStorage.removeItem('bankData');
            this.bankData = {
                bankName: "",
                bankBranch: "",
                bankAccountName: "",
                bankAccountNo: "",
            };

        },
        isBankValid() {
            const bankData = this.bankData; // Replace with your form data object
            // Add validation logic here, e.g., check if all required fields are filled
            return (
                bankData.bankName &&
                bankData.bankBranch &&
                bankData.bankAccountName &&
                bankData.bankAccountNo
            );
        },
        onBankSubmit() {
            // Save form data to localStorage
            localStorage.setItem('bankData', JSON.stringify(this.bankData));

            if (this.isBankValid()) {
              alert("Data saved successfully");
            } else {
              alert('Please fill out all the required fields before proceeding.');
            }
        },
        proceedToFamily() {
            if (this.isBankValid()) {
                this.$router.push('/family');
            } else {
            // Optionally, provide feedback to the user about the incomplete form
            alert('Please fill out all the required fields before proceeding.');
            }
        },
    },
    created() {
        const bankSavedData = localStorage.getItem('bankData');
        if (bankSavedData) {
            this.bankData = JSON.parse(bankSavedData);
        }
    },
    
}

</script>