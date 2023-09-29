import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'viking',
    loadChildren: () =>
      loadRemoteModule('viking', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'master',
    loadChildren: () =>
      loadRemoteModule('master', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'sakura',
    loadChildren: () =>
      loadRemoteModule('sakura', './Module').then((m) => m.RemoteEntryModule),
  },
];
