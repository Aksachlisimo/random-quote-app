import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer.js';

function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteColor, setQuoteColor] = useState('#000'); // Default text color
  const [iconColor, setIconColor]  = useState('#000');
 
  const quotes = [
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
      author: "Unknown"
    },
    {
      text: "What we think, we become.",
      author: "Buddha"
    },
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      text: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg"
    },
    {
      text: "Don't count the days, make the days count.",
      author: "Muhammad Ali"
    },
    {
      text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      author: "Jimmy Dean"
    },
    {
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "Life is what happens when you’re busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "My biggest victories in life were when I was sad.",
      author: "Andrew Tate"
    },
    {
      text: "Reject weakness in any form.",
      author: "Andrew Tate"
    },
    {
      text: "You’re stressing over the stuff you shouldn’t.",
      author: "Andrew Tate"
    },
    {
      text: "IT IS NOT OVER UNTIL I WIN",
      author: "Aksachli"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "Life is really simple, but we insist on making it complicated.",
      author: "Confucius"
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",
      author: "Unknown"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      text: "What we think, we become.",
      author: "Buddha"
    },
    {
      text: "Do one thing every day that scares you.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      text: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
      author: "Mark Zuckerberg"
    },
    {
      text: "Don't count the days, make the days count.",
      author: "Muhammad Ali"
    },
    {
      text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
      author: "Jimmy Dean"
    },
  ];
  

  useEffect(() => {
    loadRandomQuote();
  }, []);

  const loadRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuoteIndex(randomIndex);

    // Generate a random color
    const randomColor = getRandomColor();
    setQuoteColor(randomColor);

    // Generate a random color for icons
    const randomIconColor = getRandomIconColor();
    setIconColor(randomIconColor);
  };

  const getRandomIconColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleNewQuote = () => {
    // Add the "fade" class to the text element to trigger the transition
    const textElement = document.getElementById('text');
    textElement.classList.add('fade');
  
    setTimeout(() => {
      // Remove the "fade" class after a short delay to reset the transition
      textElement.classList.remove('fade');
      loadRandomQuote();
    }, 400); // Adjust the delay (in milliseconds) as needed
  };
  

  return (
    <div id="quote-box" style={{ backgroundColor: quoteColor, color: quoteColor}}>
      <div className='quote-container'>
        {quotes.length > 0 && (
          <>
          <span className="icon" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">
            <i className="fas fa-quote-left" style={{ color: quoteColor }}></i>
          </span>
            <h1 id='text'>{quotes[quoteIndex].text}</h1>
            <p id='author'>{quotes[quoteIndex].author}</p>
          </>
        )}
          <div className="icons-container">

        
      <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" style={{ backgroundColor: quoteColor, color: 'white' }}></i>
      </a>
      <a id="tumblr-quote" href="https://www.tumblr.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tumblr" style={{ backgroundColor: quoteColor, color: 'white' }}></i>
      </a>
  <button id='new-quote' style={{backgroundColor:quoteColor, color:'white'}} onClick={handleNewQuote}>New quote</button>
     
     </div>
      </div>

      <Footer />

    </div>

  );
}

export default App;
