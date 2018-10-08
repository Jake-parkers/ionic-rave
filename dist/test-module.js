import { NgModule } from '@angular/core';
import { TestComponent } from './components/test-component';
import { TestProvider } from './providers/test-provider';
import { IonicModule } from 'ionic-angular';
var TestModule = (function () {
    function TestModule() {
    }
    TestModule.forRoot = function () {
        return {
            ngModule: TestModule,
            providers: [TestProvider]
        };
    };
    TestModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        TestComponent
                    ],
                    exports: [
                        TestComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    TestModule.ctorParameters = function () { return []; };
    return TestModule;
}());
export { TestModule };
//# sourceMappingURL=test-module.js.map