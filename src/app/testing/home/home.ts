
import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import * as jsPDF from 'jspdf';
import {PdfService} from '../../services/pdf.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Prod, Dev} from '../../../URLSwitcher';


@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
  providers: [
    { provide: 'Window', useValue: window },
    PdfService
  ]
})
export class Home implements OnInit {


  BeginDate = '';
  price: string;
  rand = Math.floor((Math.random() * 1000000) + 1);
  url = this.sanitizer.bypassSecurityTrustResourceUrl('http://' + Dev + '/pdf/viewPDF?ignore=' + this.rand);

  constructor(private authService: AuthService,
                private pdfService: PdfService,
                private router: Router,
                @Inject('Window') private window: Window,
                private sanitizer: DomSanitizer
    )   {}

    ngOnInit()  {

    }



    download() {
      this.pdfService.getAgreement1()
        .subscribe(
          data => {

            // INJECT AGREEMENT WITH SPECIFIC INFO
            const agreement = data;


            agreement.text.par1 = agreement.text.par1.replace( /~BEGINDATE/ig, () => {
              return this.BeginDate.toString().substring(0, 16);
            } );
            agreement.text.par4 = agreement.text.par4.replace( /~TOTALPAYMENT/ig, () => {
              return this.price;
            } );

            // FORMAT PAGE
            const lMargin = 15; // left margin in mm
            const rMargin = 15; // right margin in mm
            const pdfInMM = 210;  // width of A4 in mm
            const doc = new jsPDF('p', 'mm', 'a4');
            doc.setFontType('normal');
            doc.setFontSize(9);



            // PREPARE TEXT STRINGS
            const par1 = doc.splitTextToSize(agreement.text.par1, (pdfInMM - lMargin - rMargin));
            const par2 = doc.splitTextToSize(agreement.text.par2, (pdfInMM - lMargin - rMargin));
            const par3 = doc.splitTextToSize(agreement.text.par3, (pdfInMM - lMargin - rMargin));
            const par4 = doc.splitTextToSize(agreement.text.par4, (pdfInMM - lMargin - rMargin));
            const par5 = doc.splitTextToSize(agreement.text.par5, (pdfInMM - lMargin - rMargin));
            const par6 = doc.splitTextToSize(agreement.text.par6, (pdfInMM - lMargin - rMargin));
            const par7 = doc.splitTextToSize(agreement.text.par7, (pdfInMM - lMargin - rMargin));
            const par8 = doc.splitTextToSize(agreement.text.par8, (pdfInMM - lMargin - rMargin));
            const par9 = doc.splitTextToSize(agreement.text.par9, (pdfInMM - lMargin - rMargin));
            const par10 = doc.splitTextToSize(agreement.text.par10, (pdfInMM - lMargin - rMargin));
            const par11 = doc.splitTextToSize(agreement.text.par11, (pdfInMM - lMargin - rMargin));
            const par12 = doc.splitTextToSize(agreement.text.par12, (pdfInMM - lMargin - rMargin));
            const par13 = doc.splitTextToSize(agreement.text.par13, (pdfInMM - lMargin - rMargin));

            // WRITE TEXT TO DOCUMENT
            // doc.text(lMargin,20, par1);
            // doc.text(lMargin,62, par2);
            doc.text(lMargin, 79, par3);
            doc.text(lMargin, 100, par4);
            doc.text(lMargin, 114, par5);
            doc.text(lMargin, 128, par6);
            doc.text(lMargin, 152, par7);
            doc.text(lMargin, 162, par8);
            doc.text(lMargin, 176, par9);
            doc.text(lMargin, 193, par10);
            doc.text(lMargin, 206, par11);
            doc.text(lMargin, 223, par12);
            doc.text(lMargin, 250, par13);


            // SEND FILE BACK TO SERVER FOR UPDATE
            const formData: FormData = new FormData();
            formData.append('pdf', doc.output('blob'));
            this.pdfService.updateAgreement1(formData)
              .subscribe(
                data => {
                  console.log(data);
                  const url1 = this.sanitizer.bypassSecurityTrustResourceUrl('http://' + Dev + '/pdf/viewPDF?ignore=' + this.rand);
                  this.url = url1;
                },
                error =>  {
                  console.error(error);
                }
              );

          }
        );
    }
}
