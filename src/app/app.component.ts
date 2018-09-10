import { Component, OnInit } from '@angular/core';
import { Pony } from './pony';
import {PONIES} from './mock-ponies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mon petit poney';
  up = false;

  ngOnInit(){
  }
}
