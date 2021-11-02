use employees_db

INSERT INTO department(ID, department_name)
VALUES
(1, "Sales"),
(2, "Engineering"),
(3, "Finance"),
(4, "Legal");

INSERT INTO roles(ID, title, salary, department_id)
VALUES
(1, "Sales Lead", 1000000.00, 1),
(2, "Salesperson", 8000000.00, 1),
(3, "Lead Engineer", 1500000.00, 2),
(4, "Software Engineer", 1200000.00, 2),
(5, "Accountant", 1500000.00, 3),
(6, "Legal Team Lead", 2000000.00, 4),
(7, "Lawyer", 1900000.00, 4);

INSERT INTO employees (ID, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Ronald', 'Firbank', "Manager", 0),
  (2, 'Virginia', 'Woolf', "Manager", 0),
  (3, 'Katherine', 'Mansfield', "Manager", 0),
  (4, 'Dora', 'Carrington',"Sales Lead", 1),
  (5, 'Edward', 'Bellamy', "Salesperson", 1),
  (6, 'Montague', 'Summers', "Software Engineer", 2),
  (7, 'Octavia', 'Butler', "Accountant", 2),
  (8, 'Unica', 'Zurn', "Legal Team Lead", 3),
  (9, 'Piers', 'Gaveston', "Lawyer", 2),
  (10, 'Charles', 'LeRoi', "Software Engineer", 3);