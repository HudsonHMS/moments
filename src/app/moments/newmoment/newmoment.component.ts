
import { MomentsService } from './../services/moments.service';
import { Observable } from 'rxjs';
import { Moment } from './../../models/moment';
import { Component } from '@angular/core';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-newmoment',
  templateUrl: './newmoment.component.html',
  styleUrls: ['./newmoment.component.scss']
})
export class NewmomentComponent {

  public btntext!: string;
  private respon: Response<Moment | null> = {
    sucesso: false,
    data: null,
    msg: ''
  };

  constructor( private momentService: MomentsService) {}

  ngOnInit(): void {
    this.btntext = "Compartilhar";
  }

  public cadastrarMoment( event: Moment ) : Response<Moment | null> {

    const form = new FormData();
    form.append('title', event.title);
    form.append('description', event.description);
    form.append('imagem', event.imagem);

    this.momentService.insertMoment( form ).subscribe(
      resp => {
        this.respon.data = resp.data;
        this.respon.sucesso = true;
        this.respon.msg = "OK"
      }
    );
    return this.respon;
  }
}
