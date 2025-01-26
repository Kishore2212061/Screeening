import { useDashboardStore } from "../store/useStore";
import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 22px;
  color: #333;
  margin-bottom: 40px;
    @media only screen and (max-width: 1024px) {
      padding:10px;
      margin-bottom:25px;

}
`;
const ClientsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
      @media only screen and (max-width: 1024px) {
      padding:10px;
      justify-content:space-around;
      gap:10px;

}
`;
const ClientBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  text-align: center;
`;
const ClientImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 5px;
`;

const ProgressBox = styled.div`
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  height:23%;

`;
const Percentage = styled.span<{ isPositive: boolean }>`
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (props.isPositive ? "#90EE90" : "#ffcccb")};
  color: ${(props) => (props.isPositive ? "green" : "red")};
  margin:auto;
  padding:10px;
  border-radius:20px;
  margin-right:0px;
`;

const FlexProperty=styled.div`;
display:flex;
justify-content: space-between;
height:50%;
`;
const ProgressB=styled.div`
display:flex;
height:65%;
flex-direction:column;
justify-content:space-between;
`;
const Hrr=styled.hr`
border:2px solid #ffcc80;
`;
const PerformanceComponent:React.FC=()=>{
    const {Client,Performance} =useDashboardStore();
    return(
        <>
            <Title>Performance</Title>
            <h2>New  Client ({Client.length}) </h2>
            <ClientsContainer>
                {Client.map((client)=>(
                    <ClientBox>
                    <ClientImage src={client.photo}></ClientImage>
                    <p>{client.name}</p>
                    </ClientBox>
                ))}
            </ClientsContainer>
            <Title>Your Progress</Title>
            <ProgressB>
                {Performance.map((per)=>(
                    <ProgressBox>   
                      <FlexProperty>
                        <h3>{per.label}</h3>
                        <h3>{per.value}</h3>                       
                      </FlexProperty>
                      <Hrr></Hrr>
                      <FlexProperty>
                        <h3>{per.orders} Orders</h3>
                        <Percentage isPositive={per.percentage >= 0}>{per.percentage}%
                        </Percentage>
                        </FlexProperty>
                    </ProgressBox>
                ))}
            </ProgressB>


        </>
    )
}

export default PerformanceComponent;