import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Flex = (props) => {
  return (
    <>
      <StyledFlex {...props} />
    </>
  );
};
