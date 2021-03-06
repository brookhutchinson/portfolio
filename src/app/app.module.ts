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
import { ActorsProjectComponent }                     from './components/actors-project/actors-project.component';
import { AngularTemplateDrivenFormsProjectComponent } from './components/angular-template-driven-forms-project/angular-template-driven-forms-project.component';
import { ApmProjectComponent }                        from './components/apm-project/apm-project.component';
import { QuestionsProjectComponent }                  from './components/questions-project/questions-project.component';
import { FirebaseNosqlDatabaseProjectComponent }      from './components/firebase-nosql-database-project/firebase-nosql-database-project.component';
import { FirebaseAuthenticationProjectComponent }     from './components/firebase-authentication-project/firebase-authentication-project.component';
import { SignInLandingPageProjectComponent }          from './components/sign-in-landing-page-project/sign-in-landing-page-project.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpModule, FormsModule, ConfiguredRouterModule ],
  // compoennts
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, ContactComponent,
    ActorsProjectComponent,
    AngularTemplateDrivenFormsProjectComponent,
    ApmProjectComponent,
    QuestionsProjectComponent,
    FirebaseNosqlDatabaseProjectComponent,
    FirebaseAuthenticationProjectComponent,
    SignInLandingPageProjectComponent
  ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}