import Vue from 'vue';
import ajax from './ajax';

Vue.prototype.$ajax = ajax;

// Vue原型链方法
declare module 'vue/types/vue' {
    interface Vue {
        $ajax: Function,
    }
}