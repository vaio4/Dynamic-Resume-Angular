import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObjectiveComponent } from './components/objective/objective.component';
import { EducationComponent } from './components/education/education.component';
// import { ExperienceComponent } from './components/experience/experience.component';
import { IntershipsComponent } from './components/interships/interships.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { MainwrapperComponent } from './components/mainwrapper/mainwrapper.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ObjectiveComponent,
    EducationComponent,
    // ExperienceComponent,
    IntershipsComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificationsComponent,
    HobbiesComponent,
    MainwrapperComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  exports: [
    MatExpansionModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
