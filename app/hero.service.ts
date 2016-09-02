import {Injectable} from '@angular/core';
import {Hero} from './hero';
//import heroes mock data
import {HEROES} from './mock-heroes';
import { Logger } from './logger.service';
import { Headers, Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'app/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private logger: Logger, private http: Http) {

    }

    getHero(id: number): Promise<Hero> {
        //like linq expression
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    //Hero array as a return type
    getHeroes(): Promise<Hero[]> {

        return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    //get heroes with the lag time is 2 secs
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }
    //create heroes
    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    //save hero
    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise().then(() => hero).catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers }).toPromise().then(() => null).catch(this.handleError);
    }
}