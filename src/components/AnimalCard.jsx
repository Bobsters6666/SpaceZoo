"use client";

import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AnimalCard.css';

const animals = [
  'Lion',
  'Tiger',
  'Elephant',
  'Giraffe',
  'Zebra',
  'Kangaroo',
  'Panda',
  'Koala',
  'Penguin',
  'Dolphin'
];

const randomAnimal = () => {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
};

const exampleAnimal = randomAnimal();

export default function ImgMediaCard() {
  const [animalDetails, setAnimalDetails] = useState({ detailedName: '', slogan: '' });

  const fetchAnimalDetails = async (animal) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
        headers: {
          'X-Api-Key': '' // API key
        }
      });
      const data = await response.json();
      if (data.length > 0) {
        const [{ characteristics: { slogan }, name: detailedName }] = data;
        setAnimalDetails({ detailedName, slogan });
      } else {
        setAnimalDetails({ detailedName: 'Example name', slogan: 'Example animal' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAnimalDetails({ detailedName: 'Error fetching data', slogan: 'Error fetching data' });
    }
  };

  useEffect(() => {
    fetchAnimalDetails(exampleAnimal);
  }, []);

  return (
    <Card className="AnimalCard">
      <CardMedia
        component="img"
        height="140"
        //image="/static/images/cards/contemplative-reptile.jpg" // Image
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {animalDetails.detailedName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {animalDetails.slogan}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className='Button'>Trade</Button>
        <Button size="small" className='Button'>See More</Button>
      </CardActions>
    </Card>
  );
}