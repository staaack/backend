import * as uuid from 'uuid';
import { getRepository } from "typeorm";
import { Timesheet } from '../entity/Timesheet';

const createTimesheet = (userId: number, projectId: number, date: Date, hours: string) : Promise<Timesheet> => {
  let timesheets = getRepository(Timesheet);

  var promise : Promise<Timesheet> = new Promise((resolve, reject) => {
    let timesheet = new Timesheet();

    timesheet.user_id = userId;
    timesheet.project_id = projectId;
    timesheet.date = date;
    timesheet.hours = hours;

    timesheets.save(timesheet).then( session => {
      resolve(timesheet)
    });
  });

  return promise;
}

const getById = (id: number) : Promise<Timesheet> => {
	let timesheets = getRepository(Timesheet);

	var promise : Promise<Timesheet> = new Promise((resolve, reject) => {
		timesheets.find({id: id}).then( timesheet => {
			if(timesheet.length == 0)
			{
				reject(timesheet);
			}
			else
			{
				resolve(timesheet[0]);
			}
		})
	});

	return promise;
}

const updateById = (id: number, hours: string) : Promise<Timesheet> => {
	let timesheets = getRepository(Timesheet);

	var promise : Promise<Timesheet> = new Promise((resolve, reject) => {
		timesheets.find({id: id}).then( timesheetList => {
			if(timesheetList.length == 0)
			{
				reject();
			}
			else
			{
				timesheetList[0].hours = hours;
				timesheets.save(timesheetList[0]).then( timesheet => {
					resolve(timesheet);
				});
			}
		})
	});

	return promise;
}

const deleteById = (id: number) : Promise<boolean> => {
	let timesheets = getRepository(Timesheet);

	var promise : Promise<boolean> = new Promise((resolve, reject) => {
		timesheets.delete({id: id}).then( timesheetList => {
			resolve(true)
		})
		.catch(() => {
			reject()
		})
	});

	return promise;
}


export {
  createTimesheet,
  getById,
  updateById,
  deleteById
};