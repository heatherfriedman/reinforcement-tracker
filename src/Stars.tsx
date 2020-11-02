import React, { FC } from 'react';
import { Star } from './Star';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './store/rootReducer';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: dotted;
`;
export const Stars: FC = () => {
  const allStars = useSelector((state: RootState) => state.number);
  const starItems = allStars.map((todo, i) => <Star key={i} />);
  return <Container>{starItems}</Container>;
};
