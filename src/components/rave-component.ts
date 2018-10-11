import { Component, Input  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RaveProvider } from '../providers/rave-provider';
 
const HTML_TEMPLATE = `
  <button> {{pay_text}} </button>
`;
 
@Component({
  selector: 'rave-component',
  template: HTML_TEMPLATE,
  styles: []
})
export class RaveComponent {
  @Input() pay_text: string;
  constructor(
    private navCtrl: NavController,
    private raveProvider: RaveProvider
    ) {}

}