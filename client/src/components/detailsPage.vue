<template>
    <HeaderPage />
    <infoPage /> 
    <buttonPage />
    <form @submit.prevent="onSubmit" style="background-color: #f8f3f3; padding: 20px; border: 1px solid #ccc; border-radius: 5px; margin-top: 15px;">
    <div class="form-fill text-center ">
        <h3 class="text-center title2-bg m-b-10"> Your Personal Details</h3>
        <div class="row">
            <div class="col-sm-6">
    <div class="form-group row">
        <div class="col-md-4 input-red" for="first_name">First Name </div>
        <div class="col-md-8">
            <input type="text" name="first_name"  id="first_name_" class="form-control" v-model="formData.firstName" required="required">
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-4 input-red" for="last_name">Last Name </div><div class="col-md-8">
            <input type="text" name="last_name" id="last_name_" class="form-control" v-model="formData.lastName" required="required">
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-4 input-red" for="dob">Date of Birth </div><div class="col-md-8">
            <input id="dob" type="text" required="required" name="dob" maxlength="" class="form-control text" v-model="formData.dateOb">
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-4 input-red" for="gender">Gender </div>
        <div class="col-md-8">
            <select name="gender" v-model="formData.gender" required="required" class="form-control select select2-hidden-accessible">
                <option value="">Select Gender</option>
                <option value="male" >Male</option>
                <option value="female">Female</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
    </div>
    <div class="form-group row">
        <div class="col-md-4 input-red" for="parental_status">Parental Status </div><div class="col-md-8">
            <select name="parental_status" v-model="formData.parent" class="form-control select select2-hidden-accessible" required="required">
                <option value="Both Parents Alive">Both Parents Alive</option>
                <option value="Total Orphan">Total Orphan</option>
                <option value="Single Mother">Single Mother</option>
                <option value="Single Father">Single Father</option>
                <option value="Unknown">Unknown</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-4 input-red" for="county">County of Birth</div><div class="col-md-8">
            <select name="county" v-model="formData.countyBirth" class="select form-control county select2-hidden-accessible" id="county" style="width:100% important;" required="required">
                <option value="" selected="selected">Select County</option>
                <option value="AZ">International / Unknown</option>
                <option value="1">Baringo</option>
                <option value="2">Bomet</option>
                <option value="3">Bungoma</option>
                <option value="4">Busia</option>
                <option value="5">Elgeyo Marakwet</option>
                <option value="6">Embu</option>
                <option value="7">Garissa</option>
                <option value="8">Homa Bay</option>
                <option value="9">Isiolo</option>
                <option value="10">Kajiado</option>
                <option value="11">Kakamega</option>
                <option value="12">Kericho</option>
                <option value="13">Kiambu</option>
                <option value="14">Kilifi</option>
                <option value="15">Kirinyaga</option>
                <option value="16">Kisii</option>
                <option value="17">Kisumu</option>
                <option value="18">Kitui</option>
                <option value="19">Kwale</option>
                <option value="20">Laikipia</option>
                <option value="21">Lamu</option>
                <option value="22">Machakos</option>
                <option value="23">Makueni</option>
                <option value="24">Mandera</option>
                <option value="25">Marsabit</option>
                <option value="26">Meru</option>
                <option value="27">Migori</option>
                <option value="28">Mombasa</option>
                <option value="29">Muranga</option>
                <option value="30">Nairobi</option>
                <option value="31">Nakuru</option>
                <option value="32">Nandi</option>
                <option value="33">Narok</option>
                <option value="34">Nyamira</option>
                <option value="35">Nyandarua</option>
                <option value="36">Nyeri</option>
                <option value="37">Samburu</option>
                <option value="38">Siaya</option>
                <option value="39">Taita Taveta</option>
                <option value="40">Tana River</option>
                <option value="41">Tharaka Nithi</option>
                <option value="42">Trans Nzoia</option>
                <option value="43">Turkana</option>
                <option value="44">Uasin Gishu</option>
                <option value="45">Vihiga</option>
                <option value="46">Wajir</option>
                <option value="47">West Pokot</option>
            </select>
        </div>
    </div>
    <div class="form-group row">
        <div class="col-md-4 input-red" for="subcounty">Sub County of Birth </div><div class="col-md-8">
            <select name="subcounty" v-model="formData.subCounty" class="select form-control col-sm-12 select2-hidden-accessible" id="subcounty" required="required" style="width:100% important;">
            <option value="" selected="'selected">Select Sub County</option>
            <option value="144">Ainabkoi </option>
            <option value="189">Ainamoi </option>
            <option value="152">Aldai </option>
            <option value="232">Alego Usonga </option>
            <option value="200">Alurambi </option>
            <option value="253">Awedo </option>
            <option value="174">Bahati </option>
            <option value="32">Balambala </option>
            <option value="41">Banisa </option>
            <option value="161">Baringo Central </option>
            <option value="160">Baringo North </option>
            <option value="159">Baringo South </option>
            <option value="191">Belgut </option>
            <option value="69">BMwingi Central </option>
            <option value="264">Bobasi </option>
            <option value="262">Bomachoge </option>
            <option value="260">Bonchari </option>
            <option value="234">Bondo </option>
            <option value="195">Bonet East </option>
            <option value="273">Borabu </option>
            <option value="229">Budalangi </option>
            <option value="217">Bumula </option>
            <option value="21">Bura </option>
            <option value="190">Bureti </option>
            <option value="205">Butere </option>
            <option value="227">Butula </option>
            <option value="58">Buuri </option>
            <option value="59">Central Imenti </option>
            <option value="1">Changamwe </option>
            <option value="194">Chepalungu </option>
            <option value="140">Cherangany </option>
            <option value="155">Chesumei </option>
            <option value="61">Chuka / Igambanga'ombe </option>
            <option value="30">Dadaab y</option>
            <option value="275">Dagoretti North </option>
            <option value="274">Dagoretti South </option>
            <option value="162">Eldama Ravine </option>
            <option value="38">Eldas </option>
            <option value="283">Embakasi Central </option>
            <option value="281">Embakasi East </option>
            <option value="284">Embakasi North </option>
            <option value="285">Embakasi South </option>
            <option value="282">Embakasi West </option>
            <option value="154">Emgwen </option>
            <option value="212">Emuhaya </option>
            <option value="178">Emurua Dikirr </option>
            <option value="137">Endebess </option>
            <option value="33">Fafi </option>
            <option value="228">Funyula </option>
            <option value="20">Galole </option>
            <option value="12">Ganze </option>
            <option value="28">Garissa Township </option>
            <option value="19">Garsen </option>
            <option value="110">Gatanga </option>
            <option value="112">Gatundu North </option>
            <option value="111">Gatundu South </option>
            <option value="233">Gem </option>
            <option value="101">Gichugu </option>
            <option value="169">Gilgil </option>
            <option value="116">Githunguri </option>
            <option value="265">Gucha </option>
            <option value="250">Gwasi </option>
            <option value="211">Hamisi </option>
            <option value="247">Homa Bay Town </option>
            <option value="53">Igembe Central </option>
            <option value="54">Igembe North </option>
            <option value="52">Igembe South </option>
            <option value="29">Ijara </option>
            <option value="208">Ikolomani </option>
            <option value="50">Isiolo North </option>
            <option value="51">Isiolo South </option>
            <option value="3">Jomvu </option>
            <option value="113">Juja </option>
            <option value="119">Kabete </option>
            <option value="244">Kabondo Kasipul </option>
            <option value="216">Kabuchai </option>
            <option value="131">Kacheliba </option>
            <option value="78">Kagundo </option>
            <option value="86">Kaiti </option>
            <option value="184">Kajiado Central </option>
            <option value="185">Kajiado East </option>
            <option value="183">Kajiado North </option>
            <option value="186">Kajiado South </option>
            <option value="10">Kaloleni </option>
            <option value="287">Kamukunji </option>
            <option value="109">Kandara </option>
            <option value="218">Kanduyi </option>
            <option value="104">Kangema </option>
            <option value="129">Kapenguria </option>
            <option value="145">Kapseret </option>
            <option value="245">Karachuonyo </option>
            <option value="279">Kasarani </option>
            <option value="243">Kasipul </option>
            <option value="80">Kathiani </option>
            <option value="149">Keiyo North </option>
            <option value="150">Keiyo South </option>
            <option value="146">Kesses </option>
            <option value="206">Khwisero </option>
            <option value="118">Kiambaa </option>
            <option value="117">Kiambu </option>
            <option value="277">Kibra </option>
            <option value="89">Kibwezi East </option>
            <option value="88">Kibwezi West </option>
            <option value="95">Kieni </option>
            <option value="107">Kigumo </option>
            <option value="106">Kiharu </option>
            <option value="120">Kikuyu </option>
            <option value="177">Kilgoris </option>
            <option value="9">Kilifi North </option>
            <option value="2">Kilifi South </option>
            <option value="8">Kilifi South </option>
            <option value="85">Kilome </option>
            <option value="221">Kimilili </option>
            <option value="139">Kiminini </option>
            <option value="18">Kinango </option>
            <option value="90">Kipipiri </option>
            <option value="187">Kipkelion East </option>
            <option value="188">Kipkelion West </option>
            <option value="103">Kirinyaga Central </option>
            <option value="4">Kisauni </option>
            <option value="238">Kisumu Central </option>
            <option value="236">Kisumu East </option>
            <option value="237">Kisumu West </option>
            <option value="72">Kitui Rural </option>
            <option value="75">Kitui South </option>
            <option value="73">Kitui Town </option>
            <option value="71">Kitui West </option>
            <option value="270">Kitutut Masaba </option>
            <option value="196">Konoin </option>
            <option value="171">Kuresoi North </option>
            <option value="170">Kuresoi South </option>
            <option value="258">Kuria East </option>
            <option value="259">Kuria West </option>
            <option value="136">Kwanza </option>
            <option value="45">Lafey </option>
            <option value="31">Lagdera </option>
            <option value="164">Laikipia East </option>
            <option value="165">Laikipia North </option>
            <option value="163">Laikipia West </option>
            <option value="49">Laisamis </option>
            <option value="22">Lamu East </option>
            <option value="23">Lamu West </option>
            <option value="276">Langata </option>
            <option value="122">Lari </option>
            <option value="6">Likoni </option>
            <option value="121">Limuru </option>
            <option value="126">Loima </option>
            <option value="213">Luanda </option>
            <option value="197">Lugari </option>
            <option value="198">Lukuyani </option>
            <option value="16">Lunga Lunga </option>
            <option value="62">Maara </option>
            <option value="82">Machakos Town </option>
            <option value="14">Magarini </option>
            <option value="286">Makadara </option>
            <option value="87">Makueni </option>
            <option value="199">Malava </option>
            <option value="13">Malindi </option>
            <option value="44">Mandera East </option>
            <option value="42">Mandera North </option>
            <option value="43">Mandera South </option>
            <option value="40">Mandera West </option>
            <option value="64">Manyatta </option>
            <option value="108">Maragwa </option>
            <option value="147">Marakwet East </option>
            <option value="148">Marakwet West </option>
            <option value="268">Marani </option>
            <option value="76">Masinga </option>
            <option value="226">Matayos </option>
            <option value="289">Mathare </option>
            <option value="105">Mathioya </option>
            <option value="96">Mathira </option>
            <option value="17">Matuga </option>
            <option value="204">Matungu </option>
            <option value="79">Matungulu </option>
            <option value="81">Mavoko </option>
            <option value="67">Mbeere North </option>
            <option value="66">Mbeere South </option>
            <option value="249">Mbita </option>
            <option value="84">Mbooni </option>
            <option value="157">Mogotio </option>
            <option value="143">Moiben </option>
            <option value="166">Molo </option>
            <option value="269">Mosocho </option>
            <option value="156">Mosop </option>
            <option value="46">Moyale </option>
            <option value="15">Msambweni </option>
            <option value="214">Mt. Elgon </option>
            <option value="263">Mugirango </option>
            <option value="241">Muhoroni </option>
            <option value="98">Mukurwe-ini </option>
            <option value="202">Mumias </option>
            <option value="203">Mumias East </option>
            <option value="74">Mutito </option>
            <option value="7">Mvita </option>
            <option value="83">Mwala </option>
            <option value="26">Mwatate </option>
            <option value="100">Mwea </option>
            <option value="68">Mwingi North </option>
            <option value="70">Mwingi South </option>
            <option value="168">Naivasha </option>
            <option value="176">Nakuru Town East </option>
            <option value="175">Nakuru Town West </option>
            <option value="225">Nambale </option>
            <option value="153">Nandi Hills </option>
            <option value="180">Narok East </option>
            <option value="179">Narok North </option>
            <option value="181">Narok South </option>
            <option value="182">Narok West </option>
            <option value="201">Navakholo </option>
            <option value="93">Ndaragwa </option>
            <option value="248">Ndhiwa </option>
            <option value="102">Ndia </option>
            <option value="167">Njoro </option>
            <option value="47">North Horr </option>
            <option value="57">North Imenti </option>
            <option value="272">North Mugirango </option>
            <option value="242">Nyakach </option>
            <option value="5">Nyali </option>
            <option value="240">Nyando </option>
            <option value="267">Nyaribari Chache </option>
            <option value="266">Nyaribari Masaba </option>
            <option value="257">Nyatike </option>
            <option value="99">Nyeri Town </option>
            <option value="92">Ol-Jorok </option>
            <option value="91">Ol-Kalou </option>
            <option value="97">Othaya </option>
            <option value="132">Pokot South </option>
            <option value="11">Rabai </option>
            <option value="246">Rangwe </option>
            <option value="235">Rarieda </option>
            <option value="173">Rongai </option>
            <option value="252">Rongo </option>
            <option value="278">Roysambu </option>
            <option value="280">Ruaraka </option>
            <option value="115">Ruiru </option>
            <option value="65">Runyenjes </option>
            <option value="210">Sabatia </option>
            <option value="138">Saboti </option>
            <option value="48">Saku </option>
            <option value="134">Samburu East </option>
            <option value="135">Samburu North </option>
            <option value="133">Samburu West </option>
            <option value="239">Seme </option>
            <option value="130">Sigor </option>
            <option value="192">Sigowet </option>
            <option value="207">Sinyalu </option>
            <option value="215">Sirisia </option>
            <option value="193">Sotik </option>
            <option value="60">South Imenti </option>
            <option value="261">South Mugirango </option>
            <option value="141">Soy </option>
            <option value="288">Starehe </option>
            <option value="251">Suba </option>
            <option value="172">Subukia </option>
            <option value="255">Suna East </option>
            <option value="254">Suna West </option>
            <option value="36">Tarbaj </option>
            <option value="24">Taveta </option>
            <option value="223">Teso North </option>
            <option value="224">Teso South </option>
            <option value="94">Tetu </option>
            <option value="63">Tharaka </option>
            <option value="114">Thika Town </option>
            <option value="158">Tiaty </option>
            <option value="56">Tigania East </option>
            <option value="55">Tigania West </option>
            <option value="151">Tinderet </option>
            <option value="222">Tongaren </option>
            <option value="142">Turbo </option>
            <option value="125">Turkana Central </option>
            <option value="128">Turkana East </option>
            <option value="123">Turkana North </option>
            <option value="127">Turkana South </option>
            <option value="124">Turkana West </option>
            <option value="230">Ugenya </option>
            <option value="231">Ugunja </option>
            <option value="256">Uriri </option>
            <option value="209">Vihiga </option>
            <option value="27">Voi </option>
            <option value="35">Wajir East </option>
            <option value="34">Wajir North </option>
            <option value="39">Wajir South </option>
            <option value="37">Wajir West </option>
            <option value="219">Webuye East </option>
            <option value="220">Webuye West </option>
            <option value="271">West Mugirango </option>
            <option value="290">Westlands </option>
            <option value="25">Wundanyi </option>
            <option value="77">Yatta </option>
            </select>
        </div>
    </div>
    </div>
    <div class="col-sm-6">
        <div class="form-group row">
            <div class="col-md-4 input-red" for="ward">Ward </div><div class="col-md-8">
                <input type="text"   name="ward" v-model="formData.ward" id="ward" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-4 input-red" for="residence">Residence </div><div class="col-md-8">
                <input type="text" name="residence" v-model="formData.residence" id="residence_" class="form-control" required="required">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-4 input-blue" for="id_no">ID  Number </div><div class="col-md-8">
                <input type="text" name="id_no" v-model="formData.idNo" id="id_no_" class="form-control">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-4 input-red" for="phone">Phone </div><div class="col-md-8">
                <input type="text" name="phone" v-model="formData.phone" id="phone_" class="form-control" required="required">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-4 input-red" for="email">Email </div><div class="col-md-8">
                <input type="email" name="email" class="form-control" v-model="formData.email">     
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-4 input-red" for="special_need">Special Need </div><div class="col-md-8">
                <select name="special_need" v-model="formData.specialNeed" required="required" class="validate[required] form-control select select2-hidden-accessible">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-4 input-blue" for="type_of_need"> Type Of Need </div><div class="col-md-8">
                <select name="type_of_need" v-model="formData.typeOfNeed" class="form-control select select2-hidden-accessible">
<option value="" selected="selected">Select Option</option>
<option value="HEARING">HEARING</option>
<option value="DEAF">DEAF</option>
<option value="DUMB">DUMB</option>
<option value="DEAF AND DUMB">DEAF AND DUMB</option>
<option value="BLIND">BLIND</option>
<option value="ALBINISM">ALBINISM</option>
<option value="PHYSICAL">PHYSICAL</option>
<option value="DOWN SYNDROME">DOWN SYNDROME</option>
<option value="AUTISM">AUTISM</option>
<option value="MENTAL">MENTAL</option>
<option value="CEREBRAL PALSY">CEREBRAL PALSY</option>
<option value="INTELLECTUAL">INTELLECTUAL</option>
<option value="MOBILITY">MOBILITY</option>
<option value="SPEECH">SPEECH</option>
<option value="MULTIPLE">MULTIPLE</option>
<option value="EMOTIONAL">EMOTIONAL</option>
<option value="GIFTED AND TALENTED">GIFTED AND TALENTED</option>
                </select>
            </div>			
        </div>
        </div>
        </div>
    </div>
    <div class="text-center ">
        <button type="submit" class="proceed">Submit</button>	
        <button class="proceed" @click="proceedToInstitution" :disabled="!isFormValid">Continue</button>
        <button class="proceed" type="button" @click="clearFormData">Clear Data</button>       
    </div>
</form>
</template>

<script>
import HeaderPage from './headerPage.vue';
import infoPage from './infoPage.vue';
import buttonPage from './buttonPage.vue';

export default {
    name:'DetailsPage',
    components:{
        HeaderPage,
        infoPage,
        buttonPage
    },
    data(){
        return{
            formData:{
                firstName:"",
                lastName:"",
                dateOb:"",
                gender:"",
                parent:"",
                countyBirth:"",
                subCounty:"",
                ward:"",
                residence:"",
                idNo:"",
                phone:"",
                email:"",
                specialNeed:"",
                typeOfNeed:"",
            },
        };
    },
    methods:{
        onSubmit() {
            // Save form data to localStorage
            localStorage.setItem('formData', JSON.stringify(this.formData));
            
            // Optionally, you can provide feedback to the user
            alert('Form data saved successfully!');
        },
        clearFormData() {
            localStorage.removeItem('formData');
            this.formData = {
                firstName:"",
                lastName:"",
                dateOb:"",
                gender:"",
                parent:"",
                countyBirth:"",
                subCounty:"",
                ward:"",
                residence:"",
                idNo:"",
                phone:"",
                email:"",
                specialNeed:"",
                typeOfNeed:"",
            };

        },
        isFormValid() {
            const formData = this.formData; // Replace with your form data object
            // Add validation logic here, e.g., check if all required fields are filled
            return (
                formData.firstName &&
                formData.lastName &&
                formData.dateOb &&
                formData.gender &&
                formData.gender &&
                formData.parent &&
                formData.specialNeed &&
                formData.phone &&
                formData.idNo &&
                formData.residence &&
                formData.ward &&
                formData.subCounty &&
                formData.countyBirth 
            );
        },
        proceedToInstitution() {
            if (this.isFormValid()) {
                this.$router.push('/institution');
            } else {
            // Optionally, provide feedback to the user about the incomplete form
            alert('Please fill out all the required fields before proceeding.');
            }
        },
    },
    created() {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            this.formData = JSON.parse(savedData);
        }
    },
    
}
</script>
<style></style>