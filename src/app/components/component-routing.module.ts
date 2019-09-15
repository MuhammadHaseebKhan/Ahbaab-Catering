import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { WeddingComponent } from './wedding/wedding.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'weddings', component: WeddingComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ComponentRoutingModule {}
export const routingComponents = [HomeComponent, ServicesComponent];

