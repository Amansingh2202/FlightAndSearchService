/

   -src/
        index.js// server
        models/
        controllers/
        middlewares/
        utils/
        config/ 
        repository/
 

 // dont be uploading below files in the production 
     -test/[later]     
     -static 
     -temp 


  ## DB design
   - Airplane table 
   -flight table
   - Airport 
   -city 

   - A flight belongs to an airplane but  one airplane can be used in multiple  flights 
   -A city has many airports but one airport belongs to a city 
   -One airport can have many flights , but a flight belongs to one airport 