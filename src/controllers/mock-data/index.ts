import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import * as reader from './read';
import { readFile } from 'fs';

var mock_data: any;

const readData = () => {
	console.log("------ reading -------");

	readFile('src/res/credentials.json', (err, content) => {
	  if (err) return console.log('Error loading client secret file:', err);

	  reader.default.read((res: any) => {
	    mock_data = res
	  });
	});
}

setInterval(() => {
	readData();
}, 1000 * 60 * 10);

readData();

let get: RequestHandler = async (req, res) => {
  res.send(mock_data);
};

let load: RequestHandler = async (req, res) => {
	readData();
	res.send({message: "updaing mock data"});
};

get = handleErrorMiddleware(get);
load = handleErrorMiddleware(load);

export default {
	get,
	load
};
