import { Component,Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Pony } from '../pony';

@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {

  @Input('pony') public pony : Pony;
  @Output() onselect = new EventEmitter<string>();
  checkValue : boolean;

  constructor() {
    this.checkValue = false;
   }

  ngOnInit() {
  }

  selectPony(){
    if(this.checkValue){
      this.onselect.emit(this.pony.name);
    }
  }

}
