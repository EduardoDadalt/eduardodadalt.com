const BIRTH_YEAR = 2002;
const BIRTH_MONTH_INDEX = 7; // agosto
const BIRTH_DAY = 10;

export default function getAge(now = new Date()): number {
  const month = now.getMonth();
  const hadBirthdayThisYear =
    month > BIRTH_MONTH_INDEX ||
    (month === BIRTH_MONTH_INDEX && now.getDate() >= BIRTH_DAY);

  return now.getFullYear() - BIRTH_YEAR - (hadBirthdayThisYear ? 0 : 1);
}
