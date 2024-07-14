import "dayjs/locale/id";

import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";

dayjs.locale("id");

type TDateTimeFormat =
  | "dateWithDay"
  | "dateWithDay-2"
  | "date"
  | "time"
  | "datetime"
  | "datetime-2"
  | "shortDate"
  | "fullDate"
  | "monthAndYear"
  | "dayanddatetime"
  | "date-2"
  | "date-api"
  | "date-month"
  | "date-2-time";

export const date = (value?: dayjs.ConfigType) => dayjs(value);

// inputparam date = dateTimeFormta("2024-07-30", "datetime")

export const dateTimeFormat = (
  dateString: string,
  format: TDateTimeFormat = "datetime"
) => {
  let formatString = "";
  if (!isEmpty(dateString)) {
    switch (format) {
      case "dateWithDay":
        formatString = dayjs(dateString).format("ddd, DD MMM YYYY");
        break;
      case "dateWithDay-2":
        formatString = dayjs(dateString).format("ddd, DD MMMM YYYY");
        break;
      case "date":
        formatString = dayjs(dateString).format("DD MMM YYYY");
        break;
      case "date-2":
        formatString = dayjs(dateString).format("DD/MM/YYYY");
        break;
      case "date-2-time":
        formatString = dayjs(dateString).format("DD/MM/YYYY, HH:mm");
        break;
      case "time":
        formatString = dayjs(dateString).format("HH:mm");
        break;
      case "datetime":
        formatString = dayjs(dateString).format("DD MMM YYYY HH:mm");
        break;
      case "datetime-2":
        formatString = dayjs(dateString).format("DD MMM YYYY, hh:mm");
        break;
      case "shortDate":
        formatString = dayjs(dateString).format("DD MMM YY");
        break;
      case "fullDate":
        formatString = dayjs(dateString).format("DD MMMM YYYY");
        break;
      case "monthAndYear":
        formatString = dayjs(dateString).format("MMMM YYYY");
        break;
      case "dayanddatetime":
        formatString = dayjs(dateString)
          .locale("id")
          .format("dddd, DD MMM YYYY hh:mm");
        break;
      case "date-api":
        formatString = dayjs(dateString).format("YYYY-MM-DD");
        break;
      case "date-month":
        formatString = dayjs(dateString).format("DD MMMM");
        break;
    }
  }
  return formatString;
};

export const getDay = (dateString: string) => {
  const momentDate = dayjs(dateString);
  return momentDate.format("d");
};

export const getDate = (dateString: string) => {
  const momentDate = dayjs(dateString);
  return momentDate.format("D");
};

export const getMonth = (dateString: string) => {
  const momentDate = dayjs(dateString);
  return momentDate.format("MMM");
};

export const getYear = (dateString: string) => {
  const momentDate = dayjs(dateString);
  return momentDate.format("YYYY");
};

export const convertIndonesiaDay = (day: string) => {
  let dayString = "";
  switch (day) {
    case "1":
      dayString = "Senin";
      break;
    case "2":
      dayString = "Selasa";
      break;
    case "3":
      dayString = "Rabu";
      break;
    case "4":
      dayString = "Kamis";
      break;
    case "5":
      dayString = "Jumat";
      break;
    case "6":
      dayString = "Sabtu";
      break;
    case "7":
      dayString = "Minggu";
      break;
    default:
      break;
  }

  return dayString;
};

export const dateToString = (d: Date) => {
  let formatString = "";
  if (!isEmpty(d)) {
    formatString = dayjs(d).format("YYYY-MM-DD");
  }
  return formatString;
};

export const timeNow = dayjs();
