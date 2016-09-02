/*when we need some thing, we import it*/
import { Component } from '@angular/core';


//meta data tells angular how to create this Component
@Component({
    selector: 'my-app',
    template: ` 
                <h1>{{title}}</h1>
                <nav>
                    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                </nav>
                <router-outlet></router-outlet>
                `,
    styleUrls: ['styles/app.component.css']

})

export class AppComponent {
    title = "this is the app title";
}