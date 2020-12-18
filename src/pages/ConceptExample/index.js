import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import  { Redirect } from 'react-router-dom';


import './styles.css';

export default function ConceptExample(props) {
  const { concept = {} } = props.location.state;

  useEffect(() => {
    if(!props.location.state.concept) {
      return <Redirect to='/' />
    }
  })

  return (
    <div className="concept-container">
      <Header title={concept.title} />
      <div className="container-body">
        <div className="container-text">
          {concept.text.map(item => {
            if(item.type === 'text') {
              return <p className="item-text">{item.text}</p>
            }
            if(item.type === 'title') {
              return <h2>{item.text}</h2>
            }
            if(item.type === 'video') {
              return <iframe width="700" height="400" src={item.text}></iframe>
            }
            if(item.type === 'image') {
              return <img width="700" height="400" src={item.text}></img>
            }
            if(item.type === 'link') {
              return <a target="_blank" rel="noopener noreferrer" href={item.link}>{item.text}</a>
            }
          })}
        </div>
      </div>
      <Footer />

    </div>
  )
}