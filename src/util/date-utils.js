import { DateTime } from 'luxon';

export function generateEventDateString(startISOString, endISOString) {
  const start = DateTime.fromISO(startISOString, { setZone: true });
  const end = DateTime.fromISO(endISOString, { setZone: true });

  // Single day event
  if (start.month === end.month && start.day === end.day) {
    const startString = start.toFormat('MMM d, yyyy h:mm a');
    const endString = end.toFormat('h:mm a');
    return `${startString} - ${endString}`;
  }

  // Multi day event
  const startString = start.toFormat('MMM d, yyyy h:mm a');
  const endString = end.toFormat('MMM d, yyyy h:mm a');
  return `${startString} - ${endString}`;
}
