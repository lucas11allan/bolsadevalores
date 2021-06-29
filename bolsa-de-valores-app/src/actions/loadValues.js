export const LOAD_VALUES = 'LOAD_VALUES';

const loadValues = (values) => ({
  type: LOAD_VALUES,
  values,
});

export default loadValues;
