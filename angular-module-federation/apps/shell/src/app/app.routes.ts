import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },

    // Your route here:

    {
      path: 'flights',
      loadChildren: () => loadRemoteModule({
          remoteEntry: URL,
          remoteName: 'mfe1',
          exposedModule: './Module'
        })
        .then(m => m.FlightsModule) 
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];