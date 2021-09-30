import { useState } from "react";
import React from "react";
import "./styles.css";

export default function App() {
  let [bookList, setBookList] = useState([]);

  const mytholoyDictionary = [
    {
      name: "Shri Ram charitmanas",
      author: "Tulsidas",
      ratings: "4.5",
      desc:
        "Shri Ramcharitmanas, the most famous work of Hindi literature, was written by Shri Goswami Tulsidas Ji Maharaj. Ideal Rajdharma, ideal household life, ideal family life, etc. This is a unique premise of the best ideals of human religion."
    },
    {
      name: "Mahabharat",
      author: "Ved Vyas",
      ratings: "4.0",
      desc:
        "Traditions, wisdom and the rich history of the Indian mythology are retold through this enriching collection of ancient texts of Mahabharata."
    },
    {
      name: "Bhagwat Geeta: Yatharoop",
      author: "A.C. Bhaktivendanta Swami Prabhupada",
      ratings: "4.7",
      desc:
        "The grandest idea in the religion of the Vedanta is that we may reach the same goal by different paths; and these paths I have generalised into four, viz. those of work, love, psychology and knowledge"
    },
    {
      name: "Guru Granth Sahib: The Literary Persepective",
      author: "Mohinder Kaur Gill",
      ratings: "4.2",
      desc:
        "The purpose of this book is to introduce the reader to the Sikh philosophy and its core values & beliefs, as enshrined in Shri Guru Granth Sahib - the eternal Sikh Guru."
    },
    {
      name: "The Holi Bible",
      author: "King James Version",
      ratings: "3.7",
      desc:
        "A combination of the thirty-nine books of the old testament and the twenty-seven books of the new testament, this exquisitely designed leather-bound edition of the holy Bible."
    }
  ];

  const historyDictionary = [
    {
      name: "Indians: A Breif History of Civilization ",
      author: "Namit Arora ",
      ratings: "4.5",
      desc: "Deepens our sense of the wonder that was India."
    },
    {
      name: "History of Modern India",
      author: "Bipin Chandra",
      ratings: "4.3",
      desc:
        "This book throws light on the advent of the Portuguese - The first Europeans to land in India who managed to carve out enclaves of power - showed up the chaotic situation in this vast land."
    },
    {
      name: "India's Ancient Past",
      author: "RS Sharma",
      ratings: "3.8",
      desc:
        "India's Ancient Past is a comprehensive work that captures the historical strides from neolithic and chalcolithic times to Harappan civilization, Vedic times, rise of Mauryas, Gupta's."
    },
    {
      name: "History of Medieval India",
      author: "Satish Chandra",
      ratings: "4.0",
      desc:
        "The 1000 year period covered in this book details about the sequence of events and the empires that governed different parts of the country from the eighth to the eighteenth century."
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      ratings: "4.2",
      desc: "It gives you a sense of how briefly we've been on this Earth"
    }
  ];

  const technologyDictionary = [
    {
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      ratings: "4.1",
      desc:
        "This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code."
    },
    {
      name: "Java - The Complete Reference",
      author: "Herbert Schildt",
      ratings: "3.7",
      desc:
        "The definitive guide to Java programming—thoroughly revised for long-term support release Java SE 11."
    },
    {
      name: "Python Programming: Using Problem Solving Approach",
      author: "Reema Thareja",
      ratings: "4.6",
      desc:
        "Python Programming is designed as a textbook to fulfil the requirements of the first-level course in Python programming."
    },
    {
      name: "C: The Complete Reference",
      author: "Herbert Schildt",
      ratings: "4.4",
      desc:
        "Another gem from Herb Schildt--best-selling programming author with more than 2.5 million books sold!"
    }
  ];

  const fictionDictionary = [
    {
      name: "1000 KMs to Leadership",
      author: "Mohit Chobey",
      ratings: "4.7",
      desc: "Dare to Dream. That is the Crux of the book."
    },
    {
      name: "The Krishna Key",
      author: "Ashwin Sanghi ",
      ratings: "4.4",
      desc:
        "Five thousand years ago, there came to earth a magical being called Krishna, who brought about innumerable miracles for the good of mankind."
    },
    {
      name: "Black Holes: The Reith Lectures",
      author: "Stephen Hawking",
      ratings: "4.8",
      desc:
        "In 2016 Professor Stephen Hawking delivered the BBC Reith Lectures on a subject that fascinated him for decades – black holes."
    }
  ];

  const nonFictionDictionary = [
    {
      name: "Poetics",
      author: "Aristotle",
      ratings: "3.8",
      desc:
        "Pocket Classics are perfect pocket-sized editions with complete original content. “Comedy aims at representing men as worse, tragedy as better than in actual life."
    },
    {
      name: "The Politics",
      author: "Aristotle",
      ratings: "4.8",
      desc:
        "As indicated by Aristotle, the polis, or Greek city-state, is the most elevated type of political affiliation."
    },
    {
      name: "The Theory of Everything: The Origin and Fate of the Universe",
      author: "Stephen Hawking",
      ratings: "5.0",
      desc:
        "Seven lectures by the brilliant theoretical physicist have been compiled into this book to try to explain to the common man, the complex problems of mathematics and the question that has been gripped everyone all for centuries, the theory of existence."
    }
  ];

  const romanceDictionary = [
    {
      name: "Love Seeks You and Sets You Free",
      author: "Deepika Gupta",
      ratings: "4.2",
      desc: "Universe never rejects you, it redirects you!"
    },
    {
      name: "All the Light we Cannot See",
      author: "Anthony Doerr",
      ratings: "3.5",
      desc:
        "When Marie Laure goes blind, aged six, her father builds her a model of their Paris neighbourhood, so she can memorize it with her fingers and then navigate the real streets. But when the Germans occupy Paris, father and daughter flee to Saint-Malo on the Brittany coast, where Marie-Laure’s agoraphobic great uncle lives in a tall, narrow house by the sea wall."
    },
    {
      name: "It Ends With Us: A Novel",
      author: " Colleen Hoover",
      ratings: "4.3",
      desc:
        "The newest, highly anticipated novel from beloved #1 New York Times bestselling author, Colleen Hoover. Sometimes it is the one who loves you who hurts you the most."
    }
  ];

  const kidsDictionary = [
    {
      name: "The Kid Who Came From Space",
      author: "Ross Welford",
      ratings: "4.3",
      desc:
        "The stunning new 10+ story from the bestselling and award-winning author of time travelling with a hamster, for anyone who loved the humour of wall-e."
    },
    {
      name:
        "Animals Tales From Panchtantra: Timeless Stories for Children From Ancient India",
      author: "Wonder House Books",
      ratings: "3.5",
      desc:
        "Panchatantra has been a part of the Indian folklore for many centuries and continues to enchant young readers even today. "
    },
    {
      name: "Grandma's Bag of Stories",
      author: "Sudha Murthy",
      ratings: "3.0",
      desc:
        "Memories of a grandparent spinning tales around animals and mysterious characters have kept many of us rapt till date. Sudha Murty's Grandma’s Bag of Stories is simply delightful."
    },
    {
      name: "Early Learning Library",
      author: "Wonder House Books",
      ratings: "3.6",
      desc:
        "A wonderful box set of 5 Board books to introduce your little ones to English alphabet, numbers, colors, shapes and transport."
    }
  ];

  return (
    <div className="App">
      <h1>Pustak Bhawan</h1>
      <h3>Are you a book lover??</h3>
      <div className="text-padding">
        <strong>Then you are at the right place!!</strong>
      </div>

      <button
        onClick={() => {
          setBookList(mytholoyDictionary);
        }}
        className="list-item-inline"
      >
        Mythology
      </button>

      <button
        onClick={() => {
          setBookList(historyDictionary);
        }}
        className="list-item-inline"
      >
        History
      </button>

      <button
        onClick={() => {
          setBookList(technologyDictionary);
        }}
        className="list-item-inline"
      >
        Technology
      </button>

      <button
        onClick={() => {
          setBookList(fictionDictionary);
        }}
        className="list-item-inline"
      >
        Fiction
      </button>
      <button
        onClick={() => {
          setBookList(nonFictionDictionary);
        }}
        className="list-item-inline"
      >
        Non-Fiction
      </button>
      <button
        onClick={() => {
          setBookList(romanceDictionary);
        }}
        className="list-item-inline"
      >
        Romance
      </button>

      <button
        onClick={() => {
          setBookList(kidsDictionary);
        }}
        className="list-item-inline"
      >
        Kids
      </button>

      <div>
        <img
          className="img-styling"
          // src="https://pngimage.net/wp-content/uploads/2018/06/horizontal-vine-png.png"
          // src="https://i2.wp.com/img2.pngio.com/hanging-flowers-png-picture-1926139-hanging-flowers-png-hanging-flower-png-1638_1024.png"
          src="https://thumbs.dreamstime.com/b/horizontal-seamless-background-roses-28038782.jpg"
          alt="flower vine"
        />
      </div>
      <ul className="list-non-bullet list-side-align">
        {bookList.map((book) => {
          return (
            <li className="container">
              <strong>{book.name} </strong>
              <br />
              <small>
                {" "}
                <strong>By</strong> {book.author}
              </small>{" "}
              <br />
              {book.desc} <br />
              <small>
                <strong>Rating:</strong> {book.ratings}/5.0{" "}
              </small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
