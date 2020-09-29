/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, css } from '@emotion/core';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from './images/logo.png';
import './index.css';
import wateringlightbulb from './images/wateringlightbulb.png';
import artyface from './images/artyface.png';
import intro from './images/intro.png';
import chapter1 from './images/chapter1.png';
import chapter2 from './images/chapter2.png';
import chapter3 from './images/chapter3.png';
import chapterx from './images/chapterx.png';
import excluill from './images/excluill.png';
import travelingfish from './images/travelingfish.png';
import examples from './images/examples.png';
import illustrations from './images/illustrations.png';
import imagination from './images/imagination.png';
import human from './images/human.png';
import partners from './images/partners.png';

const divStyle = css`
  display: flex;
`;
// const centeredContainerStyles = css`
//   padding-left: 15px;
//   padding-right: 15px;
//   margin-left: 0;
//   margin-right: auto;
// `;
const headerStyles = css`
  /* margin-left: -60px; */
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;

  z-index: 10;
`;
const headerInnerStyles = css`
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
`;

const logoStyles = css`
  margin-left: 0;
  height: 40px;
  justify-content: left;
`;
const navStyles = css`
  display: flex;
  gap: 20px;
  width: 500px;
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
  margin-top: 40px;
`;
const sectionStyle = css`
  display: flex;
`;

const sectionTextStyles = css`
  color: #555050;
  text-justify: center;
  height: 100%;
  padding: 100px;
  font-size: 26px;
  font-weight: lighter;
  margin-bottom: 60px;
`;

const sectionHeadings = css`
  color: #202020;
  text-align: center;
  text-justify: center;
  font-size: 58px;
  font-weight: normal;
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
  gap: 10px;
  justify-content: space-between;
`;

const packagesStyles = css`
  text-decoration: none;
  color: #333030;
  border: outset;
  border-radius: 2%;
  box-sizing: border-box;
  text-align: center;
  margin-left: 60px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 60px;
  border-color: rgb(32, 32, 32);
`;
const packagesImageStyles = css`
  max-width: 200px;
  height: 200px;
  object-fit: contain;
`;

const previewButtonStyles = css`
  color: white;
  background-color: black;
  text-justify: center;
  font-size: 18px;
  padding: 12px;
  border-radius: 10%;
  margin-right: 10px;
`;
const examplesImageStyles = css`
  max-height: 600px;
  max-width: 350;
  text-align: center;
  margin-left: 80px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const becomeMemberButtonStyles = css`
  color: white;
  background-color: blue;
  text-justify: center;
  font-size: 18px;
  padding: 12px;
  border-radius: 10%;
  margin-top: 40px;
`;

const subscribeButton2Styles = css`
  color: white;
  background-color: black;
  text-justify: center;
  font-size: 18px;
  padding: 12px;
  border-radius: 10%;
  margin-right: 10px;
  margin-top: 40px;
`;
const iconStyles = css`
  max-height: 25px;
  max-width: 25px;
  left: 0;
`;
const iconBoxStyle = css`
  max-height: 52;
  width: 264.984375px;
  border: outset;
  border-radius: 2%;
  box-sizing: border-box;
  text-align: center;
  margin-left: 60px;
  margin-right: 20px;
  margin-bottom: 80px;
  margin-top: 80px;
  padding: 30px;
  border-top-color: rgb(32, 32, 32);
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  vertical-align: baseline;
`;

const downloadillustrationBoxStyle = css`
  height: 605.0625px;
  width: 355.453125px;
  border: outset;
  border-radius: 2%;
  box-sizing: border-box;
  text-align: center;
  margin-left: 60px;
  margin-right: 20px;
  margin-bottom: 40px;
  margin-top: 80px;
  padding: 35.53125px;
  border-color: rgb(32, 32, 32);
  font-size: 15px;
  font-weight: normal;
  text-align: center;
  vertical-align: baseline;
  visibility: visible;
  text-align: center;
  box-shadow: rgba(48, 48, 48, 0.54) 0px 0px 1px 0px;
`;
const socialMediaStyles = css`
  font-size: 15px;
  opacity: 0.4000000059604645;
  margin-bottom: 20px;
`;
const contactInfoStyles = css`
  font-size: 16px;
  text-align: center;
`;
const priceStyles = css`
  font-size: 110px;
  font-weight: 200;
  margin: 40px;
`;

function App() {
  return (
    <>
      <div css={divStyle}>
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
            <div css={sectionTextStyles}>
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
          <div css={sectionTextStyles}>
            <h1 css={sectionHeadings}>real beauty resides in imperfection</h1>
            <p>
              In a digital era, we sometimes feel the need to interact with
              something more human that will make us appreciate both the beauty
              and the imperfection of something made by hand.
            </p>
          </div>
        </section>
        <section css={sectionStyle}>
          <div css={sectionTextStyles}>
            <h1 css={sectionHeadings}>expressiveness is... the new black</h1>
            <p>
              This series of illustrations paradoxically combines absurdity and
              a deep sense of childishness and naivety.
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
          <div css={sectionTextStyles}>
            <h1 css={sectionHeadings}>
              illustrations for applications| everything|presentations|articles|
            </h1>

            <p css={sectionTextStyles}>
              Welcome to my space for experiments! Look at this like a journey
              we can take together every step of the way, beginning another
              chapter with each new phase of the project development. And who
              knows where it will take us?{' '}
            </p>
          </div>
          <div css={sectionStyle}>
            <div css={packagesStyles}>
              <a href="#a">
                <img css={packagesImageStyles} src={intro} alt="intro" />
              </a>
              <h2 css={headingTwoStyles}>intro</h2>
              <p>
                11+4 free illustrations to start with today... and fall in love
                forever
              </p>
              <button css={previewButtonStyles}>Preview</button>
            </div>
            <div css={packagesStyles}>
              <a href="#a">
                <img
                  css={packagesImageStyles}
                  src={chapter1}
                  alt="chapter1 sketch"
                />
              </a>

              <h2 css={headingTwoStyles}>chapter 1</h2>
              <p>already done! the happy human is working on the new chapter</p>
              <button css={previewButtonStyles}>Preview</button>
            </div>
            <div css={packagesStyles}>
              <a href="#a">
                <img
                  css={packagesImageStyles}
                  src={chapter2}
                  alt="chapter2 sketch"
                />
              </a>

              <h2>chapter 2</h2>
              <p>
                already done! the happy human is working on the next chapter
              </p>
              <button css={previewButtonStyles}>Preview</button>
            </div>
          </div>
          <div css={sectionStyle}>
            <div css={packagesStyles}>
              <a href="#a">
                {' '}
                <img
                  css={packagesImageStyles}
                  src={chapter3}
                  alt="chapter3 sketch"
                />
              </a>
              <h2 css={headingTwoStyles}>chapter 3</h2>
              <p>
                work in progress... the happy human is working on regular
                updates
              </p>
              <button css={previewButtonStyles}>Preview</button>
            </div>
            <div css={packagesStyles}>
              <a href="#a">
                <img
                  css={packagesImageStyles}
                  src={chapterx}
                  alt="chapterx sketch"
                />
              </a>
              <h2 css={headingTwoStyles}>chapter x</h2>
              <p>
                30 out-of-this-world micro-illustrations exclusive to project
                members
              </p>
              <button css={previewButtonStyles}>Preview</button>
            </div>
            <div css={packagesStyles}>
              <a href="#a">
                <img
                  css={packagesImageStyles}
                  src={excluill}
                  alt="excluill sketch"
                />
              </a>
              <h2 css={headingTwoStyles}>exclusive illustrations</h2>
              <p>
                an incredible collection of exclusive illustrations entirely
                unique to you
              </p>
              <button css={previewButtonStyles}>Preview</button>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h1 css={sectionHeadings}>examples of use</h1>
            <p>
              Each illustration offers the possibility of limitless
              interpretations and uses and everyone can give it its own meaning.
              It depends only on each one's creativity and free spirit.
            </p>
          </div>
          <img css={examplesImageStyles} src={examples} alt="examples sketch" />
          <div css={sectionStyle}>
            <div css={iconBoxStyle}>
              <img
                css={iconStyles}
                src={illustrations}
                alt="illustrations emoji"
              />
              <h2>illustrations</h2>
              <p>High-Quality images with a transparent background.</p>
            </div>
            <div css={iconBoxStyle}>
              <img css={iconStyles} src={imagination} alt="imagination emoji" />
              <h2>imagination</h2>
              <p>Created by human imagination, no AI detected.</p>
            </div>
            <div css={iconBoxStyle}>
              <img css={iconStyles} src={human} alt="human emoji" />
              <h2>human</h2>
              <p>Created by a real human free hand on a digital tablet.</p>
            </div>
          </div>
        </section>

        <section sectionTextStyles>
          <h1 css={sectionHeadings}>download illustrations</h1>
          <p>
            You're free to use these illustrations for both personal and
            commercial projects. And if you want to make a human happy would be
            nice to give credits by mentioning this website or be my supporter.
            I have created a membership plan for people who love my works and
            wish to support me and receive new artwork regularly.
          </p>
          <div css={sectionStyle}>
            <div css={downloadillustrationBoxStyle}>
              free
              <p css={priceStyles}> $0 </p>
              ALL TIME
              <br />
              Link required 11+4 free images PNG format files
              <br />
              <buttom css={downloadButtonStyles}>Download</buttom>
            </div>{' '}
            <div css={downloadillustrationBoxStyle}>
              membership
              <p css={priceStyles}> $57</p>
              PER QUARTER
              <br /> Chapter 3 early-bird access Chapter X micro-illustrations
              New content regularly No link required PNG format files SVG format
              files File editing permission Premium support
              <br />
              <button css={becomeMemberButtonStyles}>Become Member</button>
            </div>
          </div>
        </section>

        <section>
          <div css={sectionTextStyles}>
            <h1 css={sectionHeadings}>appreciated and mentioned</h1>
            <p>
              When the project was launched, I received lots of positive
              feedback on my illustrations and the ethos behind them. All kinds
              of websites and web personalities have shared this project and the
              idea it’s built on - and that makes me happy.
            </p>
          </div>
          <img css={iconStyles} src={partners} alt="partners logos" />

          <butoon></butoon>
        </section>

        <section css={sectionTextStyles}>
          <h1 css={sectionHeadings}>do you want more?</h1>
          <p>
            Subscribe for new updates and illustrations. Don't miss the new
            absurd illustrations!
          </p>
          <input placeholder="Email address" />
          <button css={subscribeButton2Styles}>Subscribe</button>
        </section>
      </main>

      <footer css={footerStyles}>
        <h1 css={sectionHeadings}>any absurd suggestions?</h1>
        <div css={footerTextStyles}>
          <div>
            <h2 css={socialMediaStyles}>HQ</h2>
            <p css={contactInfoStyles}>Barcelona, Spain.</p>
          </div>
          <div>
            <h2 css={socialMediaStyles}>EMAIL</h2>
            <p css={contactInfoStyles}>xyz@absurd.design</p>
          </div>
          <div>
            <h2 css={socialMediaStyles}>INFO</h2>
            <p css={contactInfoStyles}>Terms, Privacy and License.</p>
          </div>
        </div>
        <p css={contactInfoStyles}>DON'T FOLLOW ME</p>
        <a href="#a">behance</a>
        <a href="#a">dribble</a>
        <a href="#a">twitter</a>
        <a href="#a">instagram</a>
        <a href="#a">facebook</a>
      </footer>
    </>
  );
}

export default App;
