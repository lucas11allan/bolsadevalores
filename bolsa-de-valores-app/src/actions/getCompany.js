export const GET_COMPANY = 'GET_COMPANY';

const getCompany = (name) => ({
  type: GET_COMPANY,
  companyName: name,
});

export default getCompany;
