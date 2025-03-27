import { filtersDefaultState } from "../../const/utils";

export default function filterReducer(
  state: typeof filtersDefaultState,
  action: {
    type: "SET_FILTER_VALUE";
    value: string | number;
    field: keyof typeof filtersDefaultState;
  }
) {
  switch (action.type) {
    case "SET_FILTER_VALUE": {
      state[action.field] = action.value as string;
      return { ...state, [action.field]: action.value as string };
    }
  }
}
