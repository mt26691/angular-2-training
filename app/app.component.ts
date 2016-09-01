/*when we need some thing, we import it*/
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}
const HEROES: Hero[] = [
    { id: 1, name: 'Darknight' },
    { id: 2, name: 'Joker' },
    { id: 3, name: 'Supermen' },
    { id: 4, name: 'Iron Men' },
    { id: 5, name: 'Spidermen' },
    { id: 6, name: 'Songoku' },
    { id: 7, name: 'Vegeta' },
    { id: 8, name: 'Songohan' },
    { id: 9, name: 'Android 17' },
    { id: 10, name: 'Android 18' }
]

//meta data tells angular how to create this Component
@Component({
    selector: 'my-app',
    template: ` 
                <h1>{{title}}</h1>
                <h2>My Heroes</h2>
                <ul class="heroes">
                    <li *ngFor="let hero of heroes"
                        [class.selected] = "hero === selectedHero"
                        (click)="onSelect(hero)">
                        <!-- each hero goes here -->
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                    </li>
                </ul>
                  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
                `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
})

//one way data binding
export class AppComponent {
    title = "tour of heroes";
    // hero: Hero = {
    //     id: 1,
    //     name: "windstorm",
    // };
    heroes = HEROES;
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}