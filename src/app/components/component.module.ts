import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentRoutingModule, routingComponents } from './component-routing.module';
import { MaterialModule } from '../material.module';
import { WeddingComponent } from './wedding/wedding.component';
import { CorporateComponent } from './corporate/corporate.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentRoutingModule,
    MaterialModule,
    NgxHmCarouselModule
  ],
  declarations: [routingComponents, WeddingComponent, CorporateComponent, FooterComponent,
    AboutUsComponent, ContactUsComponent, ServicesComponent, PortfolioComponent]
})

export class ComponentModule {}

