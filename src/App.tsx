import './App.css'
import Card from './components/Card/Card';
import Header from './components/Header/Header';



const excuseArray = [
  {
    emoji: "👮🏻‍♂️",
    answers: ["👮 Les flics ont cru que mon sac contenait quelque chose de louche… c’était juste mon déjeuner.", 
      "🐔 Un poulet s’est échappé d’un camion et la police bloquait la route pour le rattraper. Scène surréaliste.", 
      "🚨 La police a confondu ma voiture avec celle d’un suspect. Même couleur, même modèle… pas la même tête pourtant.", 
      "🧯 J’ai assisté à une intervention policière dans un kebab. Le suspect ? Un client qui demandait de la sauce blanche après avoir payé."]

  },
  {
    emoji: "🐋",
    answers: ["bhhbhj", "scz", "sfgr", "zefe"]
  },
  {
    emoji: "🤮",
    answers: ["", "", "", ""]
  },
  {
    emoji: "👮🏻‍♂️",
    answers: ["👮 Les flics ont cru que mon sac contenait quelque chose de louche… c’était juste mon déjeuner.", 
      "🐔 Un poulet s’est échappé d’un camion et la police bloquait la route pour le rattraper. Scène surréaliste.", 
      "🚨 La police a confondu ma voiture avec celle d’un suspect. Même couleur, même modèle… pas la même tête pourtant.", 
      "🧯 J’ai assisté à une intervention policière dans un kebab. Le suspect ? Un client qui demandait de la sauce blanche après avoir payé."]

  },
  {
    emoji: "🐋",
    answers: ["bhhbhj", "scz", "sfgr", "zefe"]
  },
  {
    emoji: "🤮",
    answers: ["", "", "", ""]
  },
  {
    emoji: "👮🏻‍♂️",
    answers: ["👮 Les flics ont cru que mon sac contenait quelque chose de louche… c’était juste mon déjeuner.", 
      "🐔 Un poulet s’est échappé d’un camion et la police bloquait la route pour le rattraper. Scène surréaliste.", 
      "🚨 La police a confondu ma voiture avec celle d’un suspect. Même couleur, même modèle… pas la même tête pourtant.", 
      "🧯 J’ai assisté à une intervention policière dans un kebab. Le suspect ? Un client qui demandait de la sauce blanche après avoir payé."]

  },
  {
    emoji: "🐋",
    answers: ["bhhbhj", "scz", "sfgr", "zefe"]
  },
  {
    emoji: "🤮",
    answers: ["", "", "", ""]
  },
  {
    emoji: "🤮",
    answers: ["", "", "", ""]
  },

];


function App() {

  function getRandomItem(answers: string[]) {

    const randomIndex = Math.floor(Math.random() * answers.length);

    return answers[randomIndex];
  }
  const result = getRandomItem(excuseArray[0].answers);


  return (
    <>
      <Header />
      <main>
        <h2>L'art de l'excuse, à portée de clic !</h2>
        <section>
          {excuseArray.map((element) => {
            return (
              <Card emoji={element.emoji} />
            )
          })}
        </section>
        <p className='answer'>{result}</p>
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default App