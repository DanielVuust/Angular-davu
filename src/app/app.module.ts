import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeometryComponent } from './components/geometry/geometry.component';
import { SidekammeratComponent } from './components/sidekammerat/sidekammerat.component';
import { FormsModule } from '@angular/forms';
import { SidekammeratImageComponent } from './components/sidekammerat/sidekammerat-image/sidekammerat-image.component';
import { SidekammeratDescriptionComponent } from './components/sidekammerat/sidekammerat-description/sidekammerat-description.component';
import { FigureDisplayerComponent } from './components/geometry/figure-displayer/figure-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    GeometryComponent,
    SidekammeratComponent,
    SidekammeratImageComponent,
    SidekammeratDescriptionComponent,
    FigureDisplayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
