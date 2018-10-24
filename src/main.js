import Vue from 'vue'
import AppComponent from './components/app.component';
import store from './store';
import _ from 'lodash';
import './filters';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

let meuVue = new Vue({
  el: '#app',
  components: {
    'app':AppComponent
  },
  store
});
