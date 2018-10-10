import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestProvider } from '../providers/test-provider';
var HTML_TEMPLATE = "\n  <button> {{pay_text}} </button>\n";
// const CSS_STYLE = `
// .special-text {
//     font-weight: 800;
//     font-size: 15pt;
//     text-align: center;
//     color: #0000FF;
// }
// `;
var TestComponent = (function () {
    function TestComponent(navCtrl, testProvider) {
        this.navCtrl = navCtrl;
        this.testProvider = testProvider;
    }
    TestComponent.prototype.leavePage = function () {
        this.navCtrl.pop();
    };
    TestComponent.prototype.raveDropinUi = function () {
    };
    TestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'test-component',
                    template: HTML_TEMPLATE,
                    styles: []
                },] },
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return [
        { type: NavController, },
        { type: TestProvider, },
    ]; };
    TestComponent.propDecorators = {
        "pay_text": [{ type: Input },],
    };
    return TestComponent;
}());
export { TestComponent };
//# sourceMappingURL=test-component.js.map