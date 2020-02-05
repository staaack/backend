import { getRepository } from "typeorm";
import { Project } from '../entity/Project';

const createProject = (title: string) : Promise<Project> => {
  let sessions = getRepository(createProject);

  var promise : Promise<Project> = new Promise((resolve, reject) => {
    let project = new Project();

    project.title = title;

    sessions.save(project).then( session => {
      resolve(project)
    })
    .catch(() => {
      reject()
    });
  });

  return promise;
}

export {
  createProject
};