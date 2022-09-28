import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  padding-top: 40px;
  padding-left: 10px;
`;

export const Title = (props) => {
  return (
    <>
      <StyledTitle {...props} />
    </>
  );
};
