/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from 'react';
import { jsx, css } from '@emotion/core';
import logo from './images/logo.png';
import './index.css';
import wateringlightbulb from './images/wateringlightbulb.png';
import artyface from './images/artyface.png';
import travelingfish from './images/travelingfish.png';

const divStyle = css`
  display: flex;
`;

const centeredContainerStyles = css`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 0;
  margin-right: auto;
`;

const headerStyles = css`
  /* margin-left: -60px; */
  /* display: flex; */
  position: fixed;
  /* justify-content: space-between; */
  background-color: white;
  z-index: 10;

  /* .overlay {
    width: 100%;
    color: #333030;
    opacity: 1;
    padding: 20px 0;
    z-index: -1;
  } */
`;

const headerInnerStyles = css`
  ${centeredContainerStyles};
  font-size: 12px;
  display: flex;
  justify-content: right;
`;

const logoStyles = css`
  margin-left: 0;
  height: 40px;
  justify-content: left;
`;

const navStyles = css`
  display: flex;
  gap: 20px;
  width: 430px;

  
  a {
    text-decoration: none;
    color: #333030;
    transition: color 0.2s;
    line-height: 38px;

  } 

    &:hover {
      color: black;
      cursor: pointer;
      color: inherit;
    }
  }
`;

const downloadButtonStyles = css`
  color: white;
  background-color: black;
  text-justify: center;
  font-size: 18px;
  padding: 12px;
  border-radius: 10%;
  margin-right: 10px;
`;

const subscribeButtonStyles = css`
  color: black;
  background-color: white;
  text-justify: center;
  font-size: 18px;
  padding: 12px;
  border-radius: 10%;
`;

const absurdImageStyles = css`
  max-height: 543px;
  max-width: 128;
`;
const sectionStyle = css`
  display: flex;
`;

const SectionTextStyles = css`
  color: #555050;
  text-justify: center;
  height: 100%;
  padding: 100px;
  font-size: 26px;
  font-weight: lighter;
  margin-bottom: 60px;
`;

const sectionHeadings = css`
  font-size: 36;
  color: #202020;
`;

const headingTwoStyles = css`
  font-size: 8;
`;

const footerStyles = css`
  text-justify: center;
  margin-left: 60px;
`;

const footerTextStyles = css`
  text-justify: center;
  margin-left: 60px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

const packagesStyles = css`
  text-decoration: none;
  color: #333030;
  border: solid;
  border-color: rgb(32, 32, 32);
  box-sizing: border-box;
  text-align: center;
`;

function App() {
  return (
    <>
      <div>
        <div>
          <header css={headerStyles}>
            <div>
              <a href="#a">
                <img css={logoStyles} src={logo} alt="Absurd Logo" />
              </a>
            </div>
            <div css={headerInnerStyles}>
              <nav css={navStyles}>
                <a href="#a">WHY?</a>
                <a href="#a">BUY</a>
                <a href="#a">ILLUSTRATIONS SERIES</a>
                <a href="#a">EXCLUSIVE ILLUSTRATIONS</a>
              </nav>
            </div>
          </header>
        </div>

        <main>
          <section css={sectionStyle}>
            <div css={divStyle}>
              <div>
                <h1 css={sectionHeadings}>
                  absurd illustrations that make sense
                </h1>
                <p>
                  What about absurd illustrations for your projects? Take every
                  user on an individual journey through their own imagination.
                </p>

                <button css={downloadButtonStyles}>Download</button>
                <button css={subscribeButtonStyles}>Subscribe</button>
              </div>
              <a href="#a">
                <img
                  css={absurdImageStyles}
                  src={wateringlightbulb}
                  alt="lightbulb with tap eatering a plant"
                />
              </a>
            </div>
          </section>
          <section css={sectionStyle}>
            <a href="#a">
              <img
                css={absurdImageStyles}
                src={artyface}
                alt="arty face scketch"
              />
            </a>
            <div css={SectionTextStyles}>
              <h1 css={sectionHeadings}>real beauty resides in imperfection</h1>
              <p>
                In a digital era, we sometimes feel the need to interact with
                something more human that will make us appreciate both the
                beauty and the imperfection of something made by hand.
              </p>
            </div>
          </section>
          <section css={sectionStyle}>
            <div css={SectionTextStyles}>
              <h1 css={sectionHeadings}>expressiveness is... the new black</h1>
              <p>
                This series of illustrations paradoxically combines absurdity
                and a deep sense of childishness and naivety.
              </p>
            </div>
            <a href="#a">
              <img
                css={absurdImageStyles}
                src={travelingfish}
                alt="traveling fish sketch"
              />
            </a>
          </section>

          <section>
            <div>
              <h1 css={sectionHeadings}>
                illustrations for applications|
                everything|presentations|articles|
              </h1>

              <p>
                Welcome to my space for experiments! Look at this like a journey
                we can take together every step of the way, beginning another
                chapter with each new phase of the project development. And who
                knows where it will take us?{' '}
              </p>
            </div>
            <div css={sectionStyle}>
              <a css={packagesStyles} href="#a">
                {/* <img alt="" src={} /> */}
                <h2 css={headingTwoStyles}>intro</h2>
                <p>
                  11+4 free illustrations to start with today... and fall in
                  love forever
                </p>
                <button></button>
              </a>
              <a css={packagesStyles} href="#a">
                {/* <img alt="" src={} /> */}
                <h2 css={headingTwoStyles}>chapter 1</h2>
                <p>
                  already done! the happy human is working on the new chapter
                </p>
                <button></button>
              </a>
              <a css={packagesStyles} href="#a">
                {/* <img alt="" src={} /> */}
                <h2>chapter 2</h2>
                <p>
                  already done! the happy human is working on the next chapter
                </p>
                <button></button>
              </a>
            </div>
            <div css={sectionStyle}>
              <a css={packagesStyles} href="#a">
                {/* <img alt="" src={} /> */}
                <h2 css={headingTwoStyles}>chapter 3</h2>
                <p>
                  work in progress... the happy human is working on regular
                  updates
                </p>
                <button></button>
              </a>
              <a css={packagesStyles} href="#a">
                {/* <img alt="" src={} /> */}
                <h2 css={headingTwoStyles}>chapter x</h2>
                <p>
                  30 out-of-this-world micro-illustrations exclusive to project
                  members
                </p>
                <button></button>
              </a>
              <a css={packagesStyles} href="#a">
                {/* <img alt="" src={} /> */}
                <h2 css={headingTwoStyles}>exclusive illustrations</h2>
                <p>
                  an incredible collection of exclusive illustrations entirely
                  unique to you
                </p>
                <button></button>
              </a>
            </div>
          </section>

          <section>
            <div css={SectionTextStyles}>
              <h1 css={sectionHeadings}>examples of use</h1>
              <p>
                Each illustration offers the possibility of limitless
                interpretations and uses and everyone can give it its own
                meaning. It depends only on each one's creativity and free
                spirit.
              </p>
            </div>
            {/* <img alt="" src={} /> */}
            <div css={sectionStyle}>
              <div>
                {/* <img alt="" src={} /> */}
                <h2>illustrations</h2>
                <p>High-Quality images with a transparent background.</p>
              </div>
              <div>
                {/* <img alt="" src={} /> */}
                <h2>imagination</h2>
                <p>Created by human imagination, no AI detected.</p>
              </div>
              <div>
                {/* <img alt="" src={} /> */}
                <h2>human</h2>
                <p>Created by a real human free hand on a digital tablet.</p>
              </div>
            </div>
          </section>

          <section>
            <h1 css={sectionHeadings}>download illustrations</h1>
            <p>
              You're free to use these illustrations for both personal and
              commercial projects. And if you want to make a human happy would
              be nice to give credits by mentioning this website or be my
              supporter. I have created a membership plan for people who love my
              works and wish to support me and receive new artwork regularly.
            </p>
            <div css={sectionStyle}>
              <div>
                <p>
                  free$0ALL TIMELink required 11+4 free images PNG format files
                </p>
                <buttom></buttom>
              </div>

              <div>
                membership$57PER QUARTER Chapter 3 early-bird access Chapter X
                micro-illustrations New content regularly No link required PNG
                format files SVG format files File editing permission Premium
                support
                <button></button>
              </div>
            </div>
          </section>

          <section>
            <div css={SectionTextStyles}>
              <h1 css={sectionHeadings}>appreciated and mentioned</h1>
              <p>
                When the project was launched, I received lots of positive
                feedback on my illustrations and the ethos behind them. All
                kinds of websites and web personalities have shared this project
                and the idea it’s built on - and that makes me happy.
              </p>
            </div>
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            {/* <img alt="" src={} /> */}
            <butoon></butoon>
          </section>

          <section>
            <h1 css={sectionHeadings}>do you want more?</h1>
            <p>
              Subscribe for new updates and illustrations. Don't miss the new
              absurd illustrations!
            </p>
            <input placeholder="Email address" />
            <button></button>
          </section>
        </main>

        <footer css={footerStyles}>
          <h1 css={sectionHeadings}>any absurd suggestions?</h1>
          <div css={footerTextStyles}>
            <div>
              <h2>HQ</h2>
              <p>Barcelona, Spain.</p>
            </div>
            <div>
              <h2>EMAIL</h2>
              <p>xyz@absurd.design</p>
            </div>
            <div>
              <h2>INFO</h2>
              <p>Terms, Privacy and License.</p>
            </div>
          </div>
          <p>DON'T FOLLOW ME</p>
          <a href="#a">behance</a>
          <a href="#a">dribble</a>
          <a href="#a">twitter</a>
          <a href="#a">instagram</a>
          <a href="#a">facebook</a>
        </footer>
      </div>
    </>
  );
}

export default App;
