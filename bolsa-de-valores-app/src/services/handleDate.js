export default function handleDate(date) {
  let formatedDate = new Date(date);
  formatedDate = `${formatedDate.getHours()}:${formatedDate.getMinutes()}`;
  return (formatedDate);
}
