function Student(naam, studentId, klas) {
    let obj = this;
    this.name = naam + 'Hi';
    this.id = studentId;
    obj.cijfers = [];
    let studentklas = klas;
}

let student = new Student('myName', '0001', `MD2aa`);

// Hier moet je de variabele klas een waarde geven bijvoorbeeld MD2
console.log(student.studentklas)