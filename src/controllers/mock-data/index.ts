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
  res.send( mock_data );
};

get = handleErrorMiddleware(get);

export default get;
