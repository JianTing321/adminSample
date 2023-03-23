const asideBar = Vue.extend({
  name: "asideBar",
  components: {},
  template: `    
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-auto h-screen" aria-label="Sidebar">
        <div class="flex h-full overflow-y-auto" style="box-shadow:.1rem 0 0.05rem rgba(10, 34, 52, .2)">
        <ul class="pl-0 space-y-2" style="background-color: #0a2234">
            <li>
                <button class="flex flex-col items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">             
                    <v-icon class="w-8 h-8 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" color="white">mdi-clipboard-list</v-icon>   
                    <span class="text-xs text-white">搜尋結果</span>              
                </button>



                <a href=" #"
                    class="flex flex-col items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                    class="w-8 h-8 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="text-xs text-white">定位查詢</span>
                </a>
            </li>
            <li>
                <a href="#"
                    class="flex flex-col items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700 active:bg-violet-700">
                    <svg aria-hidden="true"
                    class="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                    </path>
                    </svg>
                    <span class="flex-1 text-xs text-xspace-nowrap text-white">分類查詢</span>
                </a>
            </li>
            <li>
                <a href="#"
                    class="flex flex-col items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                    class="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                    </path>
                    <path
                        d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                    </path>
                    </svg>
                    <span class="flex-1 text-xs whitespace-nowrap text-white">使用分區</span>
                </a>
            </li>
            <li>
                <a href="#"
                    class="flex flex-col items-center p-2 text-base font-normal text-white dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
                    <svg aria-hidden="true"
                    class="flex-shrink-0 w-8 h-8 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span class="flex-1 text-xs whitespace-nowrap text-white">圖資申領</span>
                </a>
            </li>
        </ul>
        <div class="sidebarContent p-4 bg-gray-100 w-80">
            <section class="title border-b-2 border-gray-200 flex justify-between items-center pb-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="7.832" height="14.5" viewBox="0 0 7.832 14.5">
                    <path id="Vector_2_Stroke_" data-name="Vector 2 (Stroke)"
                    d="M8.176.763a1,1,0,0,1,.061,1.413l-4.9,5.351,4.931,5.828a1,1,0,1,1-1.527,1.292L.668,7.474,6.763.824A1,1,0,0,1,8.176.763Z"
                    transform="translate(-0.668 -0.5)" fill-rule="evenodd" />
                </svg>
                <span class="flex-1 font-semibold text-xl whitespace-nowrap pl-2">分類查詢</span>
            </section>
            <section>
                <ul class="pl-0 text-base font-semibold flex items-center justify-between py-2 cursor-pointer">都市計畫
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.5" height="7.832" viewBox="0 0 14.5 7.832"
                    class="pl-1">
                    <path id="Vector_2_Stroke_" data-name="Vector 2 (Stroke)"
                        d="M8.176.763a1,1,0,0,1,.061,1.413l-4.9,5.351,4.931,5.828a1,1,0,1,1-1.527,1.292L.668,7.474,6.763.824A1,1,0,0,1,8.176.763Z"
                        transform="translate(-0.5 8.5) rotate(-90)" fill-rule="evenodd" />
                    </svg>
                </ul>
                <ul class="pl-0 text-base  font-semibold flex items-center justify-between py-2 cursor-pointer">都市設計開發
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.5" height="7.832" viewBox="0 0 14.5 7.832"
                    class="pl-1">
                    <path id="Vector_2_Stroke_" data-name="Vector 2 (Stroke)"
                        d="M8.176.763a1,1,0,0,1,.061,1.413l-4.9,5.351,4.931,5.828a1,1,0,1,1-1.527,1.292L.668,7.474,6.763.824A1,1,0,0,1,8.176.763Z"
                        transform="translate(-0.5 8.5) rotate(-90)" fill-rule="evenodd" />
                    </svg>
                </ul>
                <ul class="pl-0 text-base  font-semibold flex items-center justify-between py-2 cursor-pointer">都市更新
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.5" height="7.832" viewBox="0 0 14.5 7.832"
                    class="pl-1">
                    <path id="Vector_2_Stroke_" data-name="Vector 2 (Stroke)"
                        d="M8.176.763a1,1,0,0,1,.061,1.413l-4.9,5.351,4.931,5.828a1,1,0,1,1-1.527,1.292L.668,7.474,6.763.824A1,1,0,0,1,8.176.763Z"
                        transform="translate(-0.5 8.5) rotate(-90)" fill-rule="evenodd" />
                    </svg>
                </ul>
                <ul class="pl-0 text-base  font-semibold flex items-center justify-between py-2 cursor-pointer">建築管理
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.5" height="7.832" viewBox="0 0 14.5 7.832"
                    class="pl-1">
                    <path id="Vector_2_Stroke_" data-name="Vector 2 (Stroke)"
                        d="M8.176.763a1,1,0,0,1,.061,1.413l-4.9,5.351,4.931,5.828a1,1,0,1,1-1.527,1.292L.668,7.474,6.763.824A1,1,0,0,1,8.176.763Z"
                        transform="translate(-0.5 8.5) rotate(-90)" fill-rule="evenodd" />
                    </svg>
                </ul>
            </section>
        </div>
        </div>
    </aside>    
    `,
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Users", icon: "mdi-account-group-outline" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      mini: true,
    };
  },
});
