import {useEffect, useState} from "react";
import Card from './components/Card';
import Button from '@mui/material/Button';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material/styles";

const TopContainer = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(3),
  textAlign: 'center',
}));

const GameContainer = styled(Box)(({ theme }) => ({
  padding: 24,
}));

function App() {

  const initialGame = [
    {picture: "1"},
    {picture: "1"},
    {picture: "2"},
    {picture: "2"},
    {picture: "3"},
    {picture: "3"},
    {picture: "4"},
    {picture: "4"}
  ];

  const [images, setImages] = useState([]);
  const [turnsCount, setTurnsCount] = useState(0);
  // useEffect(() => {
  //   createNewGame()
  // }, []);

  const shuffleCards = (initialArray) => {
    let j, x, i;
    for (i = initialArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = initialArray[i];
      initialArray[i] = initialArray[j];
      initialArray[j] = x;
    }
    return initialArray
  }

  const changeStatus = (image) => {

    if (image.isOpen) return

    const openCards = images
      .filter(i => i.isOpen === true)
    const openCardsCount = openCards.length

    if (openCardsCount >= 2) return

    image.isOpen = true

    if (openCardsCount === 1) {
      // check openCards for match
      if (openCards[0].picture === image.picture) {
        image.isMatch = true
        openCards[0].isMatch = true
      }
    }
    // console.log('hi ' + JSON.stringify(images))
    setImages([...images]);

    setTimeout(() => {
      image.isOpen = !image.isOpen
      setImages([...images]);
    }, 2000)

    setImages([...images]);
    setTurnsCount(turnsCount + 1);
  }

  const createNewGame = () => {
    let shuffledCards = shuffleCards(initialGame);
    setImages(shuffledCards);
    setTurnsCount(0);
  }

  return (
    <GameContainer sx={{flexGrow: 1}}>
      <Grid container spacing={6}>

        <TopContainer item xs={12}>
          <Button
            variant="outlined"
            onClick={() => { createNewGame() }}
            tabIndex={1}
          >
            New 'Magic Match' game
          </Button>
        </TopContainer>

        {
          images.map((image, index) => (
            <Grid key={index} item xs={5} md={3}>
              <Card
                tabIndex={2 + index}
                image={image}
                changeStatus={changeStatus}
              />
            </Grid>
          ))
        }
      </Grid>
    </GameContainer>
  );
}

export default App;
