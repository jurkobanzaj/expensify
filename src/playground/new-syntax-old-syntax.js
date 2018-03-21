class OldSyntax {
    constructor() {
        this.name = 'Mike';
        this.getGreeting=this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//-------------------
class NewSyntax {
    name = 'Jan';
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}
const newSynyax = new NewSyntax();
const newGetGreeting = newSynyax.getGreeting;
console.log(newGetGreeting());