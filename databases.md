### Types of Databases (db):
1. Relational databases
2. Non-relational databases

#### Relational DBs with examples
* representss data using tables and data points that are related to each other
* each row of a tavle is a record w/ a key that is represented by a unique ID
* Strengths: ACID
    * Atomicity -  when your commiting a change to a part of the db, the change won't happen unless all parts related to that change are also committed (EX: changing one table's user name must also change the result for the same user name in other tables for the change to be committed to the db)
    * (Data) consistency - when you make a copy (instance) of a table it will always have the same info in it as the original.
    * Isolation - Keeps transactions invisible to others until they are committed.
    * Durability - Once a transaction is committed, data changes are permanent.
