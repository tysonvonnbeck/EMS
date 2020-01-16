
-- Employee --
INSERT INTO employee(first_name, last_name, role_id) VALUES ("Adam", "Baum", 1);

-- departments --
INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Art");
INSERT INTO department (name) VALUES ("Engineering");

-- marketing dept. --
-- add roles -- Director(1) -- Marketing(1)
INSERT INTO roles (title, salary, department_id) VALUES ("Director", 200000, 2);
-- add roles -- Manager(2) -- Marketing(1)
INSERT INTO roles (title, salary, department_id) VALUES ("Manager", 120000, 2);
-- add roles -- Lead(3) -- Marketing(1)
INSERT INTO roles (title, salary, department_id) VALUES ("Lead", 100000, 20;
-- add roles -- Employee(4) -- Marketing(1)
INSERT INTO roles (title, salary, department_id) VALUES ("Employee", 90000, 2);

-- art dept. --
-- add roles -- Director(1) -- Art(2)
INSERT INTO roles (title, salary, department_id) VALUES ("Director", 100000, 1) ;
-- add roles -- Manager(2) -- Art(2)
INSERT INTO roles (title, salary, department_id) VALUES ("Manager", 90000, 1);
-- add roles -- Lead(3) -- Art(2)
INSERT INTO roles (title, salary, department_id) VALUES ("Lead", 80000, 1);
-- add roles -- Employee(4) -- Art(2)
INSERT INTO roles (title, salary, department_id) VALUES ("Employee", 70000, 1);

-- engineering dept. --
-- add roles -- Director(1) -- Engineering(3)
INSERT INTO roles (title, salary, department_id) VALUES ("Director", 220000, 2);
-- add roles -- Manager(2) -- Engineering(3)
INSERT INTO roles (id, title, salary, department_id) VALUES ("Manager", 140000, 2);
-- add roles -- Lead(3) -- Engineering(3)
INSERT INTO roles (title, salary, department_id) VALUES ("Lead", 120000, 2);
-- add roles -- Employee(4) -- Engineering(3)
INSERT INTO roles (title, salary, department_id) VALUES ("Employee", 100000, 2);
