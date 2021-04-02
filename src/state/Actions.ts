import { ActionType } from "./ActionType";
import { Item } from "./IItem";

interface SearchItemAction {
  type: ActionType.search_item;
}

interface SearchItemSuccess {
  type: ActionType.search_item_success;
  payload: Item[];
}

interface SearchItemError {
  type: ActionType.search_item_error;
  payload: string;
}

export type Action = SearchItemAction | SearchItemSuccess | SearchItemError;
