/*when we need some thing, we import it*/
import { Component } from '@angular/core';
import {Hero} from './hero'
import {HeroService} from './hero.service'
import {Router} from '@angular/router'
//meta data tells angular how to create this Component
@Component({
  selector: 'my-heroes',
  templateUrl: 'views/heroes.component.html',
  styleUrls: ['styles/hero.components.css']
})

//one way data binding
export class HeroesComponent {
  //method constructor
  //heroService is also the private field for this class
  constructor(private heroService: HeroService, private router: Router) {
    this.getHeroes();
  }

  title = "tour of heroes";

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().then(t => this.heroes = t);
  };

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.create(name).then(hero => { this.heroes.push(hero); this.selectedHero = null });

  }

  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }
}