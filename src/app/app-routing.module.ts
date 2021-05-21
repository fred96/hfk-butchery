import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './about/about.component';                                           import { OurServicesComponent } from './our-services/our-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'contact-us', component: ContactUsComponent },
	{ path: 'our-services', component: OurServicesComponent },
	{ path: '**' , component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
