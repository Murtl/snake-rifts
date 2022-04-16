import { IonCard, IonIcon} from '@ionic/react';
import { square} from "ionicons/icons";

const Playfield: React.FC = () => {
  return (
    <IonCard>
        <IonIcon icon={square}></IonIcon>
        <IonIcon icon={square}></IonIcon>
        <IonIcon icon={square}></IonIcon>
        <IonIcon icon={square}></IonIcon>
        <IonIcon icon={square}></IonIcon>
        <IonIcon icon={square}></IonIcon>
    </IonCard>
  );
};

export default Playfield;
