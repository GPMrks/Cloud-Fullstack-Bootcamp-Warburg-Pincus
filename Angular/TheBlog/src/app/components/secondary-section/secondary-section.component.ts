import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secondary-section',
  templateUrl: './secondary-section.component.html',
  styleUrls: ['./secondary-section.component.css']
})
export class SecondarySectionComponent implements OnInit{
  
  constructor(private route: ActivatedRoute) {

  }
  
  ngOnInit(): void {
  }

}
