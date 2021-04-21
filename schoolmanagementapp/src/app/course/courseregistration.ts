export interface CourseRegistration {
    id: number;
    courseName: String;
    courseCode: String;
    studentList: [
        studentName: String,
        studentId: String,
        studentClassroom: String,
        studentAge: String
    ];
}