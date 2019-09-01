import React from 'react';
import Title from '../Title';

const Grid = ({ type, text, results }) => {
    const generateRows = () => {
        if (type === "Emotion") {
            return (
                <div>
                    {/* User Input */}
                    <div className="row">
                        <div className="col s4">Text</div>
                        <div className="col s8">{text}</div>
                    </div>
                    {/* Headings */}
                    <div className="row">
                        <div className="col s4">{type}s</div>
                        <div className="col s4">{type}</div>
                        <div className="col s4">Score</div>
                    </div>
                    {/* Results */}
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">Anger
                            <span role="img" aria-label="angry-face">
                            😠
                            </span>
                        </div>
                        <div className="col s4">{results.Anger}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">Disgust
                            <span role="img" aria-label="disgusted-face">
                            😖
                            </span>
                        </div>
                        <div className="col s4">{results.Disgust}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">Fear
                            <span role="img" aria-label="fearful-face">
                            😨
                            </span>
                        </div>
                        <div className="col s4">{results.Fear}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">Joy
                            <span role="img" aria-label="joyful-face">
                            😄
                            </span>
                        </div>
                        <div className="col s4">{results.Joy}</div>
                    </div>
                    <div className="row">
                        <div className="col s4"></div>
                        <div className="col s4">Sadness
                            <span role="img" aria-label="sad-face">
                            😢
                            </span>
                        </div>
                        <div className="col s4">{results.Sadness}</div>
                    </div>
                </div>
            )
        } else if (type === "Keyword") {
            return (
                <div>
                    {/* User Input */}
                    <div className="row">
                        <div className="col s3">Text</div>
                        <div className="col s9">{text}</div>
                    </div>
                    {/* Headings */}
                    <div className="row">
                        <div className="col s3">{type}s</div>
                        <div className="col s3">{type}</div>
                        <div className="col s3">Relevance</div>
                        <div className="col s3">Count</div>
                    </div>
                    {/* Results */}
                    {results.map(res => 
                        <div className="row" key={res.id}>
                            <div className="col s3"></div>
                            <div className="col s3">{res.Text}</div>
                            <div className="col s3">{res.Relevance}</div>
                            <div className="col s3">{res.Count}</div>
                        </div>
                    )}
                </div>
            )
        } else if (type === "Category") {
            return (
                <div>
                    {/* User Input */}
                    <div className="row">
                        <div className="col s4">Text</div>
                        <div className="col s8">{text}</div>
                    </div>
                    {/* Headings */}
                    <div className="row">
                        <div className="col s4">Categories</div>
                        <div className="col s4">{type}</div>
                        <div className="col s4">Score</div>
                    </div>
                    {/* Results */}
                    {results.map(res => 
                        <div className="row" key={res.id}>
                            <div className="col s4"></div>
                            <div className="col s4">{res.Label.substr(1)}</div>
                            <div className="col s4">{res.Score}</div>
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