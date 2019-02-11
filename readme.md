# Ionic 3 Rave

 This Ionic 3 Module let's you add [Rave](https://www.flutterwave.com) Pay Button into your Cordova/Phonegap apps builds.

## Installation
<br/>

The Rave Ionic 3 Module adds support for spinning up the Rave modal on IOS and Android. It uses the Rave Standard endpoint and has done all the hard work for you. All you need to is add the necessary file and call the appropriate functions.

1. Follow the official [Rave](https://www.flutterwave.com) documentation on how to create an account if you don't have one yet.
2. Create a dummy project. For example ```ionic start myapp blank```
3. Install the Module

```
$ cd myapp
$ npm install --save rave-ionic3
$ ionic cordova plugin add cordova-plugin-inappbrowser
$ npm install --save @ionic-native/in-app-browser
```
4. [Add the module to your AppModule](https://ionicframework.com/docs/native/#Add_Plugins_to_Your_App_Module)
5. **Ensure** that you have set up a redirect url to handle the response sent from rave. See [here](https://medium.com/@jake_parkers/3d-secure-guidelines-9e17f9a6cf32) for guide lines on how to set up your redirect url
5. See Usage


##  Usage
<br/>

```
import { Rave, RavePayment, Misc } from 'rave-ionic3';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserObject } from '@ionic-native/

constructor(
  private rave: Rave, 
  private ravePayment: RavePayment, 
  private misc: Misc,
  private iab: InAppBrowser,
  ) { }

...


this.rave.init(PRODUCTION_FLAG, "YOUR_PUBLIC_KEY")
      .then(_ => {
        var paymentObject = this.ravePayment.create({
          customer_email: "user@example.com",
          amount: 2000,
          customer_phone: "234099940409",
          currency: "NGN",
          txref: "rave-123456",
          meta: [{
              metaname: "flightID",
              metavalue: "AP1234"
          }]
      })
        this.rave.preRender(paymentObject)
          .then(secure_link => {
            secure_link = secure_link +" ";
            const browser: InAppBrowserObject = this.rave.render(secure_link, this.iab);
            browser.on("loadstop")
                .subscribe((event: InAppBrowserEvent) => {
                  if(event.url.indexOf('https://your-redirect-url') != -1) browser.close();
                })
          }).catch(error => {
            // Error or invalid paymentObject passed in
          })
      })

```

## Instance Members

### Rave

**```init(PRODUCTION_FLAG, PUBLIC_KEY)```**

You must call the init method with the ```PRODUCTION_FLAG``` set to ```true``` or ```false``` and your ```PUBLIC KEY```. If your production flag is set to ```true```, you will need to pass in your ```live``` ```public key``` otherwise, you pass in your ```sandbox``` ```public key```

- Returns: ```Promise```

**```preRender(validatedPaymentObject)```**
You must preconnect to Rave to obtain a secure link that will enable you to load the payment UI. Prior to calling this method you must have called ```RavePayment.create()``` to validate your payment object.

- Returns: ```Promise```

**```render(paymentLink)```**
Start the Rave UI to collect payment from user.

- Returns: ```InAppBrowserObject```

Use the ```InAppBrowserObject``` returned to close the modal once the transaction completes by binding to the ```loadend``` event and checking for your redirect url as was shown above.

**NOTE:** IOS users ```may``` still need to rely on the ```Done``` button at the bottom left of the opened webview.

### Rave Payment

**```create(paymentObject)```**
You must validate the paymentObject you want to use to load the Rave payment UI. See [https://developer.flutterwave.com/docs/rave-inline-1](https://developer.flutterwave.com/docs/rave-inline-1) for more documentation of the parameters.

- Returns: ```Object``` (either an error or your validated payment object)

**```amount()```**
The amount of the payment

**```email()```**
The customer's email

**```txref()```**
The transaction reference of the payment

**```currency()```**
The currency of the payment


# License
<br/>

Released under [MIT License](https://github.com/Jake-parkers/ionic-rave/blob/master/License)


# Contributions
<br/>

Pull requests and new issues are welcome. See [CONTRIBUTING.md](https://github.com/Jake-parkers/ionic-rave/blob/master/CONTRIBUTING.md) for details.
