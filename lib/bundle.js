'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var semanticUiReact = require('semantic-ui-react');

const reactTableCustomFilterMethod = (filter, row) => {
  const id = filter.pivotId || filter.id;
  return row[id] !== undefined && typeof row[id] === 'string' ? String(row[id].toLowerCase()).includes(filter.value.toLowerCase()) : true;
};

const GSIM = {
  LOCALIZED: {
    CODE: 'languageCode',
    TEXT: 'languageText'
  }
};
const getLocalizedGsimObjectText = (languageCode, object) => {
  let localizedText = '-';

  if (Array.isArray(object)) {
    if (object.length !== 0) {
      const localized = object.find(object => object[GSIM.LOCALIZED.CODE] === languageCode);

      if (localized !== undefined) {
        localizedText = localized[GSIM.LOCALIZED.TEXT];
      } else {
        if (object[0][GSIM.LOCALIZED.TEXT] !== undefined) {
          localizedText = object[0][GSIM.LOCALIZED.TEXT];
        }
      }
    }
  }

  return localizedText;
};
const getNestedObject = (initialObject, pathToNestedObject) => pathToNestedObject.reduce((object, key) => object && object[key] !== 'undefined' ? object[key] : undefined, initialObject);

const truncateString = (string, length = 32) => {
  if (typeof string === 'string') {
    return string.length > length ? string.substring(0, length) + '...' : string;
  } else {
    return '...';
  }
};

const SSB_COLORS = {
  BACKGROUND: '#f0f8f9',
  BLUE: '#3396D2',
  GREEN: '#00824D',
  GREY: '#909090',
  PURPLE: '#9272FC',
  RED: '#ED5935',
  YELLOW: '#C78800'
};
const SSB_STYLE = {
  background: SSB_COLORS.BACKGROUND
};

function InfoText({
  text
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(semanticUiReact.Icon, {
    name: "info circle",
    style: {
      color: SSB_COLORS.BLUE
    }
  }), text);
}

function InfoPopup({
  text,
  position,
  trigger
}) {
  return /*#__PURE__*/React.createElement(semanticUiReact.Popup, {
    basic: true,
    flowing: true,
    size: "large",
    position: position,
    trigger: trigger
  }, /*#__PURE__*/React.createElement(InfoText, {
    text: text
  }));
}

const LANGUAGE = {
  ENGLISH: {
    en: 'English',
    nb: 'Engelsk'
  },
  LANGUAGE: {
    en: 'Language',
    nb: 'Språk'
  },
  LANGUAGES: {
    ENGLISH: {
      languageCode: 'en'
    },
    NORWEGIAN: {
      languageCode: 'nb'
    }
  },
  LANGUAGE_CHOICE: {
    en: 'English',
    nb: 'Norsk'
  },
  LOCALE: {
    en: 'en-GB',
    nb: 'nb-NO'
  },
  NORWEGIAN: {
    en: 'Norwegian',
    nb: 'Norsk'
  }
};

const REACT_TABLE_TEXT = {
  LOADING: {
    en: 'Loading',
    nb: 'Laster'
  },
  NEXT: {
    en: 'Next',
    nb: 'Neste'
  },
  NOTHING_FOUND: {
    en: 'Found nothing...',
    nb: 'Fant ingenting...'
  },
  OF: {
    en: 'of',
    nb: 'av'
  },
  PAGE: {
    en: 'Page',
    nb: 'Side'
  },
  PREVIOUS: {
    en: 'Previous',
    nb: 'Forrige'
  },
  ROWS: {
    en: 'rows',
    nb: 'rader'
  }
};

exports.InfoPopup = InfoPopup;
exports.InfoText = InfoText;
exports.LANGUAGE = LANGUAGE;
exports.REACT_TABLE_TEXT = REACT_TABLE_TEXT;
exports.SSB_COLORS = SSB_COLORS;
exports.SSB_STYLE = SSB_STYLE;
exports.getLocalizedGsimObjectText = getLocalizedGsimObjectText;
exports.getNestedObject = getNestedObject;
exports.reactTableCustomFilterMethod = reactTableCustomFilterMethod;
exports.truncateString = truncateString;
