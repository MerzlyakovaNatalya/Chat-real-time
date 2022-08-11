import styled from "styled-components";

const StyledTitle = styled.h1`
  color: ${(props) => props.color};
  width: 100%;
  margin-top: 40px;
`;

export const Title = (props) => {
  return (
    <>
      <StyledTitle {...props} />
    </>
  );
};
