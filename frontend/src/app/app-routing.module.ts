import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataviewerComponent } from './dataviewer/dataviewer.component';
import { ArtistComponent } from './artist/artist.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { AlgorithmComponent } from './algorithm/algorithm.component'
import { DocumentationComponent } from './documentation/documentation.component';


const routes: Routes = [
  { path: 'DataViewer', component: DataviewerComponent},
  { path: 'ArtistViewer', component: ArtistComponent},
  { path: 'Algorithm', component: AlgorithmComponent},
  { path : 'Documents', component: DocumentationComponent},
  { path: '' , component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
