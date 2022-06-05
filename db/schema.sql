

CREATE TABLE department(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(250),
    salary DECIMAL,
    department_id INTEGER,
    CONSTRAINT departmentKey FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT roleKey FOREIGN KEY (role_id) REFERENCES role(id)
)