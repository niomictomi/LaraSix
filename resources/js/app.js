
require('./bootstrap');

window.Vue = require('vue');

Vue.component('add-post', require('./components/addPost.vue').default);
Vue.component('all-posts', require('./components/posts.vue').default);
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

const app = new Vue({
    el: '#app',
});
