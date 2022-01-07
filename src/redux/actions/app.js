//Action Creators

export const storeImage = (image) => (dispatch) =>
  dispatch({ type: 'storeImage', payload: image });

export const storeImagePot = (image) => (dispatch) =>
  dispatch({ type: 'storeImagePot', payload: image });

export const storeImage3 = (image) => (dispatch) =>
  dispatch({ type: 'storeImage3', payload: image });

export const AddToFavorite = (image) => (dispatch) =>
  dispatch({ type: 'AddFav', payload: image });


