export default function getAge(): number {
  return (
    new Date().getFullYear() -
    2002 -
    (new Date().getMonth() > 6 && new Date().getDate() >= 10 ? 0 : 1)
  );
}
