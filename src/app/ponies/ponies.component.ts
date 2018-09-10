import { Component, OnInit } from '@angular/core';

import { Pony } from '../pony';
import {PONIES} from '../mock-ponies';
import { PonyService } from '../pony.service';
import { PonyDetailsComponent } from '../pony-details/pony-details.component';


@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {
  myPonies = new Array<Pony>();
  listPoniesSelected : string;

  constructor(private ponyService : PonyService) {
    this.ponyService = ponyService;
    this.listPoniesSelected = "";
   }

  ngOnInit() {
    //this.myPonies = PONIES;
    this.ponyService.getPonies().subscribe(ponies => this.myPonies = ponies);
  }

  delete(id: number){
    this.myPonies = this.ponyService.delete(id);
    return this.myPonies;
  }

  onSelectParent(name : string){
    this.listPoniesSelected = "" + name;
  }

}
