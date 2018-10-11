export declare const schema: {
    PBFPubKey: {
        required: string;
        type: string;
        isEmpty: (data: any) => boolean;
    };
    txref: {
        required: string;
        type: string;
        isEmpty: (data: any) => boolean;
    };
    customer_phone: {
        required: string;
        type: string;
        isEmpty: (data: any) => boolean;
    };
    customer_email: {
        required: string;
        type: string;
        isEmpty: (data: any) => boolean;
        isValidEmail: (email: any) => any;
    };
    amount: {
        required: string;
        type: string;
        isEmpty: (data: any) => boolean;
    };
    integrity_hash: {
        required: boolean;
        type: string;
    };
    payment_options: {
        required: boolean;
        type: string;
    };
    payment_plan: {
        required: boolean;
        type: string;
    };
    subaccounts: {
        required: boolean;
        isValidArray: (array: any) => boolean;
    };
    currency: {
        required: boolean;
        type: string;
    };
    country: {
        required: boolean;
        type: string;
    };
    customer_firstname: {
        required: boolean;
        type: string;
    };
    customer_lastname: {
        required: boolean;
        type: string;
    };
    custom_title: {
        required: boolean;
        type: string;
    };
    custom_description: {
        required: boolean;
        type: string;
    };
    redirect_url: {
        required: boolean;
        type: string;
        isValidUri: (email: any) => any;
    };
};
