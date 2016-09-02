import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//angular will create application wide injector during the bootstrap process
platformBrowserDynamic().bootstrapModule(AppModule);