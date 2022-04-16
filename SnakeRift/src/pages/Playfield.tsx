/*import { IonCard, IonIcon} from '@ionic/react';
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

export default Playfield;*/

import React, { useRef, useEffect } from 'react'

const Playfield = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLCanvasElement> & React.CanvasHTMLAttributes<HTMLCanvasElement>) => {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw 
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  return <canvas ref={canvasRef} {...props} />
}

export default Playfield
