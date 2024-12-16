

export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", { year: 'numeric', month: 'long',day: 'numeric'})

}