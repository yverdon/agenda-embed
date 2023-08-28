import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/fr';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

export const dateFormatter = new Intl.DateTimeFormat('fr-CH', {
  dateStyle: 'medium',
});

export const DATE_FORMAT = 'YYYY-MM-DD';

export function formatDate(date: Dayjs) {
  return date.format(DATE_FORMAT);
}

export function today() {
  return formatDate(dayjs());
}

export function tomorrow() {
  return formatDate(dayjs().add(1, 'day'));
}

export function weekend() {
  const today = dayjs();
  const todayWeekday = today.day();

  let saturday = null;
  let sunday = null;

  if (todayWeekday === 6 /* Saturday */) {
    saturday = today;
    sunday = today.add(1, 'day');
  } else if (todayWeekday === 0 /* Sunday */) {
    saturday = today.subtract(1, 'day');
    sunday = today;
  } else {
    saturday = dayjs().weekday(6);
    sunday = dayjs().weekday(7);
  }

  return { start: formatDate(saturday), end: formatDate(sunday) };
}

export function week() {
  const today = dayjs();
  const todayWeekday = today.day();

  let monday = null;
  let sunday = null;

  if (todayWeekday === 1 /* Monday */) {
    monday = today;
  } else {
    monday = today.weekday(-6);
  }

  if (todayWeekday === 0 /* Sunday */) {
    sunday = today;
  } else {
    sunday = today.weekday(7);
  }

  return { start: formatDate(monday), end: formatDate(sunday) };
}
