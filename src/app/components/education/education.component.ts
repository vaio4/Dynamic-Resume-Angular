import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  educationDetails : any = [
    {
      id: 1,
      "College": "Banaras Hindu University",
      "Course": "Masters in Computer Applications",
      "Marks": "6.65",
      "Dates": "Oct 2023 – Jul 2025 (expected)",
      "Place": "Varanasi, India",
      "Curriculum": [
        "DSA",
        "OOPs in Java",
        "Software Eng." , 
        "Networking",
        "DBMS" ,
        "AI",
        "ML",
        "Blockchain Tech."
      ]
    },
    {
      id: 2,
      "College": "uttar pradesh rajarshi tandon university",
      "Course": "Bachelors in Mathematics",
      "Marks": "69.19",
      "Dates": "Sep 2019 – Sep 2022",
      "Place": "prayagraj, India",
      "Curriculum": [
        "C",
        "Mathematics",
        "Physics",
        "Chemistry",
        
      ]
    }
  ];

}
