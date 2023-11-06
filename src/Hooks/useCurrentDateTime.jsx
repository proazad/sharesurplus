const useCurrentDateTime = () => {
  // Create a new Date object
  const currentDate = new Date();
  // Get the current date and time
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentHours = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();

  const currentDateTime = `${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}`;
  return currentDateTime;
};

export default useCurrentDateTime;
