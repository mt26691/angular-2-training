import {Injectable} from '@angular/core';
import {Hero} from './hero';
//import heroes mock data
import {HEROES} from './mock-heroes'

@Injectable()
export class HeroService {
    //Hero array as a return type
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    
    //get heroes with the lag time is 2 secs
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
}