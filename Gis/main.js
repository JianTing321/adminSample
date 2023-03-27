const mainPage = Vue.extend({
  name: "mainPage",
  components: {
    asideBar,
    mapArea,
    toolBar,
  },
  template: `
   <div>
      <asideBar></asideBar>
      <mapArea></mapArea>左側選單列更新
      <toolBar></toolBar>
   </div>
   `,
});
