import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pony } from './pony';
import { PONIES } from './mock-ponies';

@Injectable()
export class PonyService {

  myPonies: Array<Pony> = PONIES;

  constructor() {
    this.myPonies = PONIES;
  }

  getPonies(): Observable<Pony[]> {
    return Observable.of(this.myPonies);
  }

  addPony(pony: Pony) {
      this.myPonies.push(pony);

  }

  updatePony(pony : Pony){
    for(let p of this.myPonies){
      if(pony.id_pony == p.id_pony){
        p.name = pony.name;
        p.age = pony.age;
        p.weight = pony.weight;
      }
    }
  }

  getPonyById(id : number){
    let pony = this.myPonies.filter((ponies) => ponies.id_pony == id)[0];
    if(pony != null){
      return true;
    } else {
      return false;
    }
  }

  delete(id: number) {
    this.myPonies = this.myPonies.filter((ponies) => ponies.id_pony != id);
    return this.myPonies;
  }

}
