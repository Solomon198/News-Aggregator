import { filtersDefaultState } from "../../const/utils";

export default function filterReducer(
  state: typeof filtersDefaultState,
  action: {
    type: "SET_FILTER_VALUE";
    value: string | number;
    label: string;
    field: keyof typeof filtersDefaultState;
  }
) {
  switch (action.type) {
    case "SET_FILTER_VALUE": {
      return {
        ...state,
        [action.field]: {
          label: action.label,
          value: action.value,
        },
      };
    }
  }
}
