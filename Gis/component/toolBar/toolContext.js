const toolContext = Vue.extend({
  name: "toolContext",
  components: {},
  props: ["title"],
  template: `  
<div> 
    <div class="toolContext">
      <h3>{{title}}分类</h3>
      <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
      <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
      <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
      <slot name="圖層套疊">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
	</div>
</div>
    `,
  data() {
    return {
      dialog: false,
      toolInit: [],
    };
  },
});
