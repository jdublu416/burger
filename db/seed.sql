-- use insert to populate burger table with three entries

-- Make sure you're in the `db` folder of your app.

--    * Start MySQL command line tool and login: `mysql -u root -p`.

--    * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

--    * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

--    * Close out of the MySQL command line tool: `exit`.

insert into burgers (burger_name, devoured)
values ('bacon cheeseburger', false);

insert into burgers (burger_name, devoured)
values ('classic cheeseburger', false);

insert into burgers (burger_name, devoured)
values ('bleu burger', false);