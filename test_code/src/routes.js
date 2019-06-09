import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from './components/HomePage'
import Comments from './components/Comments'
import Comment from './components/Comment'

import {store} from './store';


const routes = [
	{
    path: '',
    redirect: {name: 'HomePage'}
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/Comments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/Comments/:id',
    component: Comment
  }
];

export const router = new VueRouter({
	routes,
	store,
	mode: 'history'
});
