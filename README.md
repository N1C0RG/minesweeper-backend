## Ejecucion del servidor local 

Se tiene que hacer la base de datos de postgres primero y el archivo .env, para finalmente correrel servidor 

### Primero se crea la db y usuarios locales 

```
sudo service postgresql start
sudo -u postgres createuser --superuser minesweeper_user
sudo -u postgres psql 
ALTER USER minesweeper_user  WITH PASSWORD '12345678'; 
CREATE DATABASE minesweeper_db; 
psql -U minesweeper_user -d minesweeper_db -h 127.0.0.1
```

### En segundo lugar se crea el .env con todas las credenciales

``` 
echo "DB_USERNAME=minesweeper_user
DB_PASSWORD=12345678
DB_NAME=12345678
DB_HOST=127.0.0.1
PORT=3000 > .env
``` 

### Finalmente se corre el codigo para ejecutar el servidor 

``` 
yarn sequelize-cli db:create
yarn sequelize-cli db:migrate
yarn sequelize-cli db:seed:all
yarn dev
```
