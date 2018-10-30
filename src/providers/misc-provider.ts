import { Injectable } from '@angular/core';

@Injectable()
export class Misc {
   public PBFPubKey: string = ""
   public sandbox: string = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/flwpbf-inline.js';
   public live: string = 'https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js';
}