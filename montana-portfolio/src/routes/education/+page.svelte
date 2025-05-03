<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';

    onMount(() => {
        console.log("Education Page Loaded");
    })
</script>

<div class="page-bg"></div>

<div class="details">
    <div class="education">
        <img src="{base}/education-title.png" alt="education" width="500" height="60">
    </div>
</div>

<div class="box">
    <h4>2018-2023</h4>
    <p> Loreto Secondary School, Kilkenny</p>
    <h4>2023- PRESENT</h4>
    <p> BSc (Hons) Computing in Interactive Digital Art and Design, SETU Carlow</p>
</div>

<div class="details2">
    <div class="volunteering">
        <img src="{base}/volunteering.png" alt="volunteering" width="500" height="60">
    </div>
</div>

<div class="box2">
    <h4>2024</h4>
    <p> Kilkenny Animated</p>
    <h4>2025</h4>
    <p> Dingle Animation Festival</p>
</div>

<div class="parallax parallax--fast"></div>

<style>
    h4 {
        font-size: 25px;
        text-align: left;
        font-family: Candara;
    }

    p {
        font-size: 20px;
        text-align: left;
        color: rgb(150, 28, 69);
        font-family: Candara;
    }

    .details,
    .details2 {
        position: fixed;
        top: 55%;
        width: 550px;
        height: 400px;
        background-color: rgb(150, 28, 69);
        border-radius: 25px;
        padding: 40px;
        transform: translateY(-50%);
    }

    .details {
        margin-left: 10%;
    }

    .details2 {
        margin-left: 55%;
    }

    .box,
    .box2 {
        position: fixed;
        top: 60%;
        width: 450px;
        height: 250px;
        background-color: rgb(250, 241, 244);
        border-radius: 25px;
        padding: 20px;
        transform: translateY(-50%);
    }

    .box {
        margin-left: 14%;
    }

    .box2 {
        margin-left: 59%;
    }

    .education,
    .volunteering {
        width: 60%;
        position: fixed;
        top: 15%;
        left: 45%;
        transform: translateX(-55%); 
    }

    .page-bg {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgb(255, 248, 246);
        z-index: -1;
    }

    .parallax {
        position: fixed;
        inset: 0;
        pointer-events: none;
        background: url('/sparkle.png') repeat;
        animation: slide 60s linear infinite;
        opacity: .15;
        z-index: -1;
    }

    .parallax--fast {
        animation-duration: 30s;
        opacity: .25;
    }

    @keyframes slide {
        from { background-position: 0 0; }
        to { background-position: -2048px 0; }
    }

    
    @media (max-width: 768px) {

        .details, .details2, .box, .box2 {
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 90%; 
            top: 0;
            transform: none;
            height: auto;
            padding: 20px;
            margin-bottom: 30px; 
        }

        .education, .volunteering {
            position: relative;
            width: 80%; 
            left: 1%; 
            transform: none; 
        }

        h4 {
            font-size: 20px;
        }

        p {
            font-size: 18px;
        }

        .parallax {
            opacity: .1;
        }
    }

</style>