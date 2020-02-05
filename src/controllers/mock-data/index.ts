import { RequestHandler } from 'express';
import handleErrorMiddleware from '../../middleware/handle-error-middleware';
import * as read from './read';
import { readFile } from 'fs';

var mock_data: any;

readFile('src/res/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);

  read.default(JSON.parse(content.toString('utf8')), (res: any) => {
    mock_data = res;
  });
});


let get: RequestHandler = async (req, res) => {
  res.send({
  	"Engineering": mock_data[0]['values'],
  	"Company information": {
  		"Employee list": mock_data[1]['values'],
  		"Clients list": mock_data[2]['values'],
  		"Departments": mock_data[3]['values']
  	},
  	"User information": mock_data[4]['values'],
  	"Timesheet information": mock_data[5]['values'],
  	"Project information": mock_data[6]['values'],
  	"Sales": {
  		"Financial data": mock_data[7]['values'],
  		"Financial Metrics": mock_data[8]['values']
  	}
  });
};

get = handleErrorMiddleware(get);

export default get;
