const toolContext = Vue.extend({
  name: "toolContext",
  components: {},
  props: ["getToolItem"],
  template: `  
<div> 
    <div class="toolContext">   
      <slot name="header">{{getToolItem.title}}              
      </slot>
      <slot name="body">
        <v-card-text>
                <div>
                {{getToolItem.description}}
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
	</div>
</div>
    `,
  data() {
    return {};
  },
  methods: {},
  computed:{
  }
});
