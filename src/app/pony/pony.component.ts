import { Component, OnInit, Input } from '@angular/core';

import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {
  x : number = 7;
  up = false;
  model: Pony = new Pony(this.x, "", null, null);
  submitted = false;
  ponyService: PonyService;

  constructor(ponyService : PonyService) {
    this.ponyService = ponyService;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if(this.ponyService.getPonyById(this.model.id_pony)){
      this.ponyService.updatePony(this.model);
      this.model = new Pony(this.x, "", null, null);
    } else {
      this.ponyService.addPony(this.model);
      this.model = new Pony(this.x++, "", null, null);
    }
    
  }

  update(){
    let currentModel = this.ponyService.myPonies.filter((ponies) => ponies.id_pony == this.model.id_pony)[0];
    if(currentModel){
      this.model.name = currentModel.name;
      this.model.age = currentModel.age;
      this.model.weight = currentModel.weight;
    }
  }

} 
