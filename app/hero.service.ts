import {Injectable} from '@angular/core';
import {Hero} from './hero';
//import heroes mock data
import {HEROES} from './mock-heroes';
import { Logger } from './logger.service';

@Injectable()
export class HeroService {
    constructor(private logger: Logger) {

    }

    //Hero array as a return type
    getHeroes(): Promise<Hero[]> {
        this.logger.log("Get heroes from server");
        return Promise.resolve(HEROES);
    }

    //get heroes with the lag time is 2 secs
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
}