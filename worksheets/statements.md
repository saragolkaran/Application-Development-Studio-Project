# SQL Statements

For this worksheet you will need to provide an example of your own SQL statement. 

## INSERT

Example:
```sql
INSERT INTO performance (performancecId, festivalId, startTime, endtime) VALUES(1000000001, 1100000001, "10:00", "11:00");
```

## SELECT with Filtering and Pagination

Example:
```sql
SELECT * FROM performance where festivalId = 11000000001 AND startTime_gt > 1000 LIMIT 5 OFFSET 1
```
