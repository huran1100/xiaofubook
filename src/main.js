import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,NavBar,Icon,Toast,Field,CellGroup,NumberKeyboard,Uploader,Cell,DatetimePicker,
    Popup} from 'vant';

Vue.use(Button);
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Cell);
Vue.use(CellGroup );
Vue.use(NumberKeyboard);
Vue.use(Uploader);
Vue.use(DatetimePicker);
Vue.use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
