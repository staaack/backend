import * as credential from '../../res/interface-213701-f50d26f863b3.json';

const { GoogleSpreadsheet } = require('google-spreadsheet');


async function read(callback: any){

  const doc = new GoogleSpreadsheet('1C_GqEIdO_F8M-WuxsYoFLK7-I8XNL6hmtr8V33wmGLU');

  await doc.useServiceAccountAuth(credential);
  await doc.loadInfo();

  var mockData = {
    "Engineering": await doc.sheetsByIndex[0].getCellsInRange('A6:R'),
    "Company information": {
      "Employee list": await doc.sheetsByIndex[1].getCellsInRange('A10:B14'),
      "Clients list": await doc.sheetsByIndex[1].getCellsInRange('D10:F14'),
      "Departments": await doc.sheetsByIndex[1].getCellsInRange('A19:B23')
    },
    "User information": await doc.sheetsByIndex[2].getCellsInRange('A10:E14'),
    "Timesheet information": await doc.sheetsByIndex[3].getCellsInRange('B10:H21'),
    "Project information": await doc.sheetsByIndex[4].getCellsInRange('B2:D5'),
    "Sales": {
      "Financial data": await doc.sheetsByIndex[5].getCellsInRange('B10:G17'),
      "Financial Metrics": await doc.sheetsByIndex[5].getCellsInRange('K9:M13')
    }
  }

  callback(mockData);
}

export default {
  read
};