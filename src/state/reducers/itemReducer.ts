import { Action } from "../Actions";
import { ActionType } from "../ActionType";
import { ItemJson } from "../ItemJson";

interface ItemState {
  loading: boolean;
  error: string | null;
  data: ItemJson[];
  totalCarbs: Number;
}

const initialState = {
  loading: false,
  error: null,
  data: [],
  totalCarbs: 0
};

const reducer = (
  state: ItemState = initialState,
  action: Action
): ItemState => {
  switch (action.type) {
    case ActionType.search_item:
      return { loading: true, error: null, data: [], totalCarbs: 0 };
    case ActionType.search_item_success:
      let data = action.payload;
      let totalCarbs = data.reduce(
        (accmulator, currentValue) =>
          accmulator + currentValue.carbohydrates_total_g,
        0
      );
      return {
        loading: false,
        error: null,
        data,
        totalCarbs
      };
    case ActionType.search_item_error:
      return { loading: false, error: action.payload, data: [], totalCarbs: 0 };
    default:
      return state;
  }
};

export default reducer;
