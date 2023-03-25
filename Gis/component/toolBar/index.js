const toolBar = Vue.extend({
  name: "toolBar",
  components: { toolContext },
  template: `  
  <div class="inline-block rounded-lg bg-gray-900 shadow-lg absolute top-4 right-2 z-20">
    <div
        class="shadow-sm flex justify-center items-center py-1 bg-white rounded-t-md rounded-b-sm bg-gradient-to-r from-gray-200 via-white to-gray-200 cursor-move">
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.193 7" class="h-1.5">
            <path id="Line_1" data-name="Line 1"
                d="M8.193,1.5H0A1.5,1.5,0,0,1-1.5,0,1.5,1.5,0,0,1,0-1.5H8.193A1.5,1.5,0,0,1,9.693,0,1.5,1.5,0,0,1,8.193,1.5Z"
                transform="translate(1.5 1.5)" />
            <path id="Line_2" data-name="Line 2"
                d="M8.193,1.5H0A1.5,1.5,0,0,1-1.5,0,1.5,1.5,0,0,1,0-1.5H8.193A1.5,1.5,0,0,1,9.693,0,1.5,1.5,0,0,1,8.193,1.5Z"
                transform="translate(1.5 5.5)" />
        </svg> -->         
        <v-icon class="h-0.5" size="10%">mdi-menu</v-icon>         
    </div>
    <div class="toolList p-0.5 ">
      <v-menu left :offset-x="offset" :close-on-content-click="false" v-model="menu" transition="slide-x-transition">
          <template v-slot:activator="{ on, attrs }">
              <div>
                  <v-btn icon v-for="(item , index) in toolItem" class="flex" :key="index" v-on="on" v-bind="attrs"
                      v-on:click="conditionSet(item)">
                      <v-icon size="130%"
                          class="p-3.5 rounded-lg bg-gray-800 border-[#243c5a] border-y-2 hover:bg-gray-500 cursor-pointer"
                          color="white" :title="item.title">{{item.icon}}</v-icon>
                  </v-btn>
              </div>
          </template>
          <v-card>
              <v-list>
                  <v-list-item>
                      <v-list-item-content>
                          <toolContext :title="toolItem.title" :toolIndexFocus="toolIndexFocus"
                              :toolTitleFocus="toolTitleFocus">
                              <div :slot="toolItem.title"></div>
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
      menu: false,
      toolIndexFocus: 0,
      toolTitleFocus: "",
      offset: true,
      toolItem: [
        { title: "圖層套疊", icon: "mdi-layers" },
        { title: "查詢工具", icon: "mdi-information-variant" },
        { title: "尺標", icon: "mdi-ruler" },
        { title: "清除標記", icon: "mdi-eraser" },
        { title: "街景", icon: "mdi-google-street-view" },
        { title: "列印", icon: "mdi-printer" },
        { title: "定位", icon: "mdi-map-marker" },
        { title: "返回", icon: "mdi-keyboard-return" },
        { title: "重設羅盤方向", icon: "mdi-compass" },
        { title: "放大", icon: "mdi-plus" },
        { title: "縮小", icon: "mdi-minus" },
      ],      
    };
  },
  methods: {
    conditionSet(item) { 
    // 取得當前索引的標題 
      this.toolTitleFocus = item.title
    // 取得當前索引
      this.toolIndexFocus = this.toolItem.indexOf(item)    
    },

  },
});
