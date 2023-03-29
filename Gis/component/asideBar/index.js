const asideBar = Vue.extend({
  name: "asideBar",
  components: {asideContext},
  template: `    
  <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-auto h-screen" aria-label="Sidebar">
      <div class="flex h-full overflow-y-auto shadow-[0.1rem_0_0.05rem_rgba(10,34,52,0.2)]">
        <ul class="pl-0 bg-[#0a2234] z-30 h-full w-auto">
            <li v-for="(item , index) in navItem" :key="index" v-on:click="asideClick(item)" :class="{'bg-sky-800':selected==item.title}">
                <button class="flex flex-col items-center p-3 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700" :title="item.title">             
                    <v-icon large class="pb-0.5 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" color="white">{{item.icon}}</v-icon>   
                    <span class="text-xs text-white text-lg">{{item.title}}</span>              
                </button>
            </li>            
        </ul>
        <asideContext :selected="selected" :showList="showList" @list-Off="asideBarListOff">
          <template v-slot:[dynamic_slot_name]>
          </template>
        </asideContext>
      </div>
  </aside>    
    `,
  data() {
    return {
      showList:true,
      selected:`分類查詢`,
      navItem: [
        { title: "搜尋結果", icon: "mdi-clipboard-list" },
        { title: "定位查詢", icon: "mdi-map-search" },
        { title: "分類查詢", icon: "mdi-filter" },
        { title: "使用分區", icon: "mdi-open-in-new" },
        { title: "圖資申領", icon: "mdi-image-multiple" },
      ],     
    };
  },
  methods:{   
    // 側邊欄(灰色ContentBox使用'<'打開)
    asideBarListOff(off) {
      return this.showList = off
    },    
    // 側邊按鈕切換個別內容
    asideClick(item){
      this.selected=item.title;
      this.showList=true
    }
  }, 
});
