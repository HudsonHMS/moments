import { Moment } from './../../models/moment';
import { MomentsService } from './../services/moments.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-moment',
  templateUrl: './detalhe-moment.component.html',
  styleUrls: ['./detalhe-moment.component.scss']
})
export class DetalheMomentComponent implements OnInit {

  private id!: number | null;
  public moment!: Moment | undefined;

  constructor( private route: ActivatedRoute, private momentsService: MomentsService ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.momentsService.getMoment( this.id )?.subscribe(
      (result) => this.moment = result.data
     );
  }


}
