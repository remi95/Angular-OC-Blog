export const randomDate = () => {
  const start = new Date('2019-11-11');
  const end = new Date('2010-05-01');

  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
