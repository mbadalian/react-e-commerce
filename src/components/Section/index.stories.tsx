import React from "react";
import type { Meta, StoryFn } from '@storybook/react';

import { DiscountItem } from "../DiscountItem";
import {adjust, getRandomColor, getRandomFloat} from '../../utils/getRandomColor';

import { Section } from ".";
import {Card} from '../Card';

const meta: Meta = {
  title: 'Components/Section',
  component: Section,
};

const mockItem = new Array(5).fill('').map((_, index) => {
    const color = getRandomColor();

    return {
        image: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
        title: `Example Product + ${index}`,
        price: 100,
        description: "Explore Our Furniture & Home Furnishing Range",
        color,
        background: adjust(color, -20),
    }
});

const mockCard = new Array(5).fill('').map((_, index) => {
    return {
        image: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
        title: `Example Product + ${index}`,
        price: 100,
        description: "Explore Our Furniture & Home Furnishing Range",
        rating: Number(getRandomFloat(1, 5))
    }
});

export const Main: StoryFn = () => {
    return (
        <Section title="Example">
            {mockItem.map((el, index) => <DiscountItem key={el.title + index} {...el} />)}
        </Section>
    )
};

export const Cards: StoryFn = () => {
    return (
        <Section title="Example">
            {mockCard.map((el, index) => <Card key={el.title + index} {...el} />)}
        </Section>
    )
};

export default meta;
