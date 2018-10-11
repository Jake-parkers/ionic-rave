export declare class RaveProvider {
    uri: string;
    sandbox: string;
    live: string;
    constructor();
    /**
     * This function loads the rave inline js unto the current window.
     * It also validates the payment object the programmer passes in
     * @param production - a boolean that determines if the uri will be set to live or sandbox
     * @param payload -  this is the payment object passed in by the programmer
     */
    setup(production: boolean, payload: any): {
        valid: boolean;
        payload: any;
    } | {
        valid: boolean;
        error: any[];
    } | {
        valid: boolean;
        error: string;
    };
    /**
     * This function appends rave inline js to the body tag
     */
    loadRaveInline(): void;
}
