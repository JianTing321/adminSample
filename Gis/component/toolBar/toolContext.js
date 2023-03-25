const toolContext = Vue.extend({
  name: "toolContext",
  components: {},
  props: ["title", "toolIndexFocus", "toolTitleFocus"],
  template: `  
<div> 
    <div class="toolContext">
      <slot v-if="toolIndexFocus==0" :name="toolTitleFocus">{{toolTitleFocus}}</slot>      
      <slot v-if="toolIndexFocus==1" :name="toolTitleFocus">{{toolTitleFocus}}      
            <v-card-text>
                  <div>
                      依繪製圖形查詢資訊
                  </div>
                  <v-chip-group column multiple>
                      <v-chip filter outlined>
                          點
                      </v-chip>
                      <v-chip filter outlined>
                          線
                      </v-chip>
                      <v-chip filter outlined>
                          面
                      </v-chip>
                      <v-chip filter outlined>
                          矩形
                      </v-chip>
                  </v-chip-group>
              </v-card-text>           
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
    return {};
  },
  methods: {},
});
