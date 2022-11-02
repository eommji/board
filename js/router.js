var router = new VueRouter({
  routes: [{
      path: '/',
      component: httpVueLoader('components/main/main.vue')
    },
    {
      path: '/board_main',
      component: httpVueLoader('components/board/board_main.vue')
    },
    {
      path: '/board_read',
      component: httpVueLoader('components/board/board_read.vue')
    },
    {
      path: '/board_modify',
      component: httpVueLoader('components/board/board_modify.vue')
    },
    {
      path: '/board_delete',
      beforeEnter(to, from, next) {
        alert('삭제되었습니다.');
        next('/board_main');
      }
    },
    {
      path: '/board_write',
      component: httpVueLoader('components/board/board_write.vue'),
    },
    {
      path: '/login',
      component: httpVueLoader('components/user/login.vue')
    },
    {
      path: '/join',
      component: httpVueLoader('components/user/join.vue')
    },
    {
      path: '/user_modify',
      component: httpVueLoader('components/user/user_modify.vue')
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        alert('로그아웃 되었습니다.')
        next('/')
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
    }
  }
})