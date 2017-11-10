import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InjectablesComponent } from './injectables/injectables.component';
import { YoutTubeSearchComponent } from './yout-tube-search/yout-tube-search.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InjectablesComponent,
    YoutTubeSearchComponent,
    YouTubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
