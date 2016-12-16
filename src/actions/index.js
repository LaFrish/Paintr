import * as types from '../constants/ActionTypes'

export const selectTool = text => ({
  type: types.SELECT_TOOL,
  text
});
export const changeSize = text => ({
  type: types.CHANGE_SIZE,
  text
});
export const changeColor = color => ({
  type: types.CHANGE_COLOR,
  color
});
export const clearCanvas = ()  => ({
  type: types.RESET_CANVAS
});
export const savingCanvas = save  => ({
  type: types.SAVE_CANVAS,
  save
});
export const imageStamp = imageObject =>({
  type: types.IMAGE_STAMP,
  imageObject
});
