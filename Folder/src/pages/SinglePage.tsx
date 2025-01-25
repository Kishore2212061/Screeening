import Dashboard from "../components/Dashboard";
import Linkss from "../components/Linkss";
import PerformanceComponent from "../components/PerformanceComponent";
import styled from "styled-components";

const PagesDiv =styled.div`
display: flex;
padding:20px;
background-color: wheat;
border-radius: 30px;
width:1500px;
@media only screen and (max-width: 600px) {
 height:3124px;
}
`;

const FirstContainer=styled.div`
display:flex;
background-color: #3f3d56;
border-radius: 30px;
padding:0;
@media only screen and (max-width: 600px) {
    flex-direction:column;
   width:100%;
}
`;

const SecondContainer=styled.div`
display:flex;
background-color:#ffffff;
border-radius: 30px;
padding:20px;
border:20px solid #ffff;
@media only screen and (max-width: 600px) {
    flex-direction:column;
  
}
`;

const ThirdContainer=styled.div`
display:flex;
background-color:#ffcc80;
border-radius: 30px;
padding:20px;
flex-direction:column;
`;
const SinglePage=()=>{

    return(
        <PagesDiv>
            <FirstContainer>
                <Linkss/>                      
            <SecondContainer>
                <Dashboard/> 
            <ThirdContainer>
                <PerformanceComponent/>
            </ThirdContainer>
            </SecondContainer>
            </FirstContainer>
        </PagesDiv>
    )
}

export default SinglePage