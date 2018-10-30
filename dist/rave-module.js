import { NgModule } from '@angular/core';
import { Rave } from './providers/rave-provider';
import { RavePayment } from './providers/rave-payment-provider';
import { Misc } from './providers/misc-provider';
import { IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
var RaveModule = (function () {
    function RaveModule() {
    }
    RaveModule.forRoot = function () {
        return {
            ngModule: RaveModule,
            providers: [Rave, RavePayment, Misc]
        };
    };
    RaveModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        HttpClientModule,
                        IonicModule
                    ],
                    declarations: [],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    RaveModule.ctorParameters = function () { return []; };
    return RaveModule;
}());
export { RaveModule };
//# sourceMappingURL=rave-module.js.map