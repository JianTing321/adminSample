const toolBar = Vue.extend({
  name: "toolBar",
  components: {},
  template: `  
<div class="inline-block rounded-lg bg-gray-900 shadow-lg absolute top-4 right-2 z-20">
    <div
        class="shadow-sm flex justify-center items-center py-1 bg-white rounded-t-md rounded-b-sm bg-gradient-to-r from-gray-200 via-white to-gray-200 cursor-move">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.193 7" class="h-1.5">
            <path id="Line_1" data-name="Line 1"
                d="M8.193,1.5H0A1.5,1.5,0,0,1-1.5,0,1.5,1.5,0,0,1,0-1.5H8.193A1.5,1.5,0,0,1,9.693,0,1.5,1.5,0,0,1,8.193,1.5Z"
                transform="translate(1.5 1.5)" />
            <path id="Line_2" data-name="Line 2"
                d="M8.193,1.5H0A1.5,1.5,0,0,1-1.5,0,1.5,1.5,0,0,1,0-1.5H8.193A1.5,1.5,0,0,1,9.693,0,1.5,1.5,0,0,1,8.193,1.5Z"
                transform="translate(1.5 5.5)" />
        </svg>
    </div>
    <div class="toolList pl-0 p-0.5">   
        <!-- <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">                 
                <v-btn icon v-for="(item , index) in toolItem" class="flex">
                    <v-icon v-on="on" v-bind="attrs" class="w-10 h-10 p-3 m-0.5 rounded-lg bg-gray-800 border-[#243c5a] border-y-2 hover:bg-gray-500 cursor-pointer" color="white" 
                    :title="item.title">{{item.icon}}</v-icon>            
                </v-btn icon>
            </template>
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                </v-card-title>
                <v-card-text>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                    確定
                    </v-btn>
                </v-card-actions>
            </v-card>      
        </v-dialog>  -->
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">     
                <v-btn icon v-for="(item , index) in toolItem" class="flex">
                    <v-icon v-on="on" v-bind="attrs" class="w-10 h-10 p-3 m-0.5 rounded-lg bg-gray-800 border-[#243c5a] border-y-2 hover:bg-gray-500 cursor-pointer" color="white" 
                    :title="item.title">{{item.icon}}</v-icon>            
                </v-btn icon>
          </template>
            <v-card>             
                <toolContext :title="toolItem.title" >
                    <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
                    <a slot="footer" href="http://www.atguigu.com">更多美食</a>                    
                    <div slot="圖層套疊">
                </toolContext>
                <v-card-text>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                    確定
                    </v-btn>
                </v-card-actions>     
                  <div class="text-center">
                    <v-switch
                      v-model="closeOnClick"
                      label="Close on click"
                    ></v-switch>
                    <v-menu
                      top
                      :close-on-click="closeOnClick"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                        >
                          Dropdown
                        </v-btn>
                      </template>
                
                      <v-list>
                        <v-list-item
                          v-for="(item, index) in items"
                          :key="index"
                        >
                          <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>

            </v-card>
            <!-- <v-card>
                <div class="container">
                  <toolContext title="美食" >
                    <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
                    <a slot="footer" href="http://www.atguigu.com">更多美食</a>
                  </toolContext>

                  <toolContext title="游戏" >
                    <ul slot="center">
                      <li v-for="(g,index) in games" :key="index">{{g}}</li>
                    </ul>
                    <div class="foot" slot="footer">
                      <a href="http://www.atguigu.com">单机游戏</a>
                      <a href="http://www.atguigu.com">网络游戏</a>
                    </div>
                  </toolContext>

                  <toolContext title="电影">
                    <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
                    <template v-slot:footer>
                      <div class="foot">
                        <a href="http://www.atguigu.com">经典</a>
                        <a href="http://www.atguigu.com">热门</a>
                        <a href="http://www.atguigu.com">推荐</a>
                      </div>
                      <h4>欢迎前来观影</h4>
                    </template>
                  </toolContext>
                </div>
              </v-card> -->
        </v-dialog> 
   </div>
</div>
    `,
  data() {
    return {
      dialog: false,
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
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
});
