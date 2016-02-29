## DoItRight
> React Native / Redux / Babel playground, goals is to build a todo apps on top of the UI provided by [Invision](http://www.invisionapp.com/do).

Currently the focus on the project is on the UI implementation.

External contributions highly welcome. I start this project to learn React Native, so open to comments and external reviews.

Feel free to contact me on [twitter](https://twitter.com/dfeyer)

#### Features

- Babel/ES2015 support
- ES6 Class support
- Redux with Async actions via `redux-thunk` and console logging via `redux-logger`
- Navigator & NavigationBar
- ESLint preconfigured with settings from [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- Flowtype annotations preconfigured

#### Getting Started

- Make sure XCode is installed.

- Install React Native

- Clone this repo and then run `npm install`

- Open XCode and open `/ios/DoItRight.xcodeproj`

#### Running IOS

Simply run the project in XCode

#### Running Android

From your command line run `react-native run-android`

#### Linting

To lint your code using [ESLint](http://eslint.org/) run `npm run lint`

#### Type Checking

To type check your code using [Flow](flowtype.org), first [install Flow](http://flowtype.org/docs/getting-started.html#_) and then run `npm run flow`

#### Troubleshooting

If you have any trouble with package caching due to `.babelrc`, run `rm -fr $TMPDIR/react-*`
