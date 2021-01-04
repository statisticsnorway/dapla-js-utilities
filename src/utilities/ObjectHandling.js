const GSIM = {
  LOCALIZED: {
    CODE: 'languageCode',
    TEXT: 'languageText'
  }
}

export const getLocalizedGsimObjectText = (languageCode, object) => {
  let localizedText = '-'

  if (Array.isArray(object)) {
    if (object.length !== 0) {
      const localized = object.find(innerObjects => innerObjects[GSIM.LOCALIZED.CODE] === languageCode)

      if (localized !== undefined) {
        localizedText = localized[GSIM.LOCALIZED.TEXT]
      } else {
        if (object[0][GSIM.LOCALIZED.TEXT] !== undefined) {
          localizedText = object[0][GSIM.LOCALIZED.TEXT]
        }
      }
    }
  }

  return localizedText
}

export const getNestedObject = (initialObject, pathToNestedObject) =>
  pathToNestedObject.reduce((object, key) =>
    (object && object[key] !== 'undefined') ? object[key] : undefined, initialObject
  )
