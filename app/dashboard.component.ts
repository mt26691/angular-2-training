import {Component} from '@angular/core'
import {Router } from '@angular/router'

import {Hero} from './hero'
import {HeroService} from './hero.service'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'views/dashboard.component.html',
    styleUrls: ['styles/dashboard.component.css']
})

export class DashboardComponent {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) {
        this.heroService.getHeroes().then(t => this.heroes = t);
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        console.log(link);
        this.router.navigate(link);
    }

}