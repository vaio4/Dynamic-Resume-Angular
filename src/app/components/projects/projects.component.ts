import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectDetails: any = [
    {
      id: 1,
      "projectName": "SMS Spam classifier",
      "projectCompany": "Minor project",
      "linkText": "https://github.com/vaio4/SMS-classifier/tree/main/Sms-classifer/sms-spam-classifier",
      "projectDate": "Aug 2024 – Dec 2024",
      "projectDescription": "SMS Spam Classification: Developed expertise in designing and implementing SMS spam classifiers."
    },
    {
      id : 2,
      "projectName": "Dynamic Form Generator Challenge",
      "projectCompany": "",
      "linkText": "https://react-json-form.vercel.app/",
      "projectDate": "May 2024 – Jul 2024",
      "projectDescription": "A dynamic form generator that takes a JSON schema and generates a styled, functional form."
    }
  ];
  
}
