import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-moment',
  templateUrl: './detalhe-moment.component.html',
  styleUrls: ['./detalhe-moment.component.scss']
})
export class DetalheMomentComponent implements OnInit {

  private id!: number | null;

  constructor( private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    console.log(this.id);
  }


}
