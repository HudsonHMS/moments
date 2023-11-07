import { Observable } from 'rxjs';
import { Moment } from './../../models/moment';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { fileReader } from 'src/app/utils/file-reader';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent {

  public momentForm!: FormGroup;

  public displayImage:boolean = false;

  @Input()
  public btnText!: string;

  @ViewChild('momentImg')
  private momentImg!: ElementRef<HTMLImageElement>

  @ViewChild('divDisplayImg')
  private divDisplayImg!: ElementRef<HTMLDivElement>


  @Output()
  public onSubmit = new EventEmitter<Moment>();

  public async mostrarImagem( event: any ) {

    const imageFile : File = event.target.files[0];
    this.momentForm.patchValue({imagem: imageFile});

    await fileReader( event.target, this.momentImg.nativeElement );
    this.displayImage = true;
  }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imagem: new FormControl('')
    });
  }

  ngAfterViewInit(): void {

  }

  public cadastrarMoment( event: SubmitEvent ) {
    if( this.momentForm.invalid ) {
      return;
    }
    this.onSubmit.emit( this.momentForm.value );
  }

  get title () {
    return this.momentForm.get('title');
  }

  get description () {
    return this.momentForm.get('description');
  }

  get imegem () {
    return this.momentForm.get('imagem');
  }

}
