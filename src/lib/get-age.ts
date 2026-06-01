export default function getAge(): number {
  const today = new Date();
  const birthdayHasPassed =
    today.getMonth() > 6 || (today.getMonth() === 6 && today.getDate() >= 10);

  return today.getFullYear() - 2002 - (birthdayHasPassed ? 0 : 1);
}
