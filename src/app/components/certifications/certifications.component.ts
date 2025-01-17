import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {

  certificationsDetails: any = [
    {
      "id": 1, 
      "courseName": "Meta Front-End Developer",
      "offeredBy": "Coursera & Meta",
      "linkText": "https://www.coursera.org/account/accomplishments/professional-cert/URNWFCS4CK6Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      "courseLoc": "Remote",
      "courseDates": "Sep 2023 – Mar 2024"
    },
    {
      "id": 2, 
      "courseName": "Angular Front-to-Back",
      "offeredBy": "Udemy",
      "linkText": "https://drive.google.com/file/d/1xvahfMv2FNEVCHrKiR1MzERohpQSEF9l/view",
      "courseLoc": "Remote",
      "courseDates": "Feb 2022"
    },
    {
      "id": 3,
      "courseName": "Programming Data Structures & Algorithms in Python",
      "offeredBy": "NPTEL",
      "linkText": "https://drive.google.com/file/d/1GqAmXiy7Im1QOM-PhIehz9AH-tALpZOT/view",
      "courseLoc": "Remote",
      "courseDates": "Jan 2024 – Mar 2024"
    }
  ];

  codingDetails: any = [
    {
      "id": 1,
      "platName": "Hackerrank",
      "platLink": "https://www.hackerrank.com/profile/roysoumendu765"
    },
    {
      "id": 2,
      "platName": "Leetcode",
      "platLink": "https://leetcode.com/u/roysoumendu765/"
    },
    {
      "id": 3,
      "platName": "Codechef",
      "platLink": "https://www.codechef.com/users/roysoumendu765"
    },
    {
      "id": 4,
      "platName": "Codeforces",
      "platLink": "https://codeforces.com/profile/yagami007"
    },
  ];

}
