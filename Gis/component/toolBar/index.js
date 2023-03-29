const toolBar = Vue.extend({
  name: "toolBar",
  components: { toolContext },
  template: `  
  <div class="inline-block rounded-lg bg-gray-900 shadow-lg absolute top-4 right-2 z-20">
    <div
        class="shadow-sm flex justify-center items-center py-1 bg-white rounded-t-md rounded-b-sm bg-gradient-to-r from-gray-200 via-white to-gray-200 cursor-move">        
        <v-icon class="h-0.5" size="10%">mdi-menu</v-icon>         
    </div>
    <div class="toolList p-1">
      <v-menu left :offset-x="offset" :close-on-content-click="false" v-model="menu" transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
              <div>
                  <v-btn icon v-for="(item , index) in toolItem" class="flex my-1 " :key="index" v-on="on" v-bind="attrs"
                      v-on:click="conditionSet(item) ">
                      <v-icon small :class="{'animate-pulse':getToolItem.title==item.title}" class="p-4 rounded-lg bg-gray-800 border-[#2a476b] border-y-2 hover:bg-gray-500 cursor-pointer bg-gradient-to-t from-gray-800 from-10% via-gray-600 via-50% to-gray-800 to-90% hover:from-gray-00 hover:via-gray-800 hover:to-gray-800" color="white" :title="item.title">
                      {{item.icon}}</v-icon>
                  </v-btn>
              </div>
          </template>
          <v-card>
              <v-list>
                  <v-list-item>
                      <v-list-item-content>
                          <toolContext :getToolItem="getToolItem">
                          </toolContext>
                      </v-list-item-content>
                      <v-list-item-action>
                          <v-btn icon>
                              <v-icon v-on:click="menu=false">mdi-close</v-icon>
                          </v-btn>
                      </v-list-item-action>
                  </v-list-item>
              </v-list>
              <v-divider></v-divider>        

              </v-list>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="menu = false">
                      取消
                  </v-btn>
                  <v-btn color="primary" text @click="menu = false">
                      確定
                  </v-btn>
              </v-card-actions>
          </v-card>
      </v-menu>
  </div>
</div>
    `,
  data() {
    return {
      color:'white',
      colorFor:'yellow',
      menu: false,
      toolIndexFocus: 0,
      getToolItem:"",
      toolTitleFocus: "",
      offset: true,
    };
  },
  methods: {
    conditionSet(item) {
      this.getToolItem = item
      // 取得當前索引
      this.toolIndexFocus = this.toolItem.indexOf(item);
      console.log(item);

      // this.$refs.toolBtn[this.toolIndexFocus].$el.classList.toggle("animate-bounce")
    }   
  },
  computed: {
    //掛載工具箱的icon
    ...Pinia.mapState(useToolBar, ['toolItem'])
  }  
});
