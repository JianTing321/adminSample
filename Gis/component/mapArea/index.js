const mapArea = Vue.extend({
    name:'mapArea',
    components:{
    },
    template:`  
    <div class="w-full h-screen relative">
        <iframe class="relative block z-10" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58230.17052447968!2d120.63207761706552!3d24.193269160560998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1679290841457!5m2!1szh-TW!2stw"
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="shadow absolute z-20 inset-0 pointer-events-none" style="box-shadow:inset 0px -30px  30px -10px rgba(10, 34, 52, .5);">
    </div>
        <div class="logo absolute z-30 inset-0 pointer-events-none bottom-0 left-0 h-16" style="margin-top:auto">
        <h1 class="text-2xl pl-10 font-black text-white drop-shadow-lg">都市發展整合平台</h1>
        </div>
    </div>
    `,
})


