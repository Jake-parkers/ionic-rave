import { NgModule, ModuleWithProviders } from '@angular/core';
import { TestComponent } from './components/test-component';
import { TestProvider } from './providers/test-provider';
import { IonicModule } from 'ionic-angular';
 
@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        TestComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        TestComponent
    ]
})
export class TestModule {
    constructor() {
        
    }
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TestModule,
            providers: [TestProvider]
        };
    }
}