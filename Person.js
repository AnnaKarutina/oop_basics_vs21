class Person{
    // constructor
    // f-on for object creation
    constructor(name) {
       this.name = name;
       this.age;
    }
    // class functions
    greeting(){
        console.log('Hi, i am ' + this.name + '!')
    }

    // setter and getter
    setAge(age){
        this.age = age;
    }

    getAge(){
        return this.age;
    }
}