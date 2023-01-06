import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css']
})
export class MainAreaComponent implements OnInit{
  
  private id:string | null = "0";

  constructor() {

  }

  ngOnInit(): void {
    
  }

  setValuesToComponent(id:string) {
    const result = dataFake.filter(article => article.id.toString() == id)

    if (!result) {
      
    }
  }

}
