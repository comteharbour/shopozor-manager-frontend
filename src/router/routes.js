import pages from './pages'

const links = Object.keys(pages).map(key => {
  return { path: pages[key].path, component: pages[key].component }
})

const routes = [
  {
    path: '/',
    component: () => import('layouts/szr-layout.vue'),
    children: links
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
