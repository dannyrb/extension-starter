export default {
  /**
   * Only required property. Should be a unique value across all extensions.
   */
  id: "starter",

  /**
   *
   * LIFECYCLE HOOKS
   */
  preRegistration({
    servicesManager = {},
    commandsManager = {},
    appConfig = {},
    configuration = {}
  }) {},

  /**
   * MODULE GETTERS
   */
  getViewportModule({ servicesManager, commandsManager }) {
    // NOT IMPLEMENTED
    return;
  },
  getSopClassHandlerModule({ servicesManager, commandsManager }) {
    // NOT IMPLEMENTED
    return;
  },
  getPanelModule({ servicesManager, commandsManager }) {
    // NOT IMPLEMENTED
    return;
  },
  getToolbarModule({ servicesManager, commandsManager }) {
    // NOT IMPLEMENTED
    return;
  },
  getCommandsModule({ servicesManager, commandsManager }) {
    // NOT IMPLEMENTED
    return;
  }
};
