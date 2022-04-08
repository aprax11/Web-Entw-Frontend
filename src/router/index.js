import {createRouter, createWebHistory} from 'vue-router'
import Manipulate from '../views/Manipulate'


const routes = [
    {
        path: '/manipulate',
        name: 'Manipulate',
        component: Manipulate
    },
]

const router = createRouter( {
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router