import { IonCard, IonItem, IonLabel, IonList, IonTitle } from '@ionic/react';

const scores = [{
  id: 1,
  name: "Michael",
  score: 5000
},
{
  id: 2,
  name: "Sepp",
  score: 6000
},
{
  id: 3,
  name: "Lol",
  score: 33
},
{
  id: 4,
  name: "Kevin",
  score: 50
}]

const Leaderboard: React.FC = () => {
  return (
    <IonCard>
      <IonTitle className='ion-padding'>Highscores</IonTitle>
      <IonList>
        {scores.sort((a, b) => { return a.score - b.score; }).reverse().map((prop) => {
          return (
            <IonItem key={prop.id}>
              <IonLabel>
                <h2>{prop.name} {console.log(prop)}</h2>
                <h3>{prop.score}</h3>
              </IonLabel>
            </IonItem>
          )
        })}
      </IonList>
    </IonCard>

  );
};

export default Leaderboard;