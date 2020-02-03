import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import { getRepository } from "typeorm";
import { Project } from '../../entity/Project';

let add: RequestHandler = async (req, res) => {

  let repository = getRepository(Project);
  
  let project : Project = new Project();

  project.title = req.body.title;

  await repository.save(project);

  res.send( project );
};

add = handleErrorMiddleware(add);

export {
  add
};
