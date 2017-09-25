// modules
import { NgModule }                                   from '@angular/core';
import { BrowserModule }                              from '@angular/platform-browser';
import { HttpModule }                                 from '@angular/http';
import { FormsModule }                                from '@angular/forms';
import { ConfiguredRouterModule }                     from './app.routing';

// components
import { AppComponent }                               from './app.component';
import { NavbarComponent }                            from './components/navbar/navbar.component';
import { HomeComponent }                              from './components/home/home.component';
import { ContactComponent }                           from './components/contact/contact.component';
import { AngularRouterProjectComponent }              from './components/angular-router-project/angular-router-project.component';
import { AngularTemplateDrivenFormsProjectComponent } from './components/angular-template-driven-forms-project/angular-template-driven-forms-project.component';
import { GithubProjectComponent }                     from './components/github-project/github-project.component';
import { QuestionsProjectComponent }                  from './components/questions-project/questions-project.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpModule, FormsModule, ConfiguredRouterModule ],
  // compoennts
  declarations: [ AppComponent, NavbarComponent, HomeComponent, ContactComponent, AngularRouterProjectComponent, AngularTemplateDrivenFormsProjectComponent, GithubProjectComponent, QuestionsProjectComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}