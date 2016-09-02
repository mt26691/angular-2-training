import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router'
import {Hero} from './hero'
import {HeroService} from './hero.service'

@Component({
    selector: "my-hero-detail",
    templateUrl: "views/hero-detail.component.html",
    styleUrls: ['styles/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero

    //implement OnInit interface
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            //because params['id'] is string we use + to covert it to number
            let id = +params['id'];
            this.heroService.getHero(id).then(t => this.hero = t);
        });
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.heroService.update(this.hero).then(this.goBack);
    }
    //constructor with hero service and ActivatedRoute route
    constructor(private heroService: HeroService, private route: ActivatedRoute) {

    }

}