import {
  GET_ALL_ROOM_SUCCESSFULLY,
  GET_ALL_ROOM_FAILED,
  SET_ACTIVE_ROOM,
  ADD_NEW_ROOM_SUCCESSFULLY,
  ADD_NEW_DEVICE_SUCCESSFULLY,
} from '../types';

const initialState = {
  roomList: [],
  activeRoomId: null,
};

const roomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_DEVICE_SUCCESSFULLY:
      const roomList = state.roomList;
      const room = roomList[action.activeRoomId];
      const gateway = room.gateways[0];
      gateway.devices = [...gateway.devices, action.payload];

      return {
        ...state,
        roomList: [...roomList],
      };
    case ADD_NEW_ROOM_SUCCESSFULLY:
      return {
        ...state,
        roomList: [action.payload, ...state.roomList],
      };
    case SET_ACTIVE_ROOM:
      return {
        ...state,
        activeRoomId: action.payload,
      };
    case GET_ALL_ROOM_SUCCESSFULLY:
      return {
        ...state,
        roomList: action.payload,
      };
    case GET_ALL_ROOM_FAILED:
      return {
        ...state,
        roomList: [],
      };
    default:
      return state;
  }
};

export default roomReducer;
