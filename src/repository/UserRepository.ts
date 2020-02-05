import * as bcrypt from 'bcrypt';
import { getRepository } from "typeorm";
import { User } from '../entity/User';

const getUserByEmail = (email: string) => {
  let users = getRepository(User);

  return users.find({
    where: {
      email: email
    }
  });
}

const createUser = (email: string, name: string, title: string, password: string) : Promise<User> => {
  let users = getRepository(User);

  var promise : Promise<User> = new Promise((resolve, reject) => {
    bcrypt.hash(password, 8, (err, hash) => {
      let user : User = new User();

      user.email = email;
      user.name = name;
      user.title = title;
      user.password = hash;
      users.save(user).then( user => {
        resolve(user);
      });
    })
  });

  return promise;
}

export {
  createUser,
  getUserByEmail
};