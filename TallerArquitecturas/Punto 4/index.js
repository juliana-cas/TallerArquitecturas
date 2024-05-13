const db = new StudentDB();
const manager = new StudentManager(db);
const ui = new UI(manager);

// Adding students
ui.addStudent(1, 'Juan Arango', 20, 'System Engineering');
ui.addStudent(2, 'Laura Villa', 22, 'Medicine');

// Displaying information of a student
ui.showStudentInfo(1);
