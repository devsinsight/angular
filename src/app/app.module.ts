import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRouterModule, routableComponents } from './app-router.module';
import { CharactersModule } from './characters/characters.module'
import { CommonService } from './core/services/common.service';


@NgModule({
  declarations: [
    AppComponent,
    routableComponents
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule,
    CharactersModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
