import { Misc } from './misc-provider';
export declare class RavePayment {
    private misc;
    schema: object;
    constructor(misc: Misc);
    create(payload: any): any;
    amount(): number;
    currency(): string;
    email(): string;
    txref(): string;
    validate(object: any): {
        valid: boolean;
        payload: any;
    } | {
        valid: boolean;
        error: any[];
    };
}
