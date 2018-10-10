import { Component, Input  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestProvider } from '../providers/test-provider';
 
const HTML_TEMPLATE = `
  <button> {{pay_text}} </button>
`;
 
@Component({
  selector: 'test-component',
  template: HTML_TEMPLATE,
  styles: []
})
export class TestComponent {
  @Input() pay_text: string;
  constructor(
    private navCtrl: NavController,
    private testProvider: TestProvider
    ) {}
    
  leavePage() {
      this.navCtrl.pop();
  }

}