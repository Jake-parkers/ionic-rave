import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RaveProvider } from '../providers/rave-provider';
var HTML_TEMPLATE = "\n  <button> {{pay_text}} </button>\n";
var RaveComponent = (function () {
    function RaveComponent(navCtrl, raveProvider) {
        this.navCtrl = navCtrl;
        this.raveProvider = raveProvider;
    }
    RaveComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rave-component',
                    template: HTML_TEMPLATE,
                    styles: []
                },] },
    ];
    /** @nocollapse */
    RaveComponent.ctorParameters = function () { return [
        { type: NavController, },
        { type: RaveProvider, },
    ]; };
    RaveComponent.propDecorators = {
        "pay_text": [{ type: Input },],
    };
    return RaveComponent;
}());
export { RaveComponent };
//# sourceMappingURL=rave-component.js.map