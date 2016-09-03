import { ModuleWithProviders } from '@angular/core'
import {Routes, RouterModule  }  from '@angular/router'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent} from './dashboard.component'
import {HeroDetailComponent} from './hero-detail.component'
import {HeroSaveComponent} from './hero-save.component'
import {UserRegisterComponent} from './user-register.component'

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    //the colon in the path indicates that :id is a place holder to be filled
    //with a specific hero id
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'create',
        component: HeroSaveComponent
    },
    {
        path: 'update/:id',
        component: HeroSaveComponent
    },
    {
        path: 'register',
        component: UserRegisterComponent
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);