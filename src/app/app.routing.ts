// modules
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent }        from './components/home/home.component';
import { ContactComponent }     from './components/contact/contact.component';

// define routes
const appRoutes: Routes = [
  // home route
  { path: '', component: HomeComponent },
  // contact route
  { path: 'contact', component: ContactComponent }
];

// export configured router module
export const ConfiguredRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);