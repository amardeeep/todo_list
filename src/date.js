import {
  nextFriday,
  nextSaturday,
  nextSunday,
  nextThursday,
  nextTuesday,
  nextWednesday,
  nextMonday,
  addDays,
} from "date-fns";

const today = new Date().toDateString();

function dewDate(day, date = null, month = null, year = null) {
  if (day.toLowerCase() == "tomorrow") {
    let dewdate = addDays(today, 1).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next monday") {
    let dewdate = nextMonday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next tuesday") {
    let dewdate = nextTuesday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next wednesday") {
    let dewdate = nextWednesday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next thursday") {
    let dewdate = nextThursday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next friday") {
    let dewdate = nextFriday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next saturday") {
    let dewdate = nextSaturday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "next sunday") {
    let dewdate = nextSunday(today).toDateString();
    return dewdate;
  } else if (day.toLowerCase() == "choose from calendar") {
    function chooseDate(day, month, year) {
      let dateChoosen = new Date(year, month, day).toDateString();
      return dateChoosen;
    }
    return chooseDate(date, month, year);
  }
}
export { dewDate };
