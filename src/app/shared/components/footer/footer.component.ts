import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Footer } from 'src/app/models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  company!: string;
  quicklinks!: string;
  socialnetwork!: string;
  contact!: string;
  whoweare!: string;
  industry!: string;
  ourbrands!: string;
  media!: string;
  news!: string;
  facebook!: string;
  linkedin!: string;
  youtube!: string;
  description!: string;
  caption!: string;
  phonecaption!: string;
  emailcaption!: string;
  rightscaption!: string;
  termscaption!: string;
  privacycaption!: string;

  constructor(private _dataServeice: DataService) {}

  ngOnInit(){
    this._dataServeice.getFooter().subscribe((data) => {
      this.company = data.company;
      this.quicklinks = data.quicklinks;
      this.socialnetwork = data.socialnetwork;
      this.contact = data.contact;
      this.whoweare = data.whoweare;
      this.industry = data.industry;
      this.ourbrands = data.ourbrands;
      this.media = data.media;
      this.news = data.news;
      this.facebook = data.facebook;
      this.linkedin = data.linkedin;
      this.description = data.description;
      this.caption = data.caption;
      this.phonecaption = data.phonecaption;
      this.emailcaption = data.emailcaption;
      this.rightscaption = data.rightscaption;
      this.termscaption = data.termscaption;
      this.privacycaption = data.privacycaption;
      this.youtube= data.youtube
    });
  }
}
  
  



