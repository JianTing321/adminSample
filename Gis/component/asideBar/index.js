const asideBar = Vue.extend({
  name: "asideBar",
  components: {},
  template: `    
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-auto h-screen" aria-label="Sidebar">
        <div class="flex h-full overflow-y-auto" style="box-shadow:.1rem 0 0.05rem rgba(10, 34, 52, .2)">
        <ul class="pl-0 space-y-2" style="background-color: #0a2234">
            <li v-for="(item , index) in navItem" :key="index">
                <button class="flex flex-col items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700" :title="item.title">             
                    <v-icon class="w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" color="white">{{item.icon}}</v-icon>   
                    <span class="text-xs text-white">{{item.title}}</span>              
                </button>
            </li>            
        </ul>        
        <div class="sidebarContent p-4 bg-gray-100 w-80">
            <section class="title border-b-2 border-gray-200 flex justify-between items-center pb-2 cursor-pointer">                   
                <v-icon class="w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" color="black" large>mdi-chevron-left</v-icon>   
                <span class="flex-1 font-semibold text-xl whitespace-nowrap pl-2">分類查詢</span>          
            </section>
            <v-expansion-panels accordion tile>
            <v-expansion-panel  :active-class="activeClass" v-for="(item,index) in listArr" :key="index" >
                <v-expansion-panel-header >
                   {{item.title}}
                </v-expansion-panel-header>
                <v-expansion-panel-content eager>
                    我是內容
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
        </div>
    </aside>    
    `,
  data() {
    return {
      edited: false,
      navItem: [
        { title: "搜尋結果", icon: "mdi-clipboard-list" },
        { title: "定位查詢", icon: "mdi-map-search" },
        { title: "分類查詢", icon: "mdi-filter" },
        { title: "使用分區", icon: "mdi-open-in-new" },
        { title: "圖資申領", icon: "mdi-image-multiple" },
      ],
      listArr: [
        { title: "都市計畫" },
        { title: "都市設計開發" },
        { title: "都市更新" },
        { title: "建築管理" },
      ],
    };
  },
  computed: {
    activeClass() {
      return this.edited ? "grey lighten-4" : "grey lighten-3";
    },
  },
});
