<template>
    <div class="row" style="border: .1px light black">
        <div class="col-md-6">
            
            <div class="card-header jalign-item-center" style="background-image: url('images/logo.png');background-position:center;background-repeat:no-repeat;height:50vh">
                
                <h4 class="text-center font-weight-bold">LOGIN HERE</h4>
            </div>
            </div>
            <div class="col-md-6" style="margin-top: 6vh">
            <div class="card-body">
                                                                <form method="POST" action="http://bursary-ms.vercel.app/login-custom">
                    <input type="hidden" name="_token" value="60afR5arglwKPBxJjJnmKF6CNneJnAbFwiu2Blyw">                <label class="font-weight-bold">Enter Email address :</label>
                <input type="text" name="email" class="form-control" id="" placeholder="example@admin.com" value="">
                                <label class="font-weight-bold">Enter Password :</label>
                <input type="password" name="password" class="form-control" id="" placeholder="********">
                                <input type="submit" class="btn btn-primary mt-2" value="LOGIN">
                </form>
                <div class="row justify-content-between">
                   
                   <a href="" data-toggle="modal" data-target="#Modal" class="mt-5">Forgot Password?</a>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
  name:'AdminLogin',
  components:{

  },
}
</script>