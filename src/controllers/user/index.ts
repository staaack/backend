import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import { getRepository } from "typeorm";
import { User } from '../../entity/User';
import { Session } from '../../entity/Session';
import * as bcrypt from 'bcrypt';
import * as uuid from 'uuid';

let signup: RequestHandler = async (req, res) => {

  let users = getRepository(User);

  let user = await users.find({
    where: {
      email: req.body.email
    }
  });

  if(user.length == 0)
  {
    bcrypt.hash(req.body.password, 8, (err, hash) => {
      let user : User = new User();

      user.email = req.body.email;
      user.name = req.body.name;
      user.title = req.body.title;
      user.password = hash;

      users.save(user);
      res.send(user);

    });
  }
  else
  {
    res.status(409).send({"error": "duplicate email"});
  }

};

let login: RequestHandler = async (req, res) => {

  let users = getRepository(User);

  let user = await users.find({
    where: {
      email: req.body.email
    }
  });


  if(user.length == 0)
  {
    res.status(409).send({"error": "duplicate email"});
  }
  else
  {
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(result == true)
      {        
        let sessions = getRepository(Session);
        sessions.delete({user_id: user[0].id});

        let session = new Session();

        session.user_id = user[0].id;
        session.token = uuid.v1();

        console.log(session);

        sessions.save(session);

        res.send({"message": "success"});
      }
      else
      {
        res.status(401).send({"error": "invalid password."});
      }
    });
  }

};


signup = handleErrorMiddleware(signup);
login = handleErrorMiddleware(login);

export {
  signup,
  login
};
