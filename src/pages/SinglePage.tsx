import Dashboard from "../components/Dashboard";
import Linkss from "../components/Linkss";
import PerformanceComponent from "../components/PerformanceComponent";
import styled from "styled-components";

const PagesDiv =styled.div`
display: flex;
max-height:400vh;
justify-content:center;
padding:20px;
background-color: wheat;
border-radius: 30px;
max-height:400vh;

`;

const FirstContainer=styled.div`
display:flex;
background-color: #3f3d56;
width:95%;
border-radius: 30px;

padding:0;
max-height:400vh;
`;

const SecondContainer=styled.div`
width:100%;
background-color:#ffffff;
border-radius: 30px;
padding:20px;
border:20px solid #ffff;
display:flex;
flex: 2 4 150px;
max-height:400vh;
`;

const ThirdContainer=styled.div`
width:40%;
background-color:#ffcc80;
border-radius: 30px;
padding:20px;
margin-left:80px;
flex: 2 4 150px;
max-height:400vh;
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