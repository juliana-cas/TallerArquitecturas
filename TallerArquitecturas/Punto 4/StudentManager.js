class StudentManager {
    constructor(db) {
        this.db = db;
    }

    registerStudent(id, name, age, major) {
        const student = { id, name, age, major };
        this.db.addStudent(id, student);
    }

    getStudentInfo(id) {
        return this.db.getStudent(id);
    }

}
