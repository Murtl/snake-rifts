import { IonCard} from '@ionic/react';
import CanvasDraw from 'react-canvas-draw';

const Playfield: React.FC = () => {
  return (
    <IonCard>
        <CanvasDraw></CanvasDraw>
    </IonCard>
  );
};

export default Playfield;
