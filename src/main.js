import {createRouter, createWebHistory} from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';

import Home from '@/components/routed/home';
    import BikeElectric from '@/components/routed/bicycles/bike_electric';
    import BikeCity from '@/components/routed/bicycles/bike_city';
    import BikeSport from '@/components/routed/bicycles/bike_sport';
    import BikeCompany from '@/components/routed/bicycles/bike_company';
import Lease from '@/components/routed/lease';
import BicycleCarrier from '@/components/routed/accessories/bicycle_carrier';
import Maintenance from '@/components/routed/maintenance_repair';
import Rental from '@/components/routed/rental';
import About from '@/components/routed/about';
import Info from '@/components/routed/info';
import JobOffer from '@/components/routed/job_offer';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
        {
            path: '/fietsen/elektrisch',
            name: 'Bike_electric',
            component: BikeElectric
        },
        {
            path: '/fietsen/stad',
            name: 'Bike_city',
            component: BikeCity
        },
        {
            path: '/fietsen/sportief',
            name: 'Bike_sport',
            component: BikeSport
        },
        {
            path: '/fietsen/bedrijfs-gerelateerd',
            name: 'Bike_company',
            component: BikeCompany
        },
    {
        path: '/lease',
        name: 'Lease',
        component: Lease
    },
    {
        path: '/accessoires/fietsendragers',
        name: 'Accessories_bicycle_carrier',
        component: BicycleCarrier
    },
    {
        path: '/onderhoud_en_reparatie',
        name: 'Maintenance',
        component: Maintenance
    },
    {
        path: '/verhuur',
        name: 'Rental',
        component: Rental
    },
    {
        path: '/over',
        name: 'About',
        component: About
    },
    {
        path: '/contact',
        name: 'Info',
        component: Info
    },
    {
        path: '/vacatures',
        name: 'Job Offer',
        component: JobOffer
    },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const app = createApp(App);
app.use(router);
app.mount('#app');