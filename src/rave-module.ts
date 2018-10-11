import { NgModule, ModuleWithProviders } from '@angular/core';
import { RaveComponent } from './components/rave-component';
import { RaveProvider } from './providers/rave-provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        RaveComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        RaveComponent
    ]
})
export class RaveModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RaveModule,
            providers: [RaveProvider]
        };
    }
}