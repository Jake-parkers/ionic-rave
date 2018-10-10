import { NavController } from 'ionic-angular';
import { TestProvider } from '../providers/test-provider';
export declare class TestComponent {
    private navCtrl;
    private testProvider;
    pay_text: string;
    constructor(navCtrl: NavController, testProvider: TestProvider);
    leavePage(): void;
    raveDropinUi(): void;
}
