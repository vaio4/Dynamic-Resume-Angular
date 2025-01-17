import { Component } from '@angular/core';
import { PDFService } from '../../services/pdf.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private pdfService : PDFService) {}

  
}
