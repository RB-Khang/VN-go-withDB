'use client'
import { Carousel as CarouselA, CarouselProps as CarourselPropsA } from "antd";
import styled from "styled-components";

export const Carousel = (props: CarourselPropsA) => {
    return <CarouselA {...props} autoplay>
        <CarouselItem />
        <CarouselItem2 />
        <CarouselItem3 />
    </CarouselA>;
};

const CarouselItem = styled.div`
  height: 350px;
  width: auto;
  background: url('/img/test1.JPG') center/cover;
`;
const CarouselItem2 = styled.div`
  height: 350px;
  width: auto;
  background: url('/img/test2.JPG') center/cover;
`;
const CarouselItem3 = styled.div`
  height: 350px;
  width: auto;
  background: url('/img/test3.JPG') center/cover;
`;
