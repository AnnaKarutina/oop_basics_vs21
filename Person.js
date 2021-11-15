class Person{
    // constructor
    // f-on for object creation
    constructor(name) {
       this.name = name;
    }
    // class functions
    greeting(){
        console.log('Hi, i am ' + this.name + '!')
    }
}