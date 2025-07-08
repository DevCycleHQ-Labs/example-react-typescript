import { DevCycleJSON } from "@devcycle/js-client-sdk";

declare module "@devcycle/types" {
  interface CustomVariableDefinitions extends DVCVariableTypes {}
}

export type CustomData = {
  "org-id"?: string;
  Beta?: boolean;
};
export type DVCVariableTypes = {
  /**
     * key: complete-test
     * created by: Parth Suthar
     * created on: 2025-06-19
     * @deprecated This variable is part of complete feature "complete test" and should be cleaned up.

    */
  "complete-test": boolean;
  /**
     * key: paulutest
     * created by: Paul Hayman
     * created on: 2025-06-12
     * @stale This variable is part of paulutest feature with stale reason: unused.

    */
  paulutest: boolean;
  /**
     * key: example-text
     * created by: Unknown User
     * created on: 2025-06-11
     * @stale This variable is part of Hello Togglebot - Example Feature feature with stale reason: unused.

    */
  "example-text": string;
  /**
     * key: togglebot-speed
     * created by: Unknown User
     * created on: 2025-06-11
     * @stale This variable is part of Hello Togglebot - Example Feature feature with stale reason: unused.

    */
  "togglebot-speed": string;
  /**
     * key: togglebot-wink
     * created by: Unknown User
     * created on: 2025-06-11
     * @stale This variable is part of Hello Togglebot - Example Feature feature with stale reason: unused.

    */
  "togglebot-wink": boolean;
  /**
     * key: heyo
     * created by: Jason Salaber
     * created on: 2025-04-03
     * @stale This variable is part of heyo feature with stale reason: unmodifiedShort.

    */
  heyo: boolean;
  /**
     * key: lol
     * created by: Jason Salaber
     * created on: 2025-03-28
     * @stale This variable is part of lol feature with stale reason: unmodifiedShort.

    */
  lol: boolean;
  /**
     * key: new-release
     * created by: Parth Suthar
     * created on: 2025-01-08
     * @stale This variable is part of new release feature with stale reason: unmodifiedShort.

    */
  "new-release": boolean;
  /**
     * key: testbool
     * created by: Cobi Druxerman
     * created on: 2024-07-09
     * @stale This variable is part of Test Feature feature with stale reason: unused.

    */
  testbool: boolean;
  /**
     * key: test-feature
     * created by: Cobi Druxerman
     * created on: 2024-07-09
     * @stale This variable is part of Test Feature feature with stale reason: unused.

    */
  "test-feature": boolean;
  /**
     * key: product-study-approvals-workflow
     * created by: Anthony Coelho
     * created on: 2024-07-05
     * @stale This variable is part of Product Study: Approvals Workflow feature with stale reason: unused.

    */
  "product-study-approvals-workflow": boolean;
  /**
     * key: foranthony
     * created by: Parth Suthar
     * created on: 2024-07-05
     * @stale This variable is part of foranthony feature with stale reason: unused.

    */
  foranthony: boolean;
  /**
     * key: approve-me
     * created by: Jason Salaber
     * created on: 2024-07-04
     * @stale This variable is part of Approve Me feature with stale reason: unused.

    */
  "approve-me": boolean;
  /**
     * key: test-clearing-schedule
     * created by: Elliot Campbell
     * created on: 2024-06-27
     * @stale This variable is part of Test Clearing schedule feature with stale reason: unused.

    */
  "test-clearing-schedule": boolean;
  /**
     * key: newpage
     * created by: Parth Suthar
     * created on: 2024-06-27
     * @stale This variable is part of newpage feature with stale reason: unused.

    */
  newpage: boolean;
  /**
     * key: parthsfeature
     * created by: Parth Suthar
     * created on: 2024-06-26
     * @stale This variable is part of parthsfeature feature with stale reason: unused.

    */
  parthsfeature: boolean;
  /**
     * key: a-newer-feature
     * created by: Jason Salaber
     * created on: 2024-06-25
     * @stale This variable is part of A newer Feature feature with stale reason: unused.

    */
  "a-newer-feature": boolean;
  /**
     * key: my-feature
     * created by: Jason Salaber
     * created on: 2024-06-24
     * @stale This variable is part of My Feature feature with stale reason: unused.

    */
  "my-feature": number;
  /**
     * key: this-is-a-new-feature
     * created by: Jason Salaber
     * created on: 2024-06-21
     * @stale This variable is part of This is a new Feature feature with stale reason: unused.

    */
  "this-is-a-new-feature": boolean;
  /**
     * key: come-on-now
     * created by: Unknown User
     * created on: 2023-10-27
     * @stale This variable is part of Come on Now feature with stale reason: unused.

    */
  "come-on-now": boolean;
  /**
     * key: f-adsfasdfasdf-dasds
     * created by: Unknown User
     * created on: 2023-10-27
     * @stale This variable is part of f adsfasdfasdf dasds feature with stale reason: unused.

    */
  "f-adsfasdfasdf-dasds": boolean;
  /**
     * key: fasdfdsa
     * created by: Unknown User
     * created on: 2023-10-27
     * @stale This variable is part of fasdfdsa feature with stale reason: unused.

    */
  fasdfdsa: boolean;
  /**
     * key: ssg-header
     * created by: Unknown User
     * created on: 2023-09-12
     * @deprecated This variable is part of complete feature "Simple 13 App Router Demo a" and should be cleaned up.

    */
  "ssg-header": string;
  /**
     * key: ssr-button-text
     * created by: Unknown User
     * created on: 2023-09-12
     * @deprecated This variable is part of complete feature "Simple 13 App Router Demo a" and should be cleaned up.

    */
  "ssr-button-text": string;
  /**
   * key: simple-13-app-router-demo
   * created by: Unknown User
   * created on: 2023-09-12
   */
  "simple-13-app-router-demo": boolean;
  /**
   * key: photos-source
   * created by: Unknown User
   * created on: 2023-09-10
   */
  "photos-source": string;
  /**
   * key: photos-display
   * created by: Unknown User
   * created on: 2023-09-07
   */
  "photos-display": boolean;
  /**
   * key: ssg-content
   * created by: Unknown User
   * created on: 2023-09-06
   */
  "ssg-content": DevCycleJSON;
};

/**
 * key: complete-test
 * created by: Parth Suthar
 * created on: 2025-06-19
 * @deprecated This variable is part of complete feature "complete test" and should be cleaned up.

*/

export const COMPLETE_TEST = "complete-test" as const;

/**
 * key: paulutest
 * created by: Paul Hayman
 * created on: 2025-06-12
 * @stale This variable is part of paulutest feature with stale reason: unused.

*/

export const PAULUTEST = "paulutest" as const;

/**
 * key: example-text
 * created by: Unknown User
 * created on: 2025-06-11
 * @stale This variable is part of Hello Togglebot - Example Feature feature with stale reason: unused.

*/

export const EXAMPLE_TEXT = "example-text" as const;

/**
 * key: togglebot-speed
 * created by: Unknown User
 * created on: 2025-06-11
 * @stale This variable is part of Hello Togglebot - Example Feature feature with stale reason: unused.

*/

export const TOGGLEBOT_SPEED = "togglebot-speed" as const;

/**
 * key: togglebot-wink
 * created by: Unknown User
 * created on: 2025-06-11
 * @stale This variable is part of Hello Togglebot - Example Feature feature with stale reason: unused.

*/

export const TOGGLEBOT_WINK = "togglebot-wink" as const;

/**
 * key: heyo
 * created by: Jason Salaber
 * created on: 2025-04-03
 * @stale This variable is part of heyo feature with stale reason: unmodifiedShort.

*/

export const HEYO = "heyo" as const;

/**
 * key: lol
 * created by: Jason Salaber
 * created on: 2025-03-28
 * @stale This variable is part of lol feature with stale reason: unmodifiedShort.

*/

export const LOL = "lol" as const;

/**
 * key: new-release
 * created by: Parth Suthar
 * created on: 2025-01-08
 * @stale This variable is part of new release feature with stale reason: unmodifiedShort.

*/

export const NEW_RELEASE = "new-release" as const;

/**
 * key: testbool
 * created by: Cobi Druxerman
 * created on: 2024-07-09
 * @stale This variable is part of Test Feature feature with stale reason: unused.

*/

export const TESTBOOL = "testbool" as const;

/**
 * key: test-feature
 * created by: Cobi Druxerman
 * created on: 2024-07-09
 * @stale This variable is part of Test Feature feature with stale reason: unused.

*/

export const TEST_FEATURE = "test-feature" as const;

/**
 * key: product-study-approvals-workflow
 * created by: Anthony Coelho
 * created on: 2024-07-05
 * @stale This variable is part of Product Study: Approvals Workflow feature with stale reason: unused.

*/

export const PRODUCT_STUDY_APPROVALS_WORKFLOW =
  "product-study-approvals-workflow" as const;

/**
 * key: foranthony
 * created by: Parth Suthar
 * created on: 2024-07-05
 * @stale This variable is part of foranthony feature with stale reason: unused.

*/

export const FORANTHONY = "foranthony" as const;

/**
 * key: approve-me
 * created by: Jason Salaber
 * created on: 2024-07-04
 * @stale This variable is part of Approve Me feature with stale reason: unused.

*/

export const APPROVE_ME = "approve-me" as const;

/**
 * key: test-clearing-schedule
 * created by: Elliot Campbell
 * created on: 2024-06-27
 * @stale This variable is part of Test Clearing schedule feature with stale reason: unused.

*/

export const TEST_CLEARING_SCHEDULE = "test-clearing-schedule" as const;

/**
 * key: newpage
 * created by: Parth Suthar
 * created on: 2024-06-27
 * @stale This variable is part of newpage feature with stale reason: unused.

*/

export const NEWPAGE = "newpage" as const;

/**
 * key: parthsfeature
 * created by: Parth Suthar
 * created on: 2024-06-26
 * @stale This variable is part of parthsfeature feature with stale reason: unused.

*/

export const PARTHSFEATURE = "parthsfeature" as const;

/**
 * key: a-newer-feature
 * created by: Jason Salaber
 * created on: 2024-06-25
 * @stale This variable is part of A newer Feature feature with stale reason: unused.

*/

export const A_NEWER_FEATURE = "a-newer-feature" as const;

/**
 * key: my-feature
 * created by: Jason Salaber
 * created on: 2024-06-24
 * @stale This variable is part of My Feature feature with stale reason: unused.

*/

export const MY_FEATURE = "my-feature" as const;

/**
 * key: this-is-a-new-feature
 * created by: Jason Salaber
 * created on: 2024-06-21
 * @stale This variable is part of This is a new Feature feature with stale reason: unused.

*/

export const THIS_IS_A_NEW_FEATURE = "this-is-a-new-feature" as const;

/**
 * key: come-on-now
 * created by: Unknown User
 * created on: 2023-10-27
 * @stale This variable is part of Come on Now feature with stale reason: unused.

*/

export const COME_ON_NOW = "come-on-now" as const;

/**
 * key: f-adsfasdfasdf-dasds
 * created by: Unknown User
 * created on: 2023-10-27
 * @stale This variable is part of f adsfasdfasdf dasds feature with stale reason: unused.

*/

export const F_ADSFASDFASDF_DASDS = "f-adsfasdfasdf-dasds" as const;

/**
 * key: fasdfdsa
 * created by: Unknown User
 * created on: 2023-10-27
 * @stale This variable is part of fasdfdsa feature with stale reason: unused.

*/

export const FASDFDSA = "fasdfdsa" as const;

/**
 * key: ssg-header
 * created by: Unknown User
 * created on: 2023-09-12
 * @deprecated This variable is part of complete feature "Simple 13 App Router Demo a" and should be cleaned up.

*/

export const SSG_HEADER = "ssg-header" as const;

/**
 * key: ssr-button-text
 * created by: Unknown User
 * created on: 2023-09-12
 * @deprecated This variable is part of complete feature "Simple 13 App Router Demo a" and should be cleaned up.

*/

export const SSR_BUTTON_TEXT = "ssr-button-text" as const;

/**
 * key: simple-13-app-router-demo
 * created by: Unknown User
 * created on: 2023-09-12
 */

export const SIMPLE_13_APP_ROUTER_DEMO = "simple-13-app-router-demo" as const;

/**
 * key: photos-source
 * created by: Unknown User
 * created on: 2023-09-10
 */

export const PHOTOS_SOURCE = "photos-source" as const;

/**
 * key: photos-display
 * created by: Unknown User
 * created on: 2023-09-07
 */

export const PHOTOS_DISPLAY = "photos-display" as const;

/**
 * key: ssg-content
 * created by: Unknown User
 * created on: 2023-09-06
 */

export const SSG_CONTENT = "ssg-content" as const;
