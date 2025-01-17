import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {

  hobbiesDetails: any = [
    {
      "id": 1,
      "hobbiesheading": "10 meter air pistol shooting",
      "hobbiesdesc": "Competitive 10-meter pistol shooting; Bronze medalist in the prestigious GV Mavalankar event."
    },
    {
      "id": 2,
      "hobbiesheading": "cricket",
      "hobbiesdesc": "Hobbies: Fast bowler representing Banaras Hindu University in inter-faculty cricket tournaments"
    },
    {
      "id": 3,
      "hobbiesheading": "Coding Enthusiast",
      "hobbiesdesc": "Hobbies: Passionate coding enthusiast, actively participating in programming contests on platforms like LeetCode and CodeChef to enhance problem-solving skills and algorithmic thinking."
    }
  ]
}
