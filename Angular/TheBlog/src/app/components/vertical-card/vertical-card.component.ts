import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.css']
})
export class VerticalCardComponent implements OnInit {
  
  @Input() id: string | null = "";
  @Input() photoCover:string = "";
  @Input() articleDate:string = "";
  @Input() articleTitle:string = "";

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => console.log(value.get("id"))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.photoCover = result.photo;
    this.articleTitle = result.title;
    this.articleDate = result.date;

  }

}
