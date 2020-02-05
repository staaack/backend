import * as uuid from 'uuid';
import { getRepository } from "typeorm";
import { Session } from '../entity/Session';

const deleteWithUserId = (userId: number) => {
  let sessions = getRepository(Session);
  sessions.delete({user_id: userId});
}

const createSession = (userId: number) : Promise<string> => {
  let sessions = getRepository(Session);

  var promise : Promise<string> = new Promise((resolve, reject) => {
    let session = new Session();

    session.user_id = userId;
    session.token = uuid.v1();

    sessions.save(session).then( session => {
      resolve(session.token)
    });
  });

  return promise;
}

export {
  deleteWithUserId,
  createSession
};