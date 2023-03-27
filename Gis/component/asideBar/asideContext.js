const asideContext = Vue.extend({
  name: "asideContext",
  components: {},
  props:['selected','showList'],
  template: `
  <div class="sidebarContent p-4 bg-gray-100 w-80" v-if="showList">
  <section class="title border-b-2 border-gray-200 flex justify-between items-center pb-2 cursor-pointer">                   
      <v-icon class="w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" color="black" large @click="showList=false">mdi-chevron-left</v-icon>   
      <span class="flex-1 font-semibold text-xl whitespace-nowrap pl-2">{{selected}}</span>          
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
    `,
  data() {
    return {
      edited: false,      
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
