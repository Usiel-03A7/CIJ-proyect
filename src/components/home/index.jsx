import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import Wrapper from '../wrapper';
import Article from '../article';
import Avisos from '../avisos';
import Footer from '../footer';
import Contactanos from '../contactanos';

import app from '../../data/firebase';

export default function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const db = getFirestore(app);
    const getArticles = async () => {
      const snapshot = await getDocs(collection(db, 'articles'));
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setArticles(data);
    };
    getArticles();
  }, []);
  return (
    <>
      <Wrapper />
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          subtitle={article.subtitle}
          text={article.text}
        />
      ))}
      <Avisos />
      <Contactanos />
      <Footer />
    </>
  );
}
