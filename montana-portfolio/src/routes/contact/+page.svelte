<script>
    import { onMount } from 'svelte';

    onMount(() => {
        console.log("Contact Page Loaded");
    })
</script>


<div class="page-bg"></div>
<div class="contact"><img src="contact-title.png" alt="contact" width="500" height="60" ></div>

<div class="details"><br>
    <div class="instagram"><img src="instagram.png" alt="insta" width="40" height="40"></div>
    <b> ADDRESS: </b>
   
    <div class="call"><img src="call.png" alt="call" width="40" height="40"></div>
    <b> PHONE: </b>
    
    <div class="mail"><img src="mail.png" alt="mail" width="40" height="40"></div>
    <b> EMAIL: </b>

    <div class="linkedin"><img src="linkedin.png" alt="linkedin" width="40" height="40"></div>
    <b> ADDRESS: </b>
    <br>
    </div>
   
<style>

    .contact {
    width: 60%;
    position: fixed;
    top: 15%;
    margin-left: 20%;
    transform: translateY(-50%);
}

.details {
    position: fixed;
    top: 55%;
    margin-left: 50%;
    transform: translateY(-50%);
    width: 500px; 
    height: 350px;
    background-color: rgb(150, 28, 69);
    border: 5px solid #ffffff;
    border-radius: 4px;
    padding: 40px;
    border-radius: 25px;

}

b{  
    font-size: 20px;
    top: 50%;
    margin-left: 50%;
}


.page-bg{ 
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(255, 248, 246);
    z-index: -1; 
}
</style>