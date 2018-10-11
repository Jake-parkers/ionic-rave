# Ionic 3 Rave

 An Ionic 3 module to add [Rave](https://www.flutterwave.com) Pay Button into your ionic apps.

 ## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Ensure that you have signed up for a Rave account. If not, go [here](https://www.rave.flutterwave.com) to signup for a ```live``` account or [here](https://www.ravesandbox.flutterwave.com) to signup for a ```test``` account.

Ensure that you have ```nodejs``` and ```npm``` installed. If download Nodejs from [here](https://nodejs.org) and install it.
> Installing ```nodejs``` also install ```npm``` with it.

Once you have ```nodejs``` and ```npm``` installed, proceed install cordova using the command below

```
npm install -g ionic
```
**NOTE:** if you are a MAC or Linux user, you might need to append ```sudo``` before ```npm install -g ionic``` __i.e__
```
sudo npm install -g ionic
```

### Installing

In your project folder, run

```npm install --save ionic-rave```

### Features

1. ```ionic-rave``` exports a component ```<rave-component> </rave-component>``` that you can add to your html page. ```<rave-component>``` simply creates a button with whatever text you pass into ```pay_text```.

Sample rave-component call

```<rave-component (click)="pay()" pay_text="Pay Now"></rave-component>```

2. ```ionic-rave``` exports a function ```setup``` which you **must** call in order to initiate loading the [Rave](https://developer.flutterwave.com/docs/rave-inline) payment modal.
```setup``` takes two arguments:
    - production: a boolean value that determines whether you want the live or sandbox environment (for testing)
    - payload: an object containing all the necessary properties to spin up the payment modal. The properties are explained below:
        
        >PBFPubKey: This is your Rave public key and can be gotten from your rave dashboard - Required

        >amount: The amount you want to charge your customers. If omitted, A customer will be able to specify the amount - Required

        >customer_email: this is the merchant's email address - Required

        >customer_phone: phone number of the customer - Required

        >currency: The currency you want to charge your customers in. If omitted, it defaults to NGN 

        >country: The merchant's country. Defaults to Nigeria

        >custom_title: A title for your payment

        >custom_description: Text describing what your customers are paying for
        
        >redirect_url: This is the url that rave sends the response of your transaction to. It should be configured to handle a get request. If not supplied, no response will be sent from Rave

        >payment_plan_id: If you want to bill your customers recurrently, pass in the payment plan id here. It must be an integer

        >payment_options: This allows you select the payment option you want for your users.

        >subaccounts: This is an array of objects containing the subaccount IDs to split the payment into.

        >custom_logo: Link to the Logo image.

        >txref: Unique transaction reference provided - Required

    > Go [here](https://developer.flutterwave.com/docs/rave-inline) for more options

The ```setup``` returns an object with properties ```valid```, ```payload``` (if the payment details passed are valid), ```error``` (if any of the payment details passed is not valid ).

A sample call is shown below:

```
this.test.setup(true, {
      PBFPubKey: "FLWPUBK-8bf84c62ed00abccc4ce37e12638ad63-X",
      customer_email: "user@example.com",
      amount: 1,
      customer_phone: "08074376980",
      currency: "NGN",
      payment_options: "card,account,ussd,mpesa",
      txref: "Mx-990000TD",
      redirect_url: "https://agile-journey-11424.herokuapp.com"
    });
}

```

Sample ```setup``` error response

```
{valid: false, error: [{'property': PBFPubkey, 'error': 'PBFPubKey is a required field and cannot be empty'}]}
```


3. Once you call the ```setup``` function, the ```getpaidSetup``` function will be available ```globally``` for you to call to show the payment modal.

Sample

```
pay() {
    if(this.info["valid"] == true) getpaidSetup(this.info["payload"])
    else console.log(this.info["error"])
}
```


## Deployment
Here are a few things to note
1. If you set ```production``` to ```false``` then ensure that you're using your rave sandbox api keys i.e public and secret key
2. If you set ```production``` to ```true``` then ensure that you're using your rave live api keys i.e public and secret key


### Support :

* For any bugs about this module, please feel free to report here.
* And you are welcome to fork and submit pull requests.


## License

This project is licensed under the MIT License 