const useToolBar = Pinia.defineStore('tools', {
    state() {
      return {
        toolItem: [{
          id: "layer",
          icon: "mdi-layers",
          title: "圖層套疊",
          description: "底圖、一般圖層檢索、套疊",
      },
      {
          id: "drawSearch",
          icon: "mdi-information-variant",
          title: "查詢工具",
          description: "依繪製圖形查詢資訊",
          popoverWidth: 250,
          children: [{
              id: "drawSearch-point",
              icon: "thumbtack",
              title: "點",
              description: "點",
          }, {
              id: "drawSearch-polyline",
              icon: "ruler-horizontal",
              title: "線",
              description: "線",
          }, {
              id: "drawSearch-polygon",
              icon: "chart-pie",
              title: "面",
              description: "面",
          }, {
              id: "drawSearch-rectangle",
              icon: "chart-pie",
              title: "矩形",
              description: "矩形",
          }],
          defaultActive: "drawSearch-point"
      },
      {
          id: "drawMeasure",
          icon: "mdi-ruler",
          title: "量測工具",
          description: "依繪製在地圖上的圖形進行量測",
          popoverWidth: 250,
          children: [{
              id: "drawMeasure-point",
              icon: "thumbtack",
              title: "點",
              description: "點",
          }, {
              id: "drawMeasure-polyline",
              icon: "ruler-horizontal",
              title: "線",
              description: "線",
          }, {
              id: "drawMeasure-polygon",
              icon: "chart-pie",
              title: "面",
              description: "面",
          }],
          defaultActive: "drawMeasure-point"
      },
      {
          id: "clear",
          icon: "mdi-eraser",
          title: "清除",
          description: "清除圖面上所有標記",
      },
      {
          id: "googleStreetViewSimple",
          icon: "mdi-google-street-view",
          title: "街景",
          description: "顯示GoogleMap街景點擊您想顯示街景的位置",
      },
      {
          id: "printer",
          icon: "mdi-printer",
          title: "列印",
          popoverWidth: 200,
          description: "匯出地圖資訊",
      },
      {
          id:"return",
          title: "返回", 
          icon: "mdi-keyboard-return" },
      { 
          id:"reset",
          title: "重設羅盤方向", 
          icon: "mdi-compass" },
      { 
          id:"zoomIn",
          title: "放大", 
          icon: "mdi-plus" },
      { 
          id:"zoomOut",
          title: "縮小", 
          icon: "mdi-minus"
      }]
      }
    },
    actions: {
      increment(state) {
        this.value++
      }
    }
})