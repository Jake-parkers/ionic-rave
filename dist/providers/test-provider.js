import { Injectable } from '@angular/core';
var TestProvider = (function () {
    function TestProvider() {
    }
    TestProvider.prototype.reasonToJoin = function () {
        return 'The Ionic Academy helps you learn everything Ionic!';
    };
    TestProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    TestProvider.ctorParameters = function () { return []; };
    return TestProvider;
}());
export { TestProvider };
//# sourceMappingURL=test-provider.js.map