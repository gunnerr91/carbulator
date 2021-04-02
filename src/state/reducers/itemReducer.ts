import { Action } from "../Actions";
import { ActionType } from "../ActionType";
import { Item } from "../IItem";

interface ItemState {
  loading: boolean;
  error: string | null;
  data: Item[];
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (
  state: ItemState = initialState,
  action: Action
): ItemState => {
  switch (action.type) {
    case ActionType.search_item:
      return { loading: true, error: null, data: [] };
    case ActionType.search_item_success:
      return { loading: false, error: null, data: action.payload };
    case ActionType.search_item_error:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
