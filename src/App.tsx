import { useState, useEffect } from 'react';
import Card from './Card';
import Skeleton from './Skeleton';
import './App.css';

type PostType = {
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
          setPosts(data);
          setIsEmpty(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
  }, []);
  return (
    <>
      <h1>記事</h1>
      {isEmpty
        ? [1, 2, 3, 4].map((value) => <Skeleton key={value} />)
        : posts.map((post) => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))}
    </>
  );
}

export default App;
