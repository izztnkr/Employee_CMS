INSERT INTO department(name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal");

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
  (1, 'Ronald', 'Firbank', 1, NULL),
  (2, 'Virginia', 'Woolf', 1, NULL),
  (3, 'Katherine', 'Mansfield', 4, NULL),
  (4, 'Dora', 'Carrington', 3, 1),
  (5, 'Edward', 'Bellamy', 3, 1),
  (6, 'Montague', 'Summers', 2, 2),
  (7, 'Octavia', 'Butler', 2, 2),
  (8, 'Unica', 'Zurn', 2, 4),
  
  (9, 'Piers', 'Gaveston', 6, 4),
  (10, 'Charles', 'LeRoi', 7, 3);