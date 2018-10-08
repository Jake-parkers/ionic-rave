import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var HTML_TEMPLATE = "\n<ion-header>\n  <ion-navbar color=\"primary\">\n    <ion-title>\n      Ionic Academy\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n \n<div class=\"special-text\">Welcome to the special Ionic Academy Module!</div>\n  <button ion-button full icon-left (click)=\"leavePage()\">\n    <ion-icon name=\"close\"></ion-icon>\n  Close the Page</button>\n</ion-content>\n";
var CSS_STYLE = "\n.special-text {\n    font-weight: 800;\n    font-size: 15pt;\n    text-align: center;\n    color: #0000FF;\n}\n";
var TestComponent = (function () {
    function TestComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TestComponent.prototype.leavePage = function () {
        this.navCtrl.pop();
    };
    TestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'test-component',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE]
                },] },
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return TestComponent;
}());
export { TestComponent };
//# sourceMappingURL=test-component.js.map