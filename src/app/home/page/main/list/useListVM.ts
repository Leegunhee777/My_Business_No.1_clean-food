
import axios from 'axios';
import React, { useEffect } from 'react';
import store from '../../../../../asset/overlay.png';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../../../routes/paths';

type List = {
  title: string;
  description: string;
  location: string;
  rating: number;
  imgUrl: string
}
export function useListVM({
  input,
  page,
}: {
  input: string;
  page: number;
}) {
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState<List[]>([]);

  React.useEffect(() => {
    getList(input, page)
  }, [input, page])
  
  async function getList(input:string, page: number) {
    try {
      setLoading(true);
      setError(false);

      //const res = await axios.get(`/${input}/${page}`);
      setList(prev => [...prev,...storeList])
      setLoading(false);
    } catch(error) {
      setError(true);
    }
  }

  function clickStore() {
    navigate('/store/12123123');
  }

  return {
    loading,
    error,
    list,
    clickStore,
  }
}

const storeList = [
  {
    title: '엄마네다',
    description: '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,  
    imgUrl: store
  },
   {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,  
    imgUrl: store
  },
      {
    title: '엄마네다',
    description: '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,  
    imgUrl: store
  },
   {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,  
    imgUrl: store
  },
      {
    title: '엄마네다',
    description: '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,  
    imgUrl: store
  },
   {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,  
    imgUrl: store
  },
      {
    title: '엄마네다',
    description: '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,  
    imgUrl: store
  },
   {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,  
    imgUrl: store
  },
]