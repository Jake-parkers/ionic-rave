import { Injectable } from '@angular/core';

@Injectable()
export class Misc {
   public PBFPubKey: string = "";
   public paymentObject: object = {};
   public sandbox: string = "https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/v2/hosted/pay";
   public live: string = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/v2/hosted/pay';
}