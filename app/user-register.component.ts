import {Component} from '@angular/core'
import {Hero} from './hero'
import {HeroService} from './hero.service'
import {FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';

@Component({
    selector: 'hero-save',
    templateUrl: 'views/user-register.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class UserRegisterComponent {

    registrationForm: FormGroup;

    username: FormControl;

    email: FormControl;

    password: FormControl;

    submitAttempt: boolean = false;


    powers = ['Smart', 'Agility', 'Streng'];

    model = new Hero(1, '', this.powers[0], '');

    submitted = false;

    //inject hero service
    constructor(private heroService: HeroService, private formBuilder: FormBuilder) {
        this.username = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.required);
        this.password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)]));

        this.registrationForm = formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password
        });
    }

    onSubmit(formValue: FormGroup): void {
        debugger;
        this.submitAttempt = true;
        console.log(formValue);
    }

    get diagnostic() { return JSON.stringify(this.model); }

}