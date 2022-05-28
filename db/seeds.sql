INSERT INTO department (id, name)
VALUES
("Management")
("Development")
("Support")
("Executive")
("People Team")
("Customer Success")

INSERT INTO role (id, title, salary, department_id)

VALUES
("Support Team Manager", 180000, 1)
("Software Developer", 250000, 2)
("Recruiter", 60000, 5)
("Site Reliability Engineer", 140000, 3)
("Senior Site Reliability Engineer", 170000, 3)
("Account Manager", 120000, 6)
("VP", 320000, 4)
("Associate Site Reliability Engineer", 100000, 3)
("Human Resources Associate", 80000, 5)
("Quality Assurance Engineer", 220000, 2)
("Tech Team Lead", 155000, 1)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Steve", "Jobs", 1)
("Kevin", "Sutton", 2)
("Eric", "Smith", 3)
("Brittney", "Jacobs", 4)
("Ansir", "Therou", 6)
("Dennis", "Leary", 5)
















INSERT INTO employee (id, first_name, last_name, role_id, manager_id)

VALUES
(1, 'Byron', 'Stephenson', 4, 5);