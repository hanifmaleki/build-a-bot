import {
    createRouter,
    createWebHistory,
} from 'vue-router';

import PartInfo from '@/parts/PartInfo.vue';
import BrowseParts from '@/parts/BrowseParts.vue';
import RobotHeads from '@/parts/RobotHeads.vue';
import RobotArms from '@/parts/RobotArms.vue';
import RobotTorsos from '@/parts/RobotTorsos.vue';
import RobotBases from '@/parts/RobotBases.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import HomePage from '../home/HomePage.vue';
import SidebarStandard from '@/sidebar/SidebarStandard.vue';
import SidebarBuilder from '@/sidebar/SidebarBuilder.vue';
import ShoppingCart from '@/cart/ShoppingCart.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            sidebar: SidebarStandard,
        },
    }, {
        path: '/build',
        name: 'Build',
        components: {
            default: RobotBuilder,
            sidebar: SidebarBuilder,
        }
    },
    {
        path: '/parts/:partType/:id',
        name: 'Parts',
        component: PartInfo,
        props: true,
        beforeEnter(to, from, next) {
            const isValid = Number.isInteger(Number(to.params.id));
            next(isValid);
        },
    }, {
        path: '/cart',
        name: 'Cart',
        component: ShoppingCart,
    }, {
        path: '/parts/browse',
        name: 'BrowseParts',
        component: BrowseParts,
        children: [
            {
                name: 'BrowseHeads',
                path: '/heads',
                component: RobotHeads,
            }, {
                name: 'BrowseArms',
                path: '/arms',
                component: RobotArms,
            }, {
                name: 'BrowseBases',
                path: '/bases',
                component: RobotBases,
            }, {
                name: 'BrowseTorsos',
                path: '/torsos',
                component: RobotTorsos,
            },
        ],
    },
    ],
});
