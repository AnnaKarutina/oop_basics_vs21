class Student extends Person {
    constructor(name, group) {
        super(name);
        this.group = group
    }

    greeting() {
        if(this.group === undefined){
            super.greeting();
        } else {
            console.log('Hi, i am ' + this.name + ', i am from ' + this.group)
        }
    }
}