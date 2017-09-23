import { ICricketList } from './../interface/cricketer-list';
import { Component, OnInit } from '@angular/core';
import { CricketerService } from "app/services/cricketer.service";

@Component({
  selector: 'app-cricketers-list',
  templateUrl: './cricketers-list.component.html',
  styleUrls: ['./cricketers-list.component.css']
})
export class CricketersListComponent implements OnInit {
  
  criketerDetail: ICricketList[];

  /** Using constructor, call the cricketService.
       this shorthand syntax automatically creates and
      initializes a new private member in the class */
  constructor(private _cricketService: CricketerService) { }

  /**Get the cricketerDetail from cricketer-app  */
  private searchData: string;
  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';

  ngOnInit() {
    this.searchData = '';
    this.criketerDetail = this._cricketService.getCricketerList();
  };

}
