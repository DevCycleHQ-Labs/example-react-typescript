/**
 * DevCycle Variable Types and Constants
 * This file contains all DevCycle variables used in the project
 */

// Variable constants for ease of use
export const TOGGLEBOT_WINK = 'togglebot-wink'
export const TOGGLEBOT_SPEED = 'togglebot-speed'
export const EXAMPLE_TEXT = 'example-text'

// @stale - unused: this variable hasn't been found to have evaluations in the backend
export const OLD_UNUSED_VARIABLE = 'old-unused-variable'

// @stale - unmodifiedShort: Feature has not been changed for a number of days
export const UNMODIFIED_SHORT = 'unmodified-short'

// @stale - unmodifiedLong: Feature has not been changed for a number of days longer than unmodifiedShort
export const UNMODIFIED_LONG = 'unmodified-long'

// DVCVariableTypes interface
export interface DVCVariableTypes {
  'togglebot-wink': boolean
  'togglebot-speed': string
  'example-text': string
  'old-unused-variable': string // @stale
  'unmodified-short': number // @stale
  'unmodified-long': string // @stale
}