export const formatDateMonthYearWithCapitalizedMonth = (dateString) => {
  const date = new Date(dateString);

  const options = { month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const formattedDateCapitalized = formattedDate.replace(/^\w/, (c) =>
    c.toUpperCase()
  );
  return formattedDateCapitalized;
};

export const formatDateFullDateTime = (dateString) => {
  const date = new Date(dateString);

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
