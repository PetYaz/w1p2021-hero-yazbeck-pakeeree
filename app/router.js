import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Rules from './components/Rules.vue';
import game from './components/Game.vue';
import Win from './components/Win.vue';
import Lose from './components/Lose.vue';
import Characters from './components/Characters.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Rules',
      name: 'Rules',
      component: Rules,
    },
    {
      path: '/Game/:id',
      name: 'Game',
      component: game,
    },

    {
      path: '/Characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/Win',
      name: 'win',
      component: Win
    },
    {
      path: '/lose',
      name: 'lose',
      component: Lose
    },
    {
      path: '/rules',
      name: 'rules',
      component: Rules
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
