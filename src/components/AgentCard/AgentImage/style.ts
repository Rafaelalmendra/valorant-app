import styled from "styled-components";

const Images = styled.div`
  img:first-child {
    width: 525px;
    height: 800px;
    object-fit: cover;
  }

  img:last-child {
    position: absolute;
    z-index: -1;
    left: 80px;
    width: 30%;
  }
`

export default Images;