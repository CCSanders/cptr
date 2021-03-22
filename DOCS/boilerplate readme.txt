<p align="center">
<img style="margin-bottom: 40px; " alt="Project Structure" src="./assets/images/banner.png">
</p>

This project is a React Native boilerplate that  provides an architecture optimized for building solid cross-platform mobile applications through separation of concerns between the UI and business logic to help you kickstart your new app
When starting new apps I found myself repeatedly setting up my project with same packages over and over again so I decided to automate this process
This boilerplate consists of various elements and best practices I learned while going though apps written by various talented developers in the React Native Community :zap:
While this mostly consists of how I organize my projects but can be easily extended to suit any workflow
If you're new to React Native feel free to checkout this repo I made where I keep all the learning resources I find: https://github.com/karanpratapsingh/guides-and-articles/blob/master/Guides/Learn%20React%20Native.md
If you face any issue then please checkout the Known Issues section below, but if the issue persists then feel free to open a issue so we can solve it together :smiley:

Content:
    - React Native (0.62.2) + Hermes
    - TypeScript Integration (Optional)
    - Clean Directory Layout
    - ESLint
    - Packages:
        - Redux (Thunk)
        - React Navigation (Hooks)
        - React Native Reanimated
        - React Native Vector Icons
        - React Native Gesture Handler

Project Structure:
https://user-images.githubusercontent.com/29705703/65224389-b3779980-dae0-11e9-9988-27a2ab7b5fe1.png

TypeScript Support:
Recently I've been using a lot of TypeScript and I think it's fantastic
To add TypeScript support please run `yarn typescript:add` command which should excecute the `scripts/add-typescript/script.sh` script and installs all the TypeScript dependencies with types for React, React Native, React Navigation and also add a `tsconfig.json` and `jest.config.js` 
If `yarn typescript:add` fails then kindly apply the changes as mentioned in the [docs](https://facebook.github.io/react-native/docs/typescript)

**Note**: This feature is only tested on Linux and MacOSX

Using the boilerplate:

Make sure to remove the existing git history and initialize the project with your own 

``` bash
rm -rf .git/
git init
git add .
git commit -m 'project init'
git remote add origin <your remote repo>
git push -u origin master
```

Rename the project:

Rename the project with the name and bundle identifier of your choosing
Note: it is advised to do so in a new branch

git checkout -b rename
yarn rename <new_name> -b <bundle_identifier>

Removing Redux:

I personally like Redux for state management for larger apps but sometimes if the app is relatively smaller then I stick to using context api or simple `useState` or `useReducer` 
Checkout this great light weight Redux like implementation using just the `React Context` api: https://github.com/RichardBray/no-redux
If you like to use other great solutions such as MobX, RxJS then feel free to remove redux by using `yarn redux:remove` 

Note: you will have to configure the project files accordingly

Running the project
Assuming you have all the requirements installed, you can setup and run the project by running:
`yarn install` to install the dependencies

Use the following steps for your platform

Android
Run the following command while the simulator is open or a device is connected via adb.

yarn android

iOS
Run the following commands to install pods and run the app on iPhone 6 simulator (device can be changed via `package.json` scripts)

yarn cocoapods
yarn ios

Known Issues:

Cocoapods install fails

`yarn cocoapods` might fail for some users, if this happens then try deleting `Podlock.file` and re-running the `yarn cocoapods` command :smile:

If the error persists then please check your cocoapods version using `pod --version` . It should be `>= 1.7.5` . If not then please run `sudo gem install cocoapods` :smiley: 