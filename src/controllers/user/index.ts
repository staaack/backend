import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';

import * as UserRepository from '../../repository/UserRepository'
import * as SessionRepository from '../../repository/SessionRepository'
import * as bcrypt from 'bcrypt';

let signup: RequestHandler = async (req, res) => {

  let user = await UserRepository.getUserByEmail(req.body.email);


  if(user.length == 0)
  {
    UserRepository.createUser(
      req.body.email,
      req.body.name,
      req.body.title,
      req.body.password
    ).then( user => {
      res.send(user);
    });
  }
  else
  {
    res.status(409).send({"error": "duplicate email"});
  }

};

let login: RequestHandler = async (req, res) => {

  let user = await UserRepository.getUserByEmail(req.body.email);

  if(user.length == 0)
  {
    res.status(409).send({"error": "duplicate email"});
  }
  else
  {
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if(result == true)
      {
        SessionRepository.deleteWithUserId(user[0].id);
        SessionRepository.createSession(user[0].id).then( token => {
          res.send({token: token})
        });
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
