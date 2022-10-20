
CREATE TABLE tasks (
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    status varchar(255),
    dateAdded DATE,
    dateUpdated DATE(255)
);

-- SQL Queries 
--a)
SELECT *
FROM tasks
ORDER BY dateUpdated DESC
WHERE status = "Completed";


--b)
SELECT *
FROM tasks
WHERE title LIKE "%manager%";

--c)
UPDATE tasks
SET status = "Completed"
WHERE status = "Pending" AND "To do" 

