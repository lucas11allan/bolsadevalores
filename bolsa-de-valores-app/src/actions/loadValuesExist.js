export const LOAD_VALUES_EXIST = 'LOAD_VALUES_EXIST';

const loadValuesExist = (values) => ({
  type: LOAD_VALUES_EXIST,
  values,
});

export default loadValuesExist;
