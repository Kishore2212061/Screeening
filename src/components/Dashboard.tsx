import React from 'react'
import { useDashboardStore } from '../store/useStore';
import  styled from 'styled-components';
import ISIze from '../assets/Screenshot 2025-01-24 082842.png'
const WelcomeMessage =styled.h1`
  font-size: 38px;
  color: #333;
  margin-bottom: 30xpx;
`;
const StatsContainer =styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px;
`;
const StatValue =styled.p`
  font-size: 20px;
  color: #2e2e2e;
  margin-bottom: 5px;
`;
const StatValue1 =styled.h1`
  font-weight: 80px;
   font-size: 38px;
  color: #2e2e2e;
  margin-bottom: 5px;
`;
const StatBox =styled.div`
  background: white;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  border:4px solid white;
 box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
   margin:20px;
`;
const RecentlySoldContainer =styled.div`
   margin-top: 20px;
    flex-direction:column;
    padding:30px;
  
`;
const SoldItem =styled.li`
  display: flex;
  align-items: center;
   background-color: silver;
  padding: 30px;
  border-radius: 20px;
  flex-direction:column;
  gap:20px;
  margin:20px;
`;

const SoldList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius:100%;
  display: flex;
`;

const SoldImage = styled.img`
  border-radius: 10%;
  object-fit: cover;
  margin-right: 10px;
`;
const SoldName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const SoldPrice = styled.span`
  font-size: 14px;
  color: #444;
`;
const Card = styled.div`
  background-color: #ff9f9f; 
  border-radius: 15px;
  padding: 30px;
  width: 100%;
  height:20%;
  color: white;
  font-family: Arial, sans-serif;
  position: relative;
  display:flex;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction:column;
    margin-bottom: 20px;

`;
const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight:50px;
  font-weight: bold;
`;
const Message = styled.pre`
  margin: 5px 0 0;
  font-size: 25px;
  justify-content:center;
`;
const Icon = styled.img`
  right: 20px;
  bottom: 15px;
  width: 30%;
  height:90%;
  position:absolute;
`;

const Dashboard:React.FC =()=>{
  const today = new Date();
  const day = today.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = today.toLocaleDateString("en-GB", { month: "long" });
  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" });
  const formattedDate = `${day} ${month}, ${weekday}`;
      const {User,Stat,RecentSold} =useDashboardStore();
    return(
        <div>
            <WelcomeMessage>Welcome backk ,{User}!</WelcomeMessage>
            <p>{formattedDate}</p>
            <Card>
            <Title>Good Job!</Title>
            <Message>You have over 20,000 visitors<Message>in the last 10 days.Keep it up!</Message> </Message>
            <Icon src={ISIze} alt="Shopping Cart" />
            </Card>
            <StatsContainer>
                {Stat.map((st)=>(
                    <StatBox  key={st.label}>
                        <StatValue1>{st.value}</StatValue1>
                        <StatValue>{st.label}</StatValue>
                    </StatBox>
                ))}
            </StatsContainer>
            <RecentlySoldContainer>
                <WelcomeMessage>Recently Sold</WelcomeMessage>
                <SoldList>
                    {RecentSold.map((re)=>(
                        <SoldItem key={re.name}>
                            <SoldImage src={re.photo}></SoldImage>
                            <SoldName>{re.name}</SoldName>
                          <SoldName>{re.itemsold} items</SoldName>
                            <SoldPrice>{re.price} - earned</SoldPrice>
                        </SoldItem>
                    ))}
                </SoldList>
            </RecentlySoldContainer>
        </div>
    )
}
export default Dashboard;