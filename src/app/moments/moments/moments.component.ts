import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import { MomentsService } from './../services/moments.service';
import { Moment } from './../../models/moment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss']
})
export class MomentsComponent implements OnInit {

  public moments: Moment[] = [];
  public allMoments: Moment[] = [];
  public searchIcon = faSearch;
  public baseUrl = environment.baseUrl;
  public searchTerm!: string;

  constructor( private momentsService: MomentsService ) {}

  ngOnInit() : void {
    this.momentsService.getMoments()?.subscribe(
      ( res ) => {
          this.moments    = res.data!;
          this.allMoments = res.data!;
      }
     );
  }

  public buscarMomentos( event: Event ) : void {
    const target = event.target as HTMLInputElement;
    this.moments = this.allMoments.filter( (e) => {
        return e.title.toLowerCase().includes( target.value );
    } );
  }

}
