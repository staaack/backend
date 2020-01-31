import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import { getRepository } from "typeorm";
import { Timesheet } from '../../entity/Timesheet';

let add: RequestHandler = async (req, res) => {

  let repository = getRepository(Timesheet);
  
  let timesheet : Timesheet = new Timesheet();

  timesheet.email = req.body.email;
  timesheet.date = new Date(req.body.date);
  timesheet.hours = req.body.hours;
  timesheet.project_id = req.body.project_id;

  await repository.save(timesheet);

  res.send( timesheet );
};

let get: RequestHandler = async (req, res) => {

  let id = req.query.id;

  let repository = getRepository(Timesheet);

  const timesheet = await repository.find({
    where: {
      id: id
    }
  });

  res.send( timesheet );
};

let update: RequestHandler = async (req, res) => {

  let id = req.query.id;

  let repository = getRepository(Timesheet);

  const timesheet = await repository.findOne(id);
  timesheet.hours = req.body.hours;
  
  await repository.save(timesheet);

  res.send( timesheet );
};


let remove: RequestHandler = async (req, res) => {

  let id = req.query.id;

  let repository = getRepository(Timesheet);

  await repository.delete(id);

  res.send({
    success: true
  });
};

add = handleErrorMiddleware(add);
get = handleErrorMiddleware(get);
update = handleErrorMiddleware(update);
remove = handleErrorMiddleware(remove);

export {
  add,
  get,
  update,
  remove
};
