import { Component } from '@angular/core';
// import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-mainwrapper',
  templateUrl: './mainwrapper.component.html',
  styleUrl: './mainwrapper.component.scss'
})
export class MainwrapperComponent {
  smoothScroll(target: string): void {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50, // Adjust -50 for fixed header offset
        behavior: 'smooth'
      });
    }
  }
}
