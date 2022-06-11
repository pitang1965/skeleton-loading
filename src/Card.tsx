import type { FC } from 'react';

type Props = {
  title: string;
  body: string;
}
const Card:FC<Props> = (props) => {
  return (
    <div className='card'>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default Card;