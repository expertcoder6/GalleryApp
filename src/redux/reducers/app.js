
//   import constants from '../../constants';
// const {dispatchTypes} = constants;

//Reducers states

let userInitialState = {
  storedImage:[],
  storedImagePot:[],
  storedImage3:[],
  AddedFav:[]
};

export default (state = userInitialState, action) => {
  switch (action.type) {
    case 'storeImage':
      return {...state, storedImage: action.payload};
      case 'storeImagePot':
      return {...state, storedImagePot: action.payload};
      case 'storeImage3':
      return {...state, storedImage3: action.payload};
      case 'AddFav':
      return {...state, AddedFav: action.payload};
    default:
      return state;
  }
};