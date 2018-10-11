import { NgModule } from '@angular/core';
import { RaveComponent } from './components/rave-component';
import { RaveProvider } from './providers/rave-provider';
import { IonicModule } from 'ionic-angular';
var RaveModule = (function () {
    function RaveModule() {
    }
    RaveModule.forRoot = function () {
        return {
            ngModule: RaveModule,
            providers: [RaveProvider]
        };
    };
    RaveModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        RaveComponent
                    ],
                    exports: [
                        RaveComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    RaveModule.ctorParameters = function () { return []; };
    return RaveModule;
}());
export { RaveModule };
//# sourceMappingURL=rave-module.js.map