import moment from "moment";

export const formatDate = (date: string) => {
  return moment.utc(date).format("DD/MM/YYYY hh:mm");
};

export const removeCepMask = (cep: string): string => {
  return cep.replace(/\D/g, "");
};

export const maskCep = (cep: string): string => {
  const maskedCep = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  return maskedCep;
};
