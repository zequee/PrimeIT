import styled from "styled-components";

//*********************************NAV*******************************************

export const ContainerNav = styled.div`
  padding: 2px;
  background-color: grey;
  font-family: "Lato", sans-serif;
`;

export const Title = styled.h2`
// color: #0ac1a8;
color: #fff;
font-family: "Lato", sans-serif
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  color: #fff;
`;

//*********************************NEW USER*******************************************

export const HeaderImage = styled.img`
    width: 200px;
    height: 100px;
    margin-left: 150px;
    padding-bottom: 12px;
    padding-top: 20px;
`;

export const CardWrapper = styled.div`
height: 110px
padding: 0 0 32px;
margin: 48px auto 0;
width: 500px;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
margin-top: 5px;
`;


export const CardBody = styled.div`
  padding-right: 100px;
  padding-left: 100px;
  text-align: left;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  margin-bottom: 24px;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid grey;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardInputRadio = styled.input`
  padding: 0;
  margin: 0;
  border: 0;
`;

export const CardFieldsetSubmit = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;
  margin-bottom: 10px;
  margin-left: 100px;
`;

export const InputSubmit = styled.input.attrs({ type: "submit" })`
  color: #fff;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  background: ${(props) => (props.primary ? "blue" : "red")};
`;

export const Select = styled.select`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border: 1px solid grey;
  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;


//*********************************USER DETAILS*******************************************


export const CardHeader = styled.header`
  padding-top: 12px;
  padding-bottom: 12px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const CardWrapperDetail = styled.div`
height: 10px
padding: 0 0 32px;
margin: 48px auto 0;
width: 80%;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
margin-top: 5px;
`;

export const CardHeadingDetail = styled.h1`
font-size: 24px;
font-weight: bold;
margin-left: 120px;
margin-top: 10px;
`;

export const CardFieldsetDetail = styled.fieldset`
position: relative;
padding: 0;
margin: 0;
border: 0;
margin-bottom: 24px;
margin-left: 24px;
width: 98%;
`;

export const SelectDetail = styled.select`

  height: 33px;
padding: 7px 0;
width: 150%;
font-family: inherit;
font-size: 14px;
border: 1px solid grey;
&:focus {
  border-bottom-color: #e5195f;
  outline: 0;
}
`;

export const CardFieldsetSubmitDetail = styled.fieldset`
position: relative;
padding: 0;
margin: 0;
border: 0;
margin-bottom: 10px;
margin-left: 120px;
`;

//*********************************LIST USERS*******************************************


export const PaginationListUser = styled.div`
  width: 80%;
  color: black;
  margin-left: 450px;
  // border: 1px solid red;
`;

export const CardWrapperListUser = styled.div`
height: 10px
padding: 0 0 32px;
margin: 48px auto 0;
width: 80%;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
margin-top: 5px;
`;

export  const CardHeadingListUser = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-left: 120px;
  margin-top: 10px;
`;


export  const Wrap = styled.div`
  border: 1px solid #d6dbdf;
  background: #f8f9f9;
  width: 80%;
  margin-left: 120px;
  height: 50px;
`;

export const Dropdown = styled.div`
  background: white;
  color: black;
  width: 80%;
  margin-left: 120px;
`;





