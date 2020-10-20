function Student(naam, studentId) {
    let obj = this;
    this.name = naam + 'Hi';
    this.id = studentId;
    obj.cijfers = [];
    this.klas = '';

    this.pasKlasAan = function(klas) {
        this.klas = klas;
    }

    this.pasNaamAan = function(newName) {
        this.naam = newName;
    }

    this.veranderId = function(newID) {
        this.id = newID;
    }

    this.veranderCijfers = function(newArray) {
        this.cijfers = newArray;
    }

    this.geefNaam = function() {
        return this.name;
    }

    this.geefId = function() {
        return this.id;
    }

    this.geefCijfers = function() {
        return this.cijfers;
    }

    this.geefklas = function() {
        return this.klas;
    }
}

let student = new Student('myName', '0001');

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(student.geefklas);