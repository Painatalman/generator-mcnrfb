/**
 *  The fortune cookie container
 *  provides the state minus the presentation.
 *  This one is responsible for getting the data as props or default props
 *  and for getting a list of languages
 *  The state includes:
 *   - current language
 *   - current quote
 *  The props include:
 *   - alternative list of quote data
 *   - initial language (language)
 *   - list of languages (languages)
 *  It is still unclear if this component should allow for
 *  languages with no quotes or that are not even referred to
 *  to be selected
 */

import React, { Component } from 'react';
import FortuneCookiePresentation from './FortuneCookiePresentation';
import quoteData from './FortuneCookie.data.json';

/**
 * Returns the keys of an object, in order to get all languages
 * @param {Object} data 
 */
export function getAllLanguagesFromData(data) {
  // just get the keys... assuming the data is well structured
  return Object.keys(data);
}

export default class FortuneCookie extends Component {
  getInitialLanguage() {
    return getAllLanguagesFromData(this.props.quoteObject)[0]
  }

  setLanguage(language) {
    this.setState({
      language: language,
      quote: this.getRandomQuote(language)
    });
  }

  /**
   * Returns a quote from the quote object, based on an optional language parameter
   * If no language parameter is provided, the returned quote will be in the current component's state language 
   * @param {string} [language] the desired language the quote should be in 
   */
  getRandomQuote(language) {
    let quotes = this.props.quoteObject[language || this.state.language];
    
    return quotes[Math.floor(Math.random()*quotes.length)]
  }

  setQuote(language) {
    this.setState({
      quote: this.getRandomQuote(language)
    })
  }

  constructor(props) {
    super(props);

    let language = props.language || this.getInitialLanguage(props.quoteData);
    
    this.state = {
      language: language,
      quote: this.getRandomQuote(language)
    }
  }


  render() {
    let languages = getAllLanguagesFromData(this.props.quoteObject);

    return (
      <div>
        <FortuneCookiePresentation 
          onChangeLanguage={(e) => this.setLanguage(e.target.value)}
          language={this.state.language}
          languages={languages}
          quote={this.state.quote}
          onChangeQuote={() => this.setQuote()} />
      </div>
    );
  }
}

FortuneCookie.defaultProps = {
  quoteObject: quoteData
};
