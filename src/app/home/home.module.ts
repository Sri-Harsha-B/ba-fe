import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NgbdCarouselConfigComponent } from './landing/components/ngbd-carousel-config/ngbd-carousel-config.component';
import { SharedModule } from '../shared/shared.module';
import { MissionComponent } from './mission/mission.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { MatIconModule } from '@angular/material/icon';
import { OurStoryComponent } from './our-story/our-story.component';
import { ScremerComponent } from './scremer/scremer.component';

@NgModule({
  declarations: [
    LandingComponent,
    NgbdCarouselConfigComponent,
    MissionComponent,
    AboutUsComponent,
    ContactUsComponent,
    PrivacyComponent,
    TermsComponent,
    ScremerComponent,

    OurStoryComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MatIconModule],
})
export class HomeModule {}
