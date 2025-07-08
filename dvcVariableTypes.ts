/**
 * DevCycle Variable Types and Constants
 * This file contains all DevCycle variables used in the project
 */

// Variable constants for ease of use
export const TOGGLEBOT_WINK = 'togglebot-wink'
export const TOGGLEBOT_SPEED = 'togglebot-speed'
export const EXAMPLE_TEXT = 'example-text'

// @stale - released: this Feature has been serving in Production for a number of days
export const RELEASED_FEATURE = 'released-feature'

// @stale - unmodifiedShort: Feature has not been changed for a number of days
export const UNMODIFIED_SHORT = 'unmodified-short'

// @stale - unmodifiedLong: Feature has not been changed for a number of days longer than unmodifiedShort
export const UNMODIFIED_LONG = 'unmodified-long'

// DVCVariableTypes interface
export interface DVCVariableTypes {
  'togglebot-wink': boolean
  'togglebot-speed': string
  'example-text': string
  'released-feature': boolean // @stale
  'unmodified-short': number // @stale
  'unmodified-long': string // @stale
}