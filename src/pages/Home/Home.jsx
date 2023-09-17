import React from 'react';
import { Container } from 'components/Header/Header.styled';
import { Section, Title, Caption, Text, Button } from './Home.styled';

const Home = () => {
  return (
    <Section>
      <Container>
        <Title>Car rental service</Title>
        <Caption>
          Rent a car in a matter of seconds, without registration.
        </Caption>
        <Text>
          Discover a varied selection of car rentals. Whether it's a short day
          trip or a weekend getaway, we have the perfect car for you, whether
          you're traveling alone or with the whole family.
        </Text>
        <Button to={'catalog'} key={'catalog'}>
          Pick your car
        </Button>
      </Container>
    </Section>
  );
};

export default Home;
