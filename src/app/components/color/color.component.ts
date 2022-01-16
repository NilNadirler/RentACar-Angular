import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  currentColor:Color;
  colors:Color[]=[]
  colorId: number = 0;
  constructor(private colorServices:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }
 
  getColors(){
    this.colorServices.getColors().subscribe(response=>{
      this.colors=response.data
    })
  }
  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item list-group-item-action list-group-item-light active"
    }
    else return "list-group-item list-group-item-action list-group-item-light"
  }
  getAllColorClass(){
    if(!this.currentColor){
       return  "list-group-item list-group-item-action list-group-item-light active"
    }
    else{
      return "list-group-item list-group-item-action list-group-item-light"
    }
  }
}
