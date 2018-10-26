import Vue from 'vue'
import Router from 'vue-router'
import table from '@/components/table'
import pagination from '@/components/pagination'
import menu from '@/components/menu'
import  form from '@/components/form'
import breadcrumb from '@/components/breadcrumb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/pagination',
      name: 'pagination',
      component:pagination
    },
    {
      path: '/menu',
      name: 'menu',
      component:menu
    },
    {
      path: '/form',
      name: 'form',
      component:form
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component:breadcrumb
    }
  ]
})
