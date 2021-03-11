# stock-controller
A simple way to control things like maximum and minimum quantity of products in stock, purchase value and resale value of each product.



&nbsp;

🛠️ This project is still under development.

---

&nbsp;
## Getting started


&nbsp;
### Clone this repository
```
git clone https://github.com/rafatrigo/stock-controller.git
```

---

&nbsp;
### Install the dependencies

```sh
#go to the project folder
cd stock-controller

#install the dependencies
yarn
```

---

&nbsp;
### Docker

With the Docker properly installed, make sure to create the database container.
```sh
docker run --name CONTAINER_NAME -e POSTGRES_USER=USER_NAME -e POSTGRES_PASSWORD=USER_PASSWORD -e POSTGRES_DB=DATABASE_NAME -p 5432:5432 -d postgres
```
**Obs:**

Whenever you shut down or restart the computer the database container needs to be started.
```sh
#start the container
sudo docker start CONTAINER_NAME_OR_ID

#to confirm that the container has actually started
#list active containers
sudo docker ps
```

If for some reason you forget the name of your container, execute the command:
```sh
#lists all the containers on your computer
sudo docker ps -a
```

Duplicate the `.env.example` file, removing the` .example` part of the name (leaving only `.env`). After that, open the `.env` file and add the correct values to the variables to match what you entered when creating the Docker container.

Example:
```
DB_TYPE='postgres'
DB_HOST='localhost'
DB_USERNAME=USER_NAME
DB_PASSWORD=USER_PASSWORD
DB_NAME=DATABASE_NAME
```

After that run the migrations and start the backend.
```sh
#run the migrations
yarn typeorm migration:run

#start the backend
yarn dev:server
```
---


&nbsp;
## Back-end


### Products

- [x] Register a new product
- [x] Delete a product
- [x] Edit a product
- [x] List products
- [x] Increment quantity
- [x] Decrement quantity

### Categories

- [x] Create a categoty
- [x] List categories
- [x] Delete category

### Users

- [x] Register a new user
- [x] Delete a user
- [x] Edit user
- [x] Authenticate user - token JWT
- [ ] Password recovery
---


&nbsp;
## Front-end

I haven't thought about it yet, I'll finish the backend first 😅
