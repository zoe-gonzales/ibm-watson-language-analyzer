import React from 'react';

const Grid = ({ type, text, results }) => {
    return (
        <div>
            <div className="row">
                {/* User Input */}
                <div className="col s4">Text</div>
                <div className="col s8">{text}</div>
            </div>
            <div className="row">
                {/* Results headings */}
                <div className="col s4">{type}s</div>
                <div className="col s4">{type}</div>
                <div className="col s4">Relevance</div>
            </div>
            {/* Display results from API request; if not defined, display message */}
            {results ? (
                results.map(res => 
                    <div className="row" key={res.id}>
                        <div className="col s4"></div>
                        <div className="col s4">{res.keyword}</div>
                        <div className="col s4">{res.relevance}</div>
                    </div>
                ) ) : (
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