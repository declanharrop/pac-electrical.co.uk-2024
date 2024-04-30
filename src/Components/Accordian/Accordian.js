'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AccordianStyles from './Accordian.styles';

export default function Accordian({ data, color }) {
  const [active, setActive] = useState(false);

  const handleClick = (id) => {
    if (id === active) {
      return setActive(false);
    }
    setActive(id);
  };

  const animateFrom = { height: '0' };
  const animateTo = { height: 'auto' };
  const animateExit = { height: '0' };
  const transition = {
    height: { ease: 'easeOut', duration: 0.7 },
  };

  return (
    <AccordianStyles>
      {data.map((faq, i) => (
        <div className="section" key={i}>
          <div
            className="question"
            onClick={() => handleClick(faq.q)}
            style={{ color: `${color}` }}
          >
            <h5>{faq.q}</h5>
            <div className="arrow">
              <img
                className={faq.q === active ? 'active' : 'inactive'}
                src="/icons/navy-arrow.svg"
                alt=""
              />
            </div>
          </div>
          <AnimatePresence>
            {faq.q === active && (
              <motion.div
                className="answer"
                initial={animateFrom}
                animate={animateTo}
                exit={animateExit}
                transition={transition}
                style={{ borderTop: `2px solid ${color}` }}
              >
                <div className="inner">
                  <p>{faq.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </AccordianStyles>
  );
}
