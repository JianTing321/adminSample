const mapArea = Vue.extend({
name:'mapArea',
components:{
},
template:`
<div class="w-full h-screen relative">
    <iframe class="relative block z-10 border-0"
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58230.17052447968!2d120.63207761706552!3d24.193269160560998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1679290841457!5m2!1szh-TW!2stw"
        width="100%" height="100%" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div
        class="shadow absolute z-20 inset-0 pointer-events-none shadow-[inset_0px_-60px_50px_-20px_rgba(10,34,52,.9)]">
    </div>
    <div
        class="logo absolute z-30  inline-block  pointer-events-none bottom-3 left-20 h-12 mt-auto text-white text-justify">
        <h1 class="leading-7 text-xl drop-shadow-2xl tracking-wider"
            style="font-family: 'Noto Serif TC', serif; text-shadow: rgba(0, 0, 0, 1) 0 0 0.1rem">都市發展資訊整合平台</h1>
        <p class="text-sm font-extrabold after:inline-block after:w-full after:content-[''] px-1"
            style="text-shadow: rgba(0, 0, 0, 1) 0 0 0.1rem">新竹市政府都市發展處</p>
    </div>
</div>
`,
})