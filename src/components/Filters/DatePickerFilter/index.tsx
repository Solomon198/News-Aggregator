import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StyledCustomDatePicker } from "../styled.components";
import { IFilterProps } from "../../../types";
import { useRef } from "react";
import { IconButton } from "@mui/material";
import dayjs from "dayjs";

const CustomDatePickerFilter = ({
  onDateSelected,
}: Pick<IFilterProps, "onDateSelected">) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
      inputRef.current.click();
    }
  };

  const handleDateChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDateSelected?.(dayjs(new Date(e.target.value)));
  };
  return (
    <StyledCustomDatePicker>
      <IconButton onClick={handleIconClick}>
        <CalendarMonthIcon />
      </IconButton>
      <input
        id="date-picker"
        ref={inputRef}
        max={new Date().toISOString().split("T")[0]}
        type="date"
        style={{ visibility: "hidden", opacity: 0, width: 0, height: 0 }}
        onChange={handleDateChanged}
      />
    </StyledCustomDatePicker>
  );
};

export default CustomDatePickerFilter;
