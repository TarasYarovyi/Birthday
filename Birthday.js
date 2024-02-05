function isTarikBirthday() {
  const today = new Date(new Date().toISOString().split("T")[0]);
  const birthday = new Date(1988, 1, 4);
  const nextBirthday = new Date(
    today.getFullYear(),
    birthday.getMonth(),
    birthday.getDate()
  );

  if (
    today.toISOString().split("T")[0] !=
    nextBirthday.toISOString().split("T")[0]
  ) {
    nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
  }
  const daysLeftUntillNextBirthday = Math.floor(
    (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
  return daysLeftUntillNextBirthday === 0
    ? `Today is ${
        nextBirthday.toISOString().split("T")[0]
      } Check your mail box for order details about your gift`
    : `You need to survive ${daysLeftUntillNextBirthday} more days untill next birthday`;
}
console.log(isTarikBirthday());
