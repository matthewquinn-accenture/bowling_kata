# KataENV
Environment for Katas using ES6 and Mocha Chai

### Installation
```sh
$ cd KataDirectory
$ yarn install
```

### Automation
Open .bash_profile in your editor

```sh
$ cd
$ (atom, code, blah blah ) .bash_profile
```
Paste the following function into .bash_profile

Feel free to edit the directory you want your projects in, as well as the editor where it says "code . &&"

```sh
function Kata() {
    cd && 
    cd ~/Documents/Projects && 
    git clone https://github.com/aurbina83/KataENV.git "$1" &&
    cd "$1" &&
    yarn install &&
    code . &&
    npm test;
}
```

Save it and restart terminal. 

This function will create your project, open your editor, and run the initial canary test.
Just run Kata "Your project name"

```sh
$ Kata RomanNumberal
```
