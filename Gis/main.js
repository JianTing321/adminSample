const mainPage = Vue.extend({
    name:'mainPage',
    components:{
      asideBar,
      mapArea,
      toolBar
    },
    template:`
   <div>
      <asideBar></asideBar>
      <mapArea></mapArea>
      <toolBar></toolBar>
   </div>
   `,
})