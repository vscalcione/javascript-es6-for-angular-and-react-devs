class Greeting {
    text = 'Hi';
    constructor() {
        setTimeout(() => {
            console.log(this.text);
        }, 2000);
    }

    hello (value){
        console.log(this.text + ' ' + value)
    }

}

// class HelloGreeting extends Greeting {}

const greeting = new Greeting();
greeting.hello('Vincenzo');
