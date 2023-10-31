const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];

months[0] = "Jan";

console.log(months);

months[4] = "May";

months[5] = "June";

console.log(months);

console.log(months.length);

months.push("Dec");

console.log(months);

months.pop();

console.log(months);

months.splice(6, 1);

console.log(months);
