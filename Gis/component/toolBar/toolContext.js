const toolContext = Vue.extend({
  name: "toolContext",
  components: {},
  props: ["title", "toolIndexFocus", "toolTitleFocus"],
  template: `  
<div> 
    <div class="toolContext">
      <slot v-if="toolIndexFocus==0" :name="toolTitleFocus">{{toolTitleFocus}}</slot>
      <slot v-if="toolIndexFocus==1" :name="toolTitleFocus">{{toolTitleFocus}}
       <keep-alive>
       
       </keep-alive>      
      </slot>
      <slot v-if="toolIndexFocus==2" :name="toolTitleFocus">{{toolTitleFocus}}</slot>
      <slot v-if="toolIndexFocus==3" :name="toolTitleFocus">{{toolTitleFocus}}</slot>
      <slot v-if="toolIndexFocus==4" :name="toolTitleFocus">{{toolTitleFocus}}</slot>
      <slot v-if="toolIndexFocus==5" :name="toolTitleFocus">{{toolTitleFocus}}</slot>
      <slot v-if="toolIndexFocus==6" :name="toolTitleFocus">{{toolTitleFocus}}</slot>

      
	</div>
</div>
    `,
  data() {
    return {
      dialog: false,
      toolInit: [],
    };
  },
  methods: {},
});
