import {Injectable} from '@angular/core';
import {Logger} from './logger.service';

@Injectable()
export class BetterLogger extends Logger {
    constructor() {
        super();
    }

    //override
    log(message: string) {
        let name = "this is the better logger";
        console.log(name);
        super.log(message);
    }
}