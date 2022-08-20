import { Body, SmallLogo, Header, HeaderSection } from './styles'
import Climate from "../../components/microNew/Climate/Climate";
import FullDate from "../../components/microNew/Date/FullDate";

const Headerr = ({ image = {}}) => {
 
  return (
    <Body>
      <Header>
        <HeaderSection>
            <SmallLogo>
                <img id="imgBlack" src={image.src}/>
            </SmallLogo>
          <FullDate />
          <Climate />
        </HeaderSection>
      </Header>
      </Body>
  );
 }
 Headerr.defaultProps = {
  image: {
      src: "https://via.placeholder.com/300x100"
  }
}


export default Headerr;