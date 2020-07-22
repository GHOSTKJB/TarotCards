import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from "./components/card";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const cards = [
  { header: "The Emperor", description: "The Emperor is seated on a throne “decorated with four rams’ heads, representing intellectual heights, determination, action, initiative, and leadership.” It is not at all obvious why rams’ heads should represent these things, and the last three sound like they were borrowed from Six Sigma." },
  { header: "The Empress", description: "The card of feminine energy, the Empress represents fertility, beauty, and abundance. She may indicate either a physical or metaphorical pregnancy, which seems like something you should really nail down." },
  { header: "The Lovers", description: "The Lovers card represents love, of course, and of the most rarified kind. The lovers share the deep emotional, physical, and spiritual connection you could expect from the kind of couple who calls themselves “lovers.” The two lovers stand among symbols of fertility and intimacy. The woman is gazing at the giant flaming angel in the sky, and the man is gazing at the woman’s pelvis." },
  { header: "The Magician", description: "The Magician (whose more metal name is The Magus) is the first card of the major arcana. The Magician also symbolizes fresh starts and new beginnings, because 100% of people who ask for a tarot reading want a new beginning." },
  { header: "The fool", description: "The Fool is traditionally both the first and the last card of the major arcana. In fact, the major arcana cards together comprise the Fool’s journey through life. The Fool represents new beginnings, excitement, courage, and potential." },
  { header: "The High Priestess", description: "trust your inner voice, Knowledge of how to fix [your problem] will not come through logic or intellect but through your intuition"},
  { header: "The Hierophant", description: "The staid male counterpart to the much more fabulous Priestess card, the Hierophant represents institutional authority and established traditions. Like the Priestess, he is a religious figure, but in a much more orthodox setting. follow due process and to stay within the conventional bounds of what is typically an orthodox approach. Instead of being innovative, you will need to adapt to the existing set of beliefs and systems that are already in place. You will need to do what is expected of you. The card can also represent a wise mentor, someone like a priest, boss, or teacher. It also may represent a gateway to higher consciousness, as does—without exception—every other tarot card."},
  { header: "The Chariot", description: "The Chariot represents will power, control, self-assertion, and victory. Also, in a refreshingly literal twist, the Chariot can represent driving. The card is a real grab bag of mystical symbolism, including stars, moons, alchemical symbols, and two extremely irritated sphinxes, the leftmost of which is actually rolling its eyes in disgust."},
  { header: "The Hermit", description: "The Hermit looks like a thinner, tanner Gandalf. He wears the gray cloak of invisibility. Having reached the snowy summit of his harrowing spiritual quest, he now looks sad and a little sleepy."},
  { header: "Strength", description: "Representing strength, a popular tarot site helpfully explains, but unlike the amped-up jock jam sloganeering of the Chariot, Strength here means inner strength of character."},
  { header: "The Wheel of Fortune", description: "The Wheel of Fortune represents life’s inherently cyclical nature. Sometimes things will go well, other times badly, but in the end, balance will be restored. The Wheel also represents karma, as well as fate and the external forces that control our destinies."},
  { header: "Justice", description: "The Justice card represents justice, as one might expect, and more sternly, the idea that one gets what they deserve. Justice is all about taking responsibility for one’s self, and she gets a little blame-y: “Your decisions and actions have long-term consequences and your present and future circumstances are most likely a result of these decisions and actions.”"},
  { header: "The Hanged Man", description: "Like the Death card, the Hanged Man sounds much worse than it is. The card represents surrender: The man is described as a “willing martyr,” someone who sacrifices himself to a greater cause. The Hanged Man also represents a period of watchful waiting, and he is doing that waiting upside down."},
  { header: "death", description: "Representing loss or change."},
  { header: "Temperance", description: "Representing 'Caution', The Temperance card signifies calm, balance, tranquility, and avoiding extremes. Temperance is cautious, keeping one foot on dry land."},
  { header: "The Devil", description: "Unlike the Death card, which seems bad but is good, the Devil card seems bad and is bad. The Devil represents materialism, vice, and addiction. He controls our lowest, most animal desires. At his feet, a man and a woman are chained, in servitude to their baser nature. However, the chains are loose and they could slip their heads from them if they tried, indicating that their bondage is voluntary."},
  { header: "The Tower", description: "Following on Death and the Devil, the Tower is a very bad card. It symbolizes sudden catastrophe. After this time of chaos, new and better things may emerge, but that’s likely small consolation during your current era of unremitting disaster."},
  { header: "The Star", description: "After the destruction of the Tower, the Star is all love and light. The card represents joy, kindness, hope, and faith — basically anything you’d want to embroider on a tea towel."},
  { header: "The Moon", description: "One might assume the Moon would be a good card, suggesting femininity, fertility, and other mystically significant things, but in fact, the Moon is a mixed bag at best. The card represents intuition, but also subconscious fears and dark impulses. The Moon is associated with the eerie, mysterious elements of our unconscious minds, including recovered memories and nightmares."},
  { header: "The Sun", description: "The Sun is everything the Moon is not: open, positive, upbeat. Whereas the Star is serene and blissful, the Sun is way too chipper. The Sun played “Get Lucky” at his wedding. The Sun cheers for the kiss cam. The Sun likes to shout “I can’t hear you!” from the stage. The Sun means well, but all the other cards are embarrassed for him."},
  { header: "The Judgement", description: "The Judgment card means judgment, not surprisingly, but also an inner voice, sudden realization, or higher calling. Judgment is about resolution, the cathartic climax to all of your struggles. The Judgment card also looks absolutely crazy."},
  { header: "The World", description: "The World is the last card of the major arcana, and represents the summation of the journey begun by the Fool. After all the adventures of the past 21 cards, the World represents accomplishment, closure, and completion."}
];



export default function App() {

  const [card, setCard] = useState();
  const [searchCard, setSearchCard] = useState("");
  const [savedCards, setSelectedCards] = useState([]);

  React.useEffect(() => {
    const selectedCard = cards.filter(
      individualCard =>
        individualCard.header.toLowerCase() === searchCard.toLowerCase()
    )[0];
    setCard(selectedCard);
}, [searchCard]);

const saveCard = (selectedCard) => {
  if(!selectedCard) return
  setSelectedCards([...savedCards , selectedCard])
  setSearchCard("")
}

const deleteCard = (cardTitle) => {
  const newCards = savedCards.filter(card => card.header !== cardTitle)
  setSelectedCards(newCards)
}

console.log(savedCards)

return (
  <div style={{display: 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
      <h1>Welcome to TarotMaster v1</h1>
      <TextField 
      placeholder="Search a card!" 
      onChange={e => setSearchCard(e.target.value)} 
      value={searchCard}
      />
      
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon onClick={() => saveCard(card)}/>
      </Fab>
      {card ? <Card cardData={card} /> : <h1>Select a card</h1>}
      {savedCards.map((card) => 
      <Card cardData={card}/>
      )}
    </div>
  );
}




