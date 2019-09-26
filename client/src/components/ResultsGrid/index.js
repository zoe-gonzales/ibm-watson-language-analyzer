import React from 'react';
import Title from '../Title';
import './style.css';

const Grid = ({ type, text, results }) => {
    const generateRows = () => {
        if (type === "Emotion") {
            return (
                <div>
                    {/* User Input */}
                    <div className="row">
                        <div className="col s4 txt label">Text</div>
                        <div className="col s8 txt">{text}</div>
                    </div>
                    {/* Headings */}
                    <div className="row">
                        <div className="col s4 txt label">{type}s</div>
                        <div className="col s4 txt label">{type}</div>
                        <div className="col s4 txt label">Score</div>
                    </div>
                    {/* Results */}
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4 txt">Anger
                            <span role="img" aria-label="angry-face" className="emoji">
                            😠
                            </span>
                        </div>
                        <div className="col s4 txt">{results.Anger}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4 txt">Disgust
                            <span role="img" aria-label="disgusted-face" className="emoji">
                            😖
                            </span>
                        </div>
                        <div className="col s4 txt">{results.Disgust}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4 txt">Fear
                            <span role="img" aria-label="fearful-face" className="emoji">
                            😨
                            </span>
                        </div>
                        <div className="col s4 txt">{results.Fear}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4 txt">Joy
                            <span role="img" aria-label="joyful-face" className="emoji">
                            😄
                            </span>
                        </div>
                        <div className="col s4 txt">{results.Joy}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4 txt">Sadness
                            <span role="img" aria-label="sad-face" className="emoji">
                            😢
                            </span>
                        </div>
                        <div className="col s4 txt">{results.Sadness}</div>
                    </div>
                </div>
            )
        } else if (type === "Keyword") {
            return (
                <div>
                    {/* User Input */}
                    <div className="row">
                        <div className="col s3 txt label">Text</div>
                        <div className="col s9 txt">{text}</div>
                    </div>
                    {/* Headings */}
                    <div className="row">
                        <div className="col s3 txt label">{type}s</div>
                        <div className="col s3 txt label">{type}</div>
                        <div className="col s3 txt label">Relevance</div>
                        <div className="col s3 txt label">Count</div>
                    </div>
                    {/* Results */}
                    {results.map(res => 
                        <div className="row" key={res.id}>
                            <div className="col s3 txt"></div>
                            <div className="col s3 txt">{res.Text}</div>
                            <div className="col s3 txt">{res.Relevance}</div>
                            <div className="col s3 txt">{res.Count}</div>
                        </div>
                    )}
                </div>
            )
        } else if (type === "Category") {
            return (
                <div>
                    {/* User Input */}
                    <div className="row">
                        <div className="col s4 txt label">Text</div>
                        <div className="col s8 txt">{text}</div>
                    </div>
                    {/* Headings */}
                    <div className="row">
                        <div className="col s4 txt label">Categories</div>
                        <div className="col s4 txt label">{type}</div>
                        <div className="col s4 txt label">Score</div>
                    </div>
                    {/* Results */}
                    {results.map(res => 
                        <div className="row" key={res.id}>
                            <div className="col s4"></div>
                            <div className="col s4 txt">{res.Label.substr(1)}</div>
                            <div className="col s4 txt">{res.Score}</div>
                        </div>
                    )}
                </div>
            )
        }
    }

    return (
        <div>
            {/* Display results from API request; if not defined, display message */}
            <Title>Language Analyzer</Title>
            {results 
                ? generateRows()
                : (
                    <div className="row">
                        <div className="col s12">
                            Sorry, no results were found for your search. Please try again!
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Grid;