import { Body, Header, HeaderSection } from './styles'
import Climate from "../../components/microNew/Climate/Climate";
import FullDate from "../../components/microNew/Date/FullDate";

const Headerr = () => {
 
  return (
    <Body>
      <Header>
        <HeaderSection>
          <FullDate />
          <Climate />
        </HeaderSection>
      </Header>
      </Body>
  );
 }  

export default Headerr;