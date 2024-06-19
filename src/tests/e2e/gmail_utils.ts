import type { Auth } from 'googleapis';
import { google } from 'googleapis'

export function authorize(): Auth.OAuth2Client {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URL,
  );

  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })
  return oAuth2Client;
}

/**
 * Returns the contents of the last message found.
 * Usually this is latest message sent to the account
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client
 */
export async function getLastMessage(auth: Auth.OAuth2Client) {
  const gmail = google.gmail({ version: 'v1', auth });
  const response = await gmail.users.messages.list({ userId: 'me' });
  const responseData = response.data;
  const lastMsgId: any = responseData.messages;

  const getRes = await gmail.users.messages.get({ userId: 'me', id: lastMsgId });

  // this retrieves the "snippet" part of the email
  // await console.log(getRes.data.snippet);
  // this retrieves
  return getRes.data.payload;
}

/**
 * Filter function to find a "From" header for testing
 *
 * @param {Array} arr an array of objects containing header information
 */
export function getFromEmailAddress(arr: Array<any>) {
  return arr.filter(element => element.name === 'From');
};

/**
 * Filter function to find a "Subject" header for testing
 *
 * @param {Array} arr an array of objects containing header information
 */
export function getEmailSubject(arr: Array<any>) {
  return arr.filter(element => element.name === 'Subject');
}
