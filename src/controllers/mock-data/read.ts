import { google } from 'googleapis';
import * as readline from 'readline';
import * as fs from 'fs';

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client: any, callback: any) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err: any, token: any) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      readData(oAuth2Client, callback);
    });
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function readData(auth: any, callback: any) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.batchGet({
    spreadsheetId: '1C_GqEIdO_F8M-WuxsYoFLK7-I8XNL6hmtr8V33wmGLU',
    ranges: [
      'Engineering!A6:K', 
      'Company information!A10:B14',
      'Company information!D10:F14',
      'Company information!A19:B23',
      'User information!A10:E14',
      'Timesheet information!B10:H21',
      'Project information!B2:D5',
      'Sales information!B10:G17',
      'Sales information!K9:M13'
    ],
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.valueRanges;
    callback(rows);
  });
}

export default (credentials: any, callback: any) =>{
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  getNewToken(oAuth2Client, callback);
};