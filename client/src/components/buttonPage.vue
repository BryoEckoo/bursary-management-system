<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-blue">
                    <router-link to="/details" class="router-link-y">Your Details</router-link>
                </button>
            </div>
            <div class="col">
                <button class="btn btn-blue">
                    <router-link to="/institution" class="router-link-y">Institution</router-link>
                </button>
            </div>
            <div class="col">
                <button class="btn btn-blue">
                    <router-link to="/fees" class="router-link-y">Fees</router-link>
                </button>
            </div>
            <div class="col">
                <button class="btn btn-blue">
                    <router-link to="/family" class="router-link-y">Family</router-link>
                </button>
            </div>
            <div class="col">
                <button class="btn btn-blue">
                    <router-link to="/uploads" class="router-link-y">Uploads</router-link>
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    name:'ButtonPage',
}
</script>

<style>
.router-link-y{
    color: white;
    text-decoration: none;
}
.router-link-b{
    color: black;
    text-decoration: none;
}
.btn-blue{
    background-color: #0c9ba8;
}
.btn-blue:hover{
    background-color: #0c9ba8;
    color: white; 
}
</style>