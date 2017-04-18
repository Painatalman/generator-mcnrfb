/**
 *  The fortune cookie component 
 *  has a div (or another semantic HTMLelement) 
 *  And a button or, on click, it *changes quote*
 *  On a simple manner, this will simply render a *random quote*
 *  based on its *language*
 *  It must thus have an object with *lists of quotes* in different languages
 *  which will be its *supported languages*
 *  since it has a *language* list, it should
 *  provide a mechanism for *changing languages*
 *  If not set, all *selectable languages* can be determined by
 *  the source of all quotes, which will be an object 
 *  with the following structure:
 *  {
 *   "pt": [],
 *   "en": [] 
 *  }
 *  It is still unclear if this component should allow for
 *  languages with no quotes or that are not even referred to
 *  to be selected
 */

import jsdom from 'jsdom';

import FortuneCookie, {getAllLanguagesFromData} from '../src/components/FortuneCookie/FortuneCookie.js';
import React from 'react';
import { mount } from 'enzyme';

import {expect} from 'chai';

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

describe('Fortune Cookie component', () => {
  let wrapper, data;
  
  beforeEach( () => {
      wrapper = mount(
        <FortuneCookie />
      );
      
      data = require('../src/components/FortuneCookie/FortuneCookie.data.json');
  });
    // it('should have a consistent structure', () => {
    //   expect(toJson(wrapper)).toMatchSnapshot();
    // });
  
    it('should have a div element for the quote', () => {
      expect(wrapper.find('div.fortune-cookie__quote').length).to.equal(1);
    })
    
    it('should have a button to change the quote', () => {
      expect(wrapper.find('button').length).to.equal(1);
    })
    
    it('should have a selector for changing language', () => {
      // this might be changed for a new component
      expect(wrapper.find('select').length).to.equal(1);
    });

    it('should have an option for each language in data', () => {
      let localData = {
        en: [
          'me and you'
        ],
        pt: [
          'eu e tu'
        ],
        fr: [
          'bla bla bla'
        ]
      };

      let localWrapper = mount(
        <FortuneCookie quoteObject={localData}></FortuneCookie>
      );

      expect(localWrapper.find('option').length).to.equal(3);
    })
    
    it('should start with the first language in the data source', () => {
      let localData = {
        ru: [
          'me and you'
        ],
        pt: [
          'eu e tu'
        ],
        fr: [
          'bla bla bla'
        ]
      };

      let state = mount(
        <FortuneCookie quoteObject={localData}></FortuneCookie>
      ).state();

      expect(state.language).to.equal('ru');
   
    })

    it('should start with a quote in the first language in the data source', () => {
      let localData = {
        ru: [
          'bla bla da'
        ],
        pt: [
          'eu e tu'
        ],
        fr: [
          'bla bla bla'
        ]
      };

      let quoteElement = mount(
        <FortuneCookie quoteObject={localData}></FortuneCookie>
      ).find('.fortune-cookie__quote').getDOMNode();

      expect(quoteElement.textContent).to.equal('bla bla da');
    })
    
    
    it('should have a source of information with a structure of {lang:[], ...}', () => {
      // should be a props
      expect(wrapper.props().quoteObject).to.deep.equal(data);
    })
    
    it('should have the language state set to the initial language, if such prop exists, and the corresponding select element should have such value', () => {
      let wrapper = mount(
        <FortuneCookie language="pt"></FortuneCookie>
      )

      expect(wrapper.find('select').getDOMNode().value).to.equal('pt');
      expect(wrapper.state().language).to.equal('pt');

  })
    
    it('must call the changeQuote method when the button is clicked', () => {
      throw new Error('Not implemented');
    });
  
})

describe('button', () => {
  it('should call the setRandomQuote method', () => {
    throw new Error('Not implemented');
  })
})

describe('getRandomQuote method', () => {
  it('should return a quote in the currently activated langauge', () => {
    throw new Error('Not implemented');
  })
})

describe('setRandomQuote method', () => {
  it('should call the getRandomQuote method to get a quote', () => {
    throw new Error('Not implemented');
  })
  
  it('should change the value of the current quote', () => {
    throw new Error('Not implemented');
  })
})


describe('setLanguage method', () => {
  it('should change the quote inside to something', () => {
    throw new Error('Not Implemented')
  })
  it('should call the getRandomQuote method', () => {
    throw new Error('Not Implemented')
  })
});

describe('getAllLanguagesFromData helper method', () => {
  let data;
  beforeEach(() => {
    data = {
      "en": ['a', 'b', 'c'],
      "fr": ['a', 'b', 'c'],
      "pt": ['a', 'b', 'c']
    }

  })
  it('should return a list', () => {
    expect(getAllLanguagesFromData(data)).to.be.an('array');
  });
  it('should return a list of languages which are properties of the object, assuming them to be the only keys', () => {
    expect(getAllLanguagesFromData(data)).to.deep.equal(['en','fr','pt']);
  });
})

describe('getInitialLanguage', () => {
  let data = {
      "pt": ['a', 'b', 'c'],
      "en": ['a', 'b', 'c'],
      "fr": ['a', 'b', 'c']
  };

  it('should return a string', () => {
    expect(mount(
    <FortuneCookie quoteObject={data}>
    </FortuneCookie>
  ).instance().getInitialLanguage(data)).to.be.a('string');
  });
  it('should return the first key', () => {
    expect(mount(
    <FortuneCookie quoteObject={data}>
    </FortuneCookie>
  ).instance().getInitialLanguage(data)).to.equal('pt');
  });
})