import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InputLabel from "@mui/material/InputLabel";
import { StyledCustomDatePicker } from "../styled.components";
import { IFilterProps } from "../../../types";

const CustomDatePickerFilter = ({
  onDateSelected,
}: Pick<IFilterProps, "onDateSelected">) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledCustomDatePicker>
        <InputLabel sx={{ fontSize: 14 }}>Date</InputLabel>

        <DatePicker
          onChange={(value) => {
            onDateSelected?.(value!);
          }}
          disableFuture
          slots={{ openPickerIcon: CalendarMonthIcon }}
          slotProps={{
            textField: {
              sx: {
                "& .MuiInputBase-root": {
                  borderBottom: "none !important", // Removes underline
                },
                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                  display: "none", // Hides the underline
                },
              },
              variant: "standard",
              inputProps: {
                style: { display: "none" },
              },
            },
          }}
        />
      </StyledCustomDatePicker>
    </LocalizationProvider>
  );
};

export default CustomDatePickerFilter;
