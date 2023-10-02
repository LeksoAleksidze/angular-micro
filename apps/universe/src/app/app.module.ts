import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {appRoutes} from "./app.routes";
import {RemoteEntryModule} from "../../../sakura/src/app/remote-entry/entry.module";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
        RemoteEntryModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
