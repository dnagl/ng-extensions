import {Directive, Input, OnInit} from '@angular/core';
import {MatInput} from '@angular/material/input';

@Directive({
  selector: '[ngMatInputAutoFocus]'
})
export class NgExtensionMatAutofocusDirective implements OnInit{

  @Input('ngMatInputAutoFocus') autoFocus: boolean;

  constructor(private matInput: MatInput) {
  }

  ngOnInit(){
    if (this.autoFocus){
      setTimeout(() => this.matInput.focus());
    }
  }
}
