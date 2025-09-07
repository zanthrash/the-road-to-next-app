export const getTicket = async (ticketId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Promise((resolve) => {
    resolve(null);
  });
};
