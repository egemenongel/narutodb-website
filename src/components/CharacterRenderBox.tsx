import { useState, useEffect } from 'react';
import CharacterBox from './CharacterBox';
import Box from '@mui/material/Box'
import { characters } from '../constants/characters'
import { generateRandomCharacters } from '../utils/naruto_utils'
export default function MultiActionAreaCard(props) {
  const { data } = props;
  const [randomCharacters, setRandomCharacters] = useState([])
  console.log('CHARACTERS:',randomCharacters)

  useEffect(()=>{
     generateRandomCharacters({characters,setRandomCharacters, limit: 6})
  },[])

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            overflow: 'hidden',
            justifyContent: 'center',
            backgroundColor:'rgb(249 145 1)',
            padding: '3rem'
        }}>
          {(randomCharacters || []).map((characterData, index) =>
          (            
          <CharacterBox 
          key={characterData?.id || index} 
          characterData={characterData}/>
          ))}
        </Box>

    );
  }