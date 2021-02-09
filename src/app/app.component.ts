import { Component, OnInit } from '@angular/core';
import { constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SampleApp';
  data:any;
  ngOnInit(){
   this.data=constants.Name;
  }

  showData(){
    return false;
  }
}
