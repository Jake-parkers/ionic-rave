import { NgModule, ModuleWithProviders } from '@angular/core';
import { Rave } from './providers/rave-provider';
import { RavePayment } from './providers/rave-payment-provider';
import { Misc } from './providers/misc-provider';

import { IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        HttpClientModule,
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
            ],
    exports: [
        // export the component(s) that you want others to be able to use
    ]
})
export class RaveModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RaveModule,
            providers: [Rave, RavePayment, Misc]
        };
    }
}