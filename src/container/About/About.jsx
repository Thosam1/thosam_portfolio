import React, { useState, useEffect } from 'react'

// animations
import { motion } from 'framer-motion';

// wrapper
import { AppWrap, MotionWrap } from '../../wrapper';

// backend
import { urlFor, client } from '../../client';

// images
import { images } from '../../constants'

// styles
import './About.scss';

const About = () => {

  // array of things we want to say
  const [abouts, setAbouts] = useState([]); // initially empty -> before fetching the data

  // only ran once, when component loads
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} /> {/* urlFor() is a sanity function */}
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   'app__whitebg',
// );