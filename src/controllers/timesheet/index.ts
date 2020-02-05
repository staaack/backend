import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import * as TimesheetRepository from '../../repository/TimesheetRepository'

let add: RequestHandler = async (req, res) => {

  TimesheetRepository.createTimesheet(
    req.body.user_id,
    req.body.project_id,
    req.body.date,
    req.body.hour).then( timesheet =>{
      res.send( timesheet );
    });

};

let get: RequestHandler = async (req, res) => {

  let id = req.query.id;

  TimesheetRepository.getById(req.body.id).then( timesheet => {
    res.send( timesheet );
  })
  .catch( reason => {
    res.status(404).send({errror: "No timesheet"});
  });
};

let update: RequestHandler = async (req, res) => {

  let id = req.query.id;

  TimesheetRepository.updateById(req.body.id, req.body.hours).then( timesheet => {
    res.send( timesheet );
  })
  .catch(() => {
    res.status(404).send({errror: "No timesheet"});
  })
};


let remove: RequestHandler = async (req, res) => {

  let id = req.query.id;

  TimesheetRepository.deleteById(req.body.id).then(() => {
    res.send({
      "message": "successfully deleted"
    });
  })
  .catch(() => {
    res.send({
      "error": "error occured"
    });
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
