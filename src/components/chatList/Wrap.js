import styled from "styled-components";

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eceef0;
  margin: 10px 10px 10px 0;
  padding-right: 5%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Wrap = (props) => {
  return (
    <>
      <StyledWrap {...props} />
    </>
  );
};
