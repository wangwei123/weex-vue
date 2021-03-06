
/**
 * @author walid
 * @date 2016/03/20
 * @description 程序入口启动配置
 */

const App = require("../../components/wx-tab.vue")

// 全局注册组件
Vue.component('wx-button', require("components/wx-button"))
Vue.component('wx-countdown', require("components/wx-countdown"))
Vue.component('wx-hn', require("components/wx-hn"))
Vue.component('wx-list-item', require("components/wx-list-item"))
Vue.component('wx-marquee', require("components/wx-marquee"))
Vue.component('wx-navbar', require("components/wx-navbar"))
Vue.component('wx-navpage', require("components/wx-navpage"))
Vue.component('wx-panel', require("components/wx-panel"))
Vue.component('wx-tabbar', require("components/wx-tabbar"))
Vue.component('wx-tabitem', require("components/wx-tabitem"))
Vue.component('wx-tip', require("components/wx-tip"))
Vue.component('wx-tab', require("components/wx-tab"))
Vue.component('wx-tab-item', require("components/wx-tab-item"))

App.el = '#root'
new Vue(App)
