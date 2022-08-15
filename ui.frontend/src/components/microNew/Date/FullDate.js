import { SectionDate, FullDate, Watch } from './styles'

const FullDateComplete = () => {

  const dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
  const monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho","julho", 
                                                    "agosto", "outubro", "novembro", "dezembro")
  
  const now = new Date;
  const date = (dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ] + " de " + now.getFullYear ());
  const time = ([now.getHours()]+":"+[now.getMinutes().toString().padStart(2, "0")])
 
  return (
    <SectionDate>
      <Watch>{time}</Watch>   
      <FullDate>{date}</FullDate>            
    </SectionDate>
  );
 }  

export default FullDateComplete;