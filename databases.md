## Types of Databases (db):
1. Relational databases (aka RDBMS or DQL databases)
2. Non-relational databases

### Relational DBs with examples
* representss data using tables and data points that are related to each other
* each row of a tavle is a record w/ a key that is represented by a unique ID
* Strengths: ACID
    * Atomicity -  when your commiting a change to a part of the db, the change won't happen unless all parts related to that change are also committed (EX: changing one table's user name must also change the result for the same user name in other tables for the change to be committed to the db)
    * (Data) consistency - when you make a copy (instance) of a table it will always have the same info in it as the original.
    * Isolation - Keeps transactions invisible to others until they are committed.
    * Durability - Once a transaction is committed, data changes are permanent.


### Questions to ask before choosing a relational DB:
##### [Source](https://www.oracle.com/database/what-is-a-relational-database/)
1. What are our data accuracy requirements? Will data storage and accuracy rely on business logic? Does our data have stringent requirements for accuracy (for example, financial data and government reports)?
2. Do we need scalability? What is the scale of the data to be managed, and what is its anticipated growth? Will the database model need to support mirrored database copies (as separate instances) for scalability? If so, can it maintain data consistency across those instances?
3. How important is concurrency? Will multiple users and applications need simultaneous data access? Does the database software support concurrency while protecting the data?
4. What are our performance and reliability needs? Do we need a high-performance, high-reliability product? What are the requirements for query-response performance? What are the vendor’s commitments for service level agreements (SLAs) or unplanned downtime?

### Types of Relational DBs:
* MySQL - used to store web application data
* 

### Non-Relational DBs (No-SQL):
* Strengths
    * Handles millions of entries better than relational DBs.

### Types of Views:
Views (updated as tables are updated.) vs Materialized Views (cached)