export declare class TestProvider {
    uri: string;
    sandbox: string;
    live: string;
    constructor();
    setup(production?: boolean): void;
    paymentDetails(): {
        PBFPubKey: string;
        customer_email: string;
        amount: number;
        customer_phone: string;
        currency: string;
        payment_options: string;
        txref: string;
        meta: {
            metaname: string;
            metavalue: string;
        }[];
    };
    loadRaveInline(): void;
}
