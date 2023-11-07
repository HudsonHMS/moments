import { ElementRef } from '@angular/core';
export async function fileReader(element: any, fileTarget: any): Promise<void> {

  const reader = new FileReader();
  reader.onload = (evt: any) => {
    if( evt.target.result ) {
      fileTarget.src = evt.target.result
    }
  }
  Array.from(element.files).forEach( (f:any) => reader.readAsDataURL(f) );
}
