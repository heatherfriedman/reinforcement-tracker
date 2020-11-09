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
  const rewardCount = useSelector(
    (state: RootState) => state.rewards.rewardCount,
  );
  const starItems = [...Array(rewardCount).keys()].map((number) => (
    <Star key={number} />
  ));
  return <Container>{starItems}</Container>;
};
