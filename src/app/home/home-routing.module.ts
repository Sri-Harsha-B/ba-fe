import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MissionComponent } from './mission/mission.component';
import { LandingComponent } from './landing/landing.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ScremerComponent } from './scremer/scremer.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'mission',
    component: MissionComponent,
  },
  {
    path: 'our-story',
    component: OurStoryComponent,
  },
  {
    path: 'scremer',
    component: ScremerComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
