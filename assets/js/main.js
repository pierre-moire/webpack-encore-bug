import Vue from 'vue';

import Hello from "../components/Hello.vue"

Vue.use(Vuex);

new Vue({
	el: 'body',
	components: {
		Hello
	}
});