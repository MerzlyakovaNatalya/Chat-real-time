import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #dacebe;
  margin: 10px 10px 10px 0;
  padding-right: 30%;
`;

export const Wrap = (props) => {
  return (
    <>
      <StyledWrap {...props} />
    </>
  );
};
