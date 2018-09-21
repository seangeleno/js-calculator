# React JS - Calculator

React JS version of the calculator.

## Getting Started

There's not much to it, just calculate 2 numbers using an operator in between.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js 8.12.0
NPM 6.4.1
```

### Installing

```
npm i --save-dev
```

After that try:

```
npm run
```

this will give you all the npm scripts at your disposal such as:
```
npm run start
```

that'll get you up and running (hopefully)

## Running the tests

Testing can be done via npm scripts:
```
npm run test
```

### Break down into end to end tests

Chai tests the calculator and makes sure it works properly. Easy peesy.

```
function pressButtons(buttons) {
    const value = {};
    buttons.forEach(button => {
        Object.assign(value, calculate(value, button));
    });
    // no need to distinguish between null and undefined values
    Object.keys(value).forEach(key => {
        if (value[key] === null) {
            delete value[key];
        }
    });
    return value;
}
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Sean Esteva** - *Initial work* - [Seangeleno](https://github.com/seangeleno)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration
* etc

