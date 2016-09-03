import {Component} from '@angular/core'
import {Hero} from './hero'
import {HeroService} from './hero.service'

@Component({
    selector: 'hero-save',
    templateUrl: 'views/hero-save.component.html',
    styleUrls: ['styles/hero-save.component.css'],
})

export class HeroSaveComponent {

    powers = ['Smart', 'Agility', 'Streng'];

    model = new Hero(1, '', this.powers[0], '');

    submitted = false;

    active = true;


    //inject hero service
    constructor(private heroService: HeroService) {
        this.model = new Hero(1, '', this.powers[0], '');
        this.active = false;
        setTimeout(() => this.active = true, (0));
    }

    onSubmit(): void {
        this.submitted = true;
    }

    get diagnostic() { return JSON.stringify(this.model); }

}