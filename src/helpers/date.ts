import dayjs, { type Dayjs } from 'dayjs';
import 'dayjs/locale/fr';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);
dayjs.locale('fr');

export const DATE_FORMAT_HUMAN = 'D MMM YYYY';
export const DATE_FORMAT_ISO = 'YYYY-MM-DD';

export function formatDate(date: Dayjs) {
  return date.format(DATE_FORMAT_HUMAN);
}

export function formatDateIso(date: Dayjs) {
  return date.format(DATE_FORMAT_ISO);
}

export function humanizeDatesPair(s: string, e: string): string {
  const start = dayjs(s);
  const end = dayjs(e);

  if (s === e) {
    return formatDate(start);
  }
  if (start.year() !== end.year()) {
    return `Du ${formatDate(start)} au ${formatDate(end)}`;
  }
  if (start.month() !== end.month()) {
    return `Du ${start.format('D MMM')} au ${formatDate(end)}`;
  }
  return `Du ${start.format('D')} au ${formatDate(end)}`;
}

export function today() {
  return formatDateIso(dayjs());
}

export function tomorrow() {
  return formatDateIso(dayjs().add(1, 'day'));
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

  return { start: formatDateIso(saturday), end: formatDateIso(sunday) };
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

  return { start: formatDateIso(monday), end: formatDateIso(sunday) };
}
