class StudentDB {
    constructor() {
        this.students = new Map();
    }

    addStudent(id, student) {
        this.students.set(id, student);
    }

    getStudent(id) {
        return this.students.get(id);
    }

}
