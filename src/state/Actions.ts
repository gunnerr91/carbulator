import { ActionType } from "./ActionType";
import { ItemJson } from "./ItemJson";

interface SearchItemAction {
  type: ActionType.search_item;
}

interface SearchItemSuccess {
  type: ActionType.search_item_success;
  payload: ItemJson[];
}

interface SearchItemError {
  type: ActionType.search_item_error;
  payload: string;
}

export type Action = SearchItemAction | SearchItemSuccess | SearchItemError;
