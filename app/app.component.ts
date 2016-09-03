/*when we need some thing, we import it*/
import { Component } from '@angular/core';


//meta data tells angular how to create this Component
@Component({
    selector: 'my-app',
    template: ` <div class="container">
                    <h1>{{title}}</h1>
                    <nav>
                        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                        <a routerLink="/create" routerLinkActive="active">Create Hero</a>
                        <a routerLink="/register" routerLinkActive="active">Register user</a>
                    </nav>
                    <router-outlet></router-outlet>
                </div>
                `,
    styleUrls: ['styles/app.component.css']

})

export class AppComponent {
    title = "this is the app title";
}