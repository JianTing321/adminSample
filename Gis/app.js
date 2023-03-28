Vue.use(Pinia.PiniaVuePlugin)
const vue = new Vue({
	el: '#app',
    vuetify: new Vuetify(),
    pinia: Pinia.createPinia(),
	components: {
        mainPage,
	},
    template:`
    <v-app>
        <mainPage></mainPage>
    </v-app>
    `,
	data() {
		return {			
		}
	},
    computed: {
        ...Pinia.mapState(useCounterStore, ['value'])
    },
    methods: {
        ...Pinia.mapActions(useCounterStore, ['increment'])
    },
})


