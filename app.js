const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

let user = {
    id: 'sgaasasafaasfafasfsafafsa',
    email: 'alice@gmail.com',
    password: "dshaaaahaaha;'agasaaaagaga",
};

//because not a production app just for learning i will not make a env or db

const JWT_SECRET = 'some super secret...';

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/forget-password', (req, res, next) => {
    res.render('forgot-password');
});

app.post('/forget-password', (req, res, next) => {
    const { email } = req.body;

    //make sure this the user exist in database

    if (email !== user.email) {
        res.send('User not registered');
        return;
    }

    const secret = user.password;

    const payload = {
        email: user.email,
        id: user.id,
    };

    const token = jwt.sign(payload, secret, { expiresIn: '15m' });
    const link = `http://localhost:3000/reset-password/${user.id}/${token}`;
    console.log(link);
    res.send('Passsword rest link has been sent to your email');
});

// ...
// ...
app.get('/reset-password/:id/token', (req, res, next) => {
  const { id, token } = req.params;

  // check if this id exists in the database
  if (id !== user.id) {
      res.send('Invalid id ...');
      return;
  }

  // We have a valid id, and we have a valid user with that id
  const secret = JWT_SECRET + user.password;
  try {
      const payload = jwt.verify(token, secret);
     user.password = password
     res.send(user)
  } catch (error) {
      console.log(error.message);
      res.send(error.message);
  }
});
// ...


app.post('/reset-password/:id/:token', (req, res, next) => {
const {id,token} = req.params
res.send(user)
});

app.listen(3000, () => {
    console.log('server running');
});
