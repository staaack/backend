import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import { getRepository } from "typeorm";
import * as ProjectRepository from '../../repository/ProjectRepository';

let add: RequestHandler = async (req, res) => {

	ProjectRepository.createProject(req.body.title).then((project) => {
  	res.send( project );
	})
	.catch(() => {
  		res.status(500).send({error : "cannot add project"});
	});
};

add = handleErrorMiddleware(add);

export {
  add
};
