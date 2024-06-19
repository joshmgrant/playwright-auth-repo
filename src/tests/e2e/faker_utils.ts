import { faker } from '@faker-js/faker';

type mailServiceType = 'gmail' | 'outlook'

export function generateEmailSubject(mailService: mailServiceType) {
  if (mailService === 'gmail') {
    return `Gmail Message ${faker.color.human()} ${faker.number.int()}`;
  }
  else {
    return `Outlook Message ${faker.color.human()} ${faker.number.int()}`;
  }
}
