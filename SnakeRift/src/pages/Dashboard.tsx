import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Leaderboard from './Leaderboard';
import Playfield from './Playfield';
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Snake</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <Playfield />
            </IonCol>
            <IonCol size='auto'>
              <Leaderboard />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter>
        <IonTitle>by Murtl</IonTitle>
      </IonFooter>
    </IonPage>
  );
};

export default Dashboard;
