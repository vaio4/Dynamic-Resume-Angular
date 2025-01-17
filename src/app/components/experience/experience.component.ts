import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  isModal: boolean = false;

  openModal = () => {
    this.isModal = !this.isModal;
  }

  closeModal = () => {
    this.isModal = !this.isModal;
  }

  expDetails: any = [
    {
      id: 1,
      "Role": "Assistant System Engineer(Frontend)",
      "Company": "Tata Consultancy Services",
      "Place": "Bengaluru",
      "Date": "Oct 2021 – Oct 2023",
      "Description": [
        "Developed and maintained over 20 responsive UIs using HTML, SCSS, JavaScript/Typescript, React/ Angular 8+ across 3 simultaneous projects, enhanced user experience for 50,000+ monthly users.",
        "Wrote test cases using Karma and Jest, optimized code by 30%, enhancing the overall performance, and fixed bugs reducing the production issues by 25%.",
        "Collaborated with a team of 15 in 30+ sprints using agile and GIT for seamless integration and delivery."
      ],
      "isAvailable": true
    },
    {
      id: 1,
      "Role": "Sabbatical Leave",
      "Company": "Tata Consultancy Services",
      "Place": "",
      "Date": "Oct 2021 – Present",
      "Description": [
        "Pursuing Full-time Master’s degree."
      ],
      "isAvailable": false
    },
  ];

  descriptionDetails: any = [
  "Developed and maintained responsive user interfaces using HTML, SCSS, JavaScript/Typescript, and React/Angular.",
  "Writing usable test cases using Karma and Jest.",
  "Expertise in frontend development, working with wireframes, and optimizing code for various projects",
  "Work using libraries like Bootstrap, Rxjs, Redux, Charts.js, jQuery, etc",
  "Fixing Bugs and incidents as per the requirements.",
  "Work using a version control system like GIT.",
  "Working extensively in Agile Development Process."
];
  
}
