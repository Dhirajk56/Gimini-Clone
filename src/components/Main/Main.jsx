import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import Markdown from "react-markdown";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult && (
          <>
            <div className="greet">
              <p>
                <span>Hello,Dev.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Suggested berutiful places to see on an upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Suggested berutiful places to see on an upcoming road trip
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Suggested berutiful places to see on an upcoming road trip
                </p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Suggested berutiful places to see on an upcoming road trip
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        )}
        {showResult && (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading && (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              )}
              {/* <p dangerouslySetInnerHTML={{ __html: resultData }}></p> */}
              <Markdown>{resultData}</Markdown>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter the prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inccurate info, including about people, so double
            check its reponse. your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
