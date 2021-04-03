import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../Actions";
import { ActionType } from "../ActionType";
import { ItemJson } from "../ItemJson";

export const searchForItem = (query: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.search_item
    });

    try {
      const { data } = await axios.get(
        "https://api.calorieninjas.com/v1/nutrition",
        {
          headers: { "X-Api-Key": "xxx" },
          params: {
            query
          }
        }
      );
      const items: ItemJson[] = data.items;
      console.log(items);
      dispatch({
        type: ActionType.search_item_success,
        payload: items
      });
    } catch (error) {
      dispatch({
        type: ActionType.search_item_error,
        payload: error.message
      });
    }
  };
};
