export default (state = {
  sample: 'sample',
}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        sample: action.payload,
      };
    default:
      return state;
  }
};
