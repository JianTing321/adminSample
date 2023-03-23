const vue = new Vue({
	el: '#app',
    vuetify: new Vuetify(),
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
	}
})


