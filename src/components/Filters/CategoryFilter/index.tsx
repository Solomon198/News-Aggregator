import { Button } from "@mui/material";
import { ISelectComponent } from "../../../types";
import useContainerOverflow from "../../../utils/hooks/useOverflowing";
import OverFlowMenu from "./OverflowMenu";
import { StyledCategoryContainer } from "../styled.components";

const CategoryFilter = ({
  menuItems,
  selected,
  onSelected,
}: ISelectComponent) => {
  const { isOverflowing, containerRef } = useContainerOverflow();

  return (
    <>
      <StyledCategoryContainer ref={containerRef}>
        {menuItems.map(({ name, value }) => (
          <Button
            key={value}
            sx={{ textTransform: "capitalize", m: "0px 2px" }}
            size="small"
            color={selected === value ? "primary" : "inherit"}
            onClick={() => onSelected?.(value)}
          >
            {name}
          </Button>
        ))}
      </StyledCategoryContainer>
      {isOverflowing && (
        <OverFlowMenu
          selected={selected}
          menuItems={menuItems}
          onSelected={onSelected}
        />
      )}
    </>
  );
};

export default CategoryFilter;
