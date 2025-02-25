import { System } from "@koinos/sdk-as";
import { modhooks } from "./proto/modhooks";
import { MODULE_HOOKS_TYPE_ID } from "./Constants";

export class ModHooks {

  callArgs: System.getArgumentsReturn | null;

  contractId: Uint8Array = System.getContractId();

  /**
   * Performs a pre-check before the main operation is executed.
   * 
   * This method is called to execute any logic that needs to run before the main operation.
   * It logs a message indicating that the pre-check has been called.
   * @external
   * @readonly
   */
  pre_check(args: modhooks.pre_check_args): modhooks.pre_check_result {
    System.log("[mod-hooks] pre_check called");
    return new modhooks.pre_check_result();
  }

  /**
   * Performs a post-check after the main operation is executed.
   * 
   * This method is called to execute any logic that needs to run after the main operation.
   * It logs a message indicating that the post-check has been called.
   * @external
   * @readonly
   */
  post_check(args: modhooks.post_check_args): void {
    System.log("[mod-hooks] post_check called");
  }

  /**
   * Handles the installation of the module.
   * 
   * This method is called when the module is installed. It can include logic
   * for setting up the module, initializing storage, or other setup tasks.
   * @external
   */
  on_install(args: modhooks.on_install_args): void {
    System.log("[mod-hooks] called module install");
  }

  /**
   * Handles the uninstallation of the module.
   * 
   * This method is called when the module is uninstalled. It can include logic
   * for cleanup tasks, such as removing storage or other resources used by the module.
   * @external
   */
  on_uninstall(args: modhooks.on_uninstall_args): void {
    System.log("[mod-hooks] called module uninstall");
  }

  /**
   * Checks if the module matches a specific type.
   * 
   * This method is called to verify if the module is of a certain type. It returns
   * a boolean indicating whether the module type matches the provided type ID.
   * @external
   * @readonly
   */
  is_type(args: modhooks.is_type_args): modhooks.is_type_result {
    const result = new modhooks.is_type_result();
    result.value = args.type_id == this.manifest().type_id;
    return result;
  }

  /**
   * Returns the manifest of the module.
   * 
   * This method provides the module's manifest, which includes metadata such as
   * the module's name, description, and type ID. It is used to describe the module
   * and its capabilities.
   * @external
   * @readonly
   */
  manifest(): modhooks.manifest {
    const result = new modhooks.manifest();
    result.name = "Module hooks";
    result.description = "Module hooks main class";
    result.type_id = MODULE_HOOKS_TYPE_ID;
    result.version = "2.0.0";
    return result;
  }
}