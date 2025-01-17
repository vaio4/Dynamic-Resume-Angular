import { Component } from '@angular/core';

@Component({
  selector: 'app-interships',
  templateUrl: './interships.component.html',
  styleUrl: './interships.component.scss'
})
export class IntershipsComponent {

  internDetails: any = [
    {
      id: 1,
      "internshipName": "Morden Algebra",
      "internshipCompany": "NPTL",
      "linkText": "https://drive.google.com/file/d/18Fe38jFhhxUUyNv2sI2Po8xyFpHsRrW-/view?usp=sharing",
      "internshipLoc": "",
      "internshipDate": "Feb 2024 – April 2024",
      "description": [
        "The course discusses how algebra allows us to abstract out the geometric objects and numbers.",
        "Problem-Solving Focus: Encourages logical reasoning and critical thinking through a variety of exercises and applications of algebraic concepts"
      ]
    },
    {
      id: 2,
      "internshipName": "The Joy of Computing using Python",
      "internshipCompany": "NPTL",
      "linkText": "https://drive.google.com/file/d/1VnvhYoI7PMF3vJqkHwQudFjb-1ZdUghT/view?usp=sharing",
      "internshipLoc": "",
      "internshipDate": "Aug 2024 – Oct 2024",
      "description": [
        "Hands-on Learning: Emphasizes practical problem-solving with Python, enabling students to write real-world programs and develop computational thinking.",
        "Creative Projects: Encourages creativity through projects like animations, games, and data visualization, making programming enjoyable and engaging."
        
      ]
    }
  ];
  
}
