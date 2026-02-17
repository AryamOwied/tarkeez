export async function fetchHolidays() {
  const res = await fetch(
    "https://tallyfy.com/national-holidays/api/SA/2026.json"
  );

  const data = await res.json();

  return data.holidays;
}

