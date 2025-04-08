import './App.css'
import Card from './components/Card/Card';
import Header from './components/Header/Header';


const excuseArray = [
  {
    emoji: "👮🏻‍♂️",
    answer: ["🐔 Un poulet s’est échappé d’un camion et la police bloquait la route pour le rattraper. Scène surréaliste.",
    "🐢 Convoi exceptionnel : un escargot traversait la route, la police assurait la sécurité.",
    "🕵️ Un agent a voulu vérifier mon sac. Il n’avait jamais vu autant de câbles, écouteurs et chargeurs. Il m’a suspecté d’être un hacker… ou un DJ.",
    "👮 Les flics ont cru que mon sac contenait quelque chose de louche… c’était juste mon déjeuner."]
   },
  {
    emoji: "🤮",
    answer: ["🫠 J’ai voulu me soigner avec une tisane de grand-mère. Spoiler : la vodka ne soigne rien.",
    "🤧 J’ai éternué si fort que j’ai réveillé mon voisin. On a dû discuter 20 minutes pour comprendre si j’étais contagieux ou juste allergique aux lundis.",
    `🤒 J’ai pris ma température… le thermomètre a affiché "erreur système". Même lui a paniqué.`,
    "😵 J’ai éternué en mettant mes chaussettes. Je me suis retrouvé avec une pantoufle dans la main et une chaussette sur la tête."]
   },
  {
    emoji: "⏰",
    answer: [`🧠 Mon cerveau a entendu le réveil, l’a analysé, et a conclu : “Non."`,
    "📆 Je me suis réveillé, j’ai regardé l’heure, tout allait bien… sauf que c’était hier.",
    "😵‍💫 J’ai confondu le bouton “répéter” avec “abandonner ma vie”.",
    `📱 J’ai mis mon réveil sur "vibrations". Il a vibré tout seul dans une autre pièce… bravo la technologie.`]
   },
   {
    emoji: "🐕",
    answer: ["🪞 Le chien s’est aboyé dessus en se regardant dans le miroir. On a dû gérer une crise d’identité canine.",
    "🐾 Le chien a volé ma chaussette. La poursuite a duré plus longtemps que prévu.",
    "🦴 J’ai voulu sortir le chien 5 minutes… il a décidé de négocier chaque lampadaire.",
    "🐕 Il a enterré mes clés dans le jardin. Et visiblement, il a prêté sa mémoire à un poisson rouge."]
   },{
    emoji: "🚧",
    answer: ["🚧 Les travaux sur la route se sont transformés en mission d’exploration. Après 30 minutes, j’ai abandonné et pris un autre chemin.",
    `🏠 Je suis tombé dans une réunion "urgence travaux", et mon rôle était de commenter la peinture. C’était épique, mais j’ai perdu la notion du temps.`,
    `⚒️ Je me suis fait "accueillir" par des ouvriers en pause café… je crois qu’ils m’ont vu comme une menace à leur tranquillité.`,
    `🔨 Les ouvriers ont confondu "réparation" avec "concert rock" et ont passé l’heure à taper sur les murs.`]
   },{
    emoji: "💣",
    answer: ["⏳ J'ai essayé de désamorcer un réveil. Ça n’a pas marché, il a explosé en plein milieu de ma matinée.",
    "💣 Une bombe de peinture s’est déversée sur mon sac. Résultat : je ressemble maintenant à un tableau moderne.",
    `💥 Il y a eu un déploiement de "bombes à retardement" dans la rue... des colis non livrés. Je crois qu’on est en guerre contre le facteur.`,
    "🚨 Un bruit sourd a secoué l'immeuble. Mais non, ce n’était pas une explosion, juste un voisin qui a ouvert sa porte avec trop d’enthousiasme."]
   },{
    emoji: "🌪️",
    answer: [`💨 Le vent m’a pris en charge pour un tour en free ride. Je n’ai pas eu le temps de dire "stop", il était déjà trop tard.`,
    "🌀 Je voulais partir, mais le vent a décidé de m’embrasser... et de m’emmener avec lui. Je me suis retrouvé à la frontière de la tempête.",
    "🌀 Un mini-cyclone a envahi mon salon. J’ai passé 20 minutes à essayer de récupérer ma télécommande qui s’était envolée.",
    "🌪️ Le cyclone est arrivé avec un tel panache que même mon chat a voulu le suivre. Je suis resté bloqué à essayer de le récupérer."]
   },{
    emoji: "🐳",
    answer: ["🐋 Je suis arrivé en retard parce qu’une baleine a décidé de me suivre en voiture. Je n’ai pas osé lui demander de partir, elle avait l’air trop gentille.",
    "🐋 J’étais en train de nager quand une baleine est passée et m’a proposé un petit tour. J’ai accepté, mais elle est allée tellement lentement que j’ai raté tout mon planning.",
    "🐳 J’étais dans un bassin, mais une baleine a volé le show en faisant un plongeon spectaculaire. Je me suis retrouvé à la regarder pendant 30 minutes.",
    "🦈 J’ai voulu partir en mer, mais une baleine a intercepté mon bateau. On a discuté de la météo marine, puis je me suis perdu en admirant ses danseurs."]
   },{
    emoji: "🏊‍♂️",
    answer: ["🐠 Un poisson rouge m’a défié en apnée. J’ai perdu. J’ai honte.",
    "🚿 J’ai voulu m’échauffer sous la douche… j’ai glissé, j’ai nagé jusqu’à la cuisine.",
    "🌊 Je suis allé nager dans la mer, mais j’ai pris un aller simple pour la Bretagne à la nage.",
    "🐙 Un poulpe m’a pris pour un camarade de nage… j’ai eu du mal à m’en débarrasser."]
   },{
    emoji: "🕺",
    answer: ["💃 Je me suis lancé dans un moonwalk… je suis toujours en train de revenir.",
    "🕺 J’ai dansé si fort hier que mes jambes ont demandé un jour de congé.",
    "👞 J’ai confondu mes chaussures de danse avec des palmes… j’ai glissé jusqu’au salon.",
    "🎭 Mon partenaire de danse m’a ghosté… il a valsé avec mon honneur."]
   },
  

];


function App() {


  function getRandomItem(answers: string[]) {

    const randomIndex = Math.floor(Math.random() * answers.length);

    return answers[randomIndex];
  }
  const result = getRandomItem(excuseArray[0].answer);

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

export default App;