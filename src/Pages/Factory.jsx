import { Container } from '@mui/material'
import React from 'react'
import ItemFactory from '../components/ItemFactory'
import { Stack } from '@mui/system'

function Factory() {
  const data = [
    {
      id: 1,
      name: 'kakashi',
      img: 'https://1.bp.blogspot.com/-sHI-xcnZs2M/YOxql0dSCsI/AAAAAAACJoM/HzjHY26WaTAcv2O0wNqdaJfH9-Sm0UYcwCLcBGAsYHQ/w400-h400/1197-9.jpg',
      des: 'Lorem ipsum dolor sit amet consectetur  ullam laborum distinctio delectus numquam est voluptatibus at odio.',
    },
    {
      id: 2,
      name: 'kakashi',
      img: 'https://1.bp.blogspot.com/-sHI-xcnZs2M/YOxql0dSCsI/AAAAAAACJoM/HzjHY26WaTAcv2O0wNqdaJfH9-Sm0UYcwCLcBGAsYHQ/w400-h400/1197-9.jpg',
      des: 'Lorem ipsum dolor sit amet consectetur  ullam laborum distinctio delectus numquam est voluptatibus at odio.',
    },
    {
      id: 3,
      name: 'kakashi',
      img: 'https://1.bp.blogspot.com/-sHI-xcnZs2M/YOxql0dSCsI/AAAAAAACJoM/HzjHY26WaTAcv2O0wNqdaJfH9-Sm0UYcwCLcBGAsYHQ/w400-h400/1197-9.jpg',
      des: 'Lorem ipsum dolor sit amet consectetur  ullam laborum distinctio delectus numquam est voluptatibus at odio.',
    },
    {
      id: 4,
      name: 'kakashi',
      img: 'https://1.bp.blogspot.com/-sHI-xcnZs2M/YOxql0dSCsI/AAAAAAACJoM/HzjHY26WaTAcv2O0wNqdaJfH9-Sm0UYcwCLcBGAsYHQ/w400-h400/1197-9.jpg',
      des: 'Lorem ipsum dolor sit amet consectetur  ullam laborum distinctio delectus numquam est voluptatibus at odio.',
    },
  ]
  return (
    <Container
   
      className='offers-factory'
      maxWidth="xl"
      sx={{minHeight:'100vh'}}
    >
      <Stack    sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '120px',
        width:'100%',
      }}>
      {data.map((e, i) => (
        <ItemFactory key={i} item={e} />
      ))}
      </Stack>
     
    </Container>
  )
}

export default Factory
