import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import db from './db.js'
dotenv.config( )

const app = express();

app.use(express.json());
app.use(session({
  secret: process.env.SESSION_KEY
}));

app.post('/api/login', (req, res) => {
  const {email, password} = req.body
  const user = db.find((user) => user.email === email && user.password === password);
  if(user) {
    delete user.password;
    req.session.user = user;
    return res.end();
  }
  res.status(401).end()
});

app.use((req, res, next) => {
  if (req.session.user) {
    return next()
  }
  res.status(401).end();
})

app.get('api/secret', (req, res) => {
  res.json({
    email: req.session.user.email
  })
})

app.listen(process.env.PORT ?? 3456, () => {
  console.log("Ready steady go")
})
