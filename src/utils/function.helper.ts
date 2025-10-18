// 
export const numbWithCommasDeci = (value: string) => {
  const sanitizedValue = value
    .replace(/[^0-9.]/g, "")
    .replace(/^(\d*\.\d{0,2}).*/, "$1")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return sanitizedValue
}

export const getNestedValue = (obj: any, path: string) => {
  // console.log(path)
  return path.split(/[\.\[\]]+/).filter(Boolean).reduce((acc, part) => acc && acc[part], obj);
};
