import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataviewerComponent } from './dataviewer/dataviewer.component';
import { ArtistComponent } from './artist/artist.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { DocumentationComponent } from './documentation/documentation.component';


@NgModule({
  declarations: [
    AppComponent,
    DataviewerComponent,
    ArtistComponent,
    WelcomeComponent,
    AlgorithmComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
