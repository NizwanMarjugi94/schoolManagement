CREATE TABLE IF NOT EXISTS students (
    id LONG NOT NULL PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    student_id VARCHAR(255) NOT NULL,
    student_classroom VARCHAR(255),
    student_age VARCHAR(255),
    student_gender VARCHAR(255),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS course (
    id LONG NOT NULL PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    course_code VARCHAR(255),
    course_description VARCHAR(255),
    course_instructor VARCHAR(255),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS registration (
    id LONG NOT NULL PRIMARY KEY,
    student_id VARCHAR(255) NOT NULL,
    course_code VARCHAR(255),
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);