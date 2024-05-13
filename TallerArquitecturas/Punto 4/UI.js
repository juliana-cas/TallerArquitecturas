class UI {
    constructor(manager) {
        this.manager = manager;
    }

    addStudent(id, name, age, major) {
        this.manager.registerStudent(id, name, age, major);
        console.log('Student added:', { id, name, age, major });
    }

    showStudentInfo(id) {
        const student = this.manager.getStudentInfo(id);
        console.log('Student Information:', student);
    }

}