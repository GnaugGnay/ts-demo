import Vue from 'vue';
import ajax from './ajax';

Vue.prototype.$ajax = ajax;

// 通过ts编译
declare module 'vue/types/vue' {
    interface Vue {
        $ajax: Function
    }
}