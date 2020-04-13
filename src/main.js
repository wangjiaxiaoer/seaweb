import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import "./assets/css/reset.css";
import "./assets/css/main.less";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // 检测路由配置中是否有requiresAuth这个meta属性
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 判断是否已登录
        if (store.getters.isLoggedIn) {
            next();
            return;
        }
        // 未登录则跳转到登录界面
        next('/login');
    } else {
        next()
    }
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')