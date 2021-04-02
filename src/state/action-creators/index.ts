import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../Actions";
import { ActionType } from "../ActionType";

export const searchForItem = (query: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.search_item
    });

    try {
      const { data } = await axios.get(
        "https://api.calorieninjas.com/v1/nutrition",
        {
          params: {
            query
          }
        }
      );
      const names = data.objects.map((result: any) => {
        return result.name;
      });

      dispatch({
        type: ActionType.search_item_success,
        payload: names
      });
    } catch (error) {
      dispatch({
        type: ActionType.search_item_error,
        payload: error.message
      });
    }
  };
};
