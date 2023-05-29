export const useAlertObject = () => {
  const alertObject = (obj: object) => {
    const objString = JSON.stringify(obj, null, 2);
    alert(objString);
  };

  return { alertObject };
};
