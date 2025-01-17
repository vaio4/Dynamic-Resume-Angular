import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  // isToggle: boolean = false

  isToggle: any = [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false]
  ];
  
  enableToggle = (j: number, i: number) => {
    this.isToggle[j][i] = !this.isToggle[j][i];
    console.log("Clicked")
    console.log(j,i)
  }

  skillsDetails: any = [
    {
      id: 1,
      "skillHeading": "Languages",
      "skillDesc": [
        {
          "langName": "C",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
        {
          "langName": "C++",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
        {
          "langName": "Python",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Java",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "JavaScript",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "Solidity",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
      ]
    },
    {
      id: 2,
      "skillHeading": "Web Technologies",
      "skillDesc": [
        {
          "langName": "HTML5",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "CSS3/SCSS",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Angular",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "React.js",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "Next.js",
          "langProficiency": "Beginner",
          "langRating": 2
        },
        {
          "langName": "Web3.js",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
        {
          "langName": "Node.js",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Express.js",
          "langProficiency": "Intermediate",
          "langRating": 4
        }
      ]
    },
    {
      id: 3,
      "skillHeading": "Libraries",
      "skillDesc": [
        {
          "langName": "Numpy",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "Pandas",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "Scikit-Learn",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Matplotlib",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Seaborn",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
        {
          "langName": "Tensorflow",
          "langProficiency": "Beginner",
          "langRating": 2
        }
      ]
    },
    {
      id: 4,
      "skillHeading": "Other",
      "skillDesc": [
        {
          "langName": "DataStructures & Algorithms (DSA)",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "GIT",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "OOPs",
          "langProficiency": "Advanced",
          "langRating": 5
        },
        {
          "langName": "SQL/DBMS",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Karma",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
        {
          "langName": "Jest",
          "langProficiency": "Intermediate",
          "langRating": 3
        },
        {
          "langName": "MongoDB",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "CyberSecurity",
          "langProficiency": "Intermediate",
          "langRating": 4
        },
        {
          "langName": "Network Protocols",
          "langProficiency": "Intermediate",
          "langRating": 4
        }
      ]
    }
  ];

}
