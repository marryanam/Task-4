import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './components/pages/splash-page/splash-page.component';
import { PrPlayerCardComponent } from './components/--primitives/pr-player-card/pr-player-card.component';
import { PrSheetComponent } from './components/--primitives/pr-sheet/pr-sheet.component';
import { PrPlayerInfoComponent } from './components/--primitives/pr-player-info/pr-player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    PrPlayerCardComponent,
    PrSheetComponent,
    PrPlayerInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
