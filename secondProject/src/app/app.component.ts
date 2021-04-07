import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondProject';
  public textcolor2 = "textcolorTwo";
  public buttonDisabled =true;
  public isDisable = true;
  UserName:string="John";
}
