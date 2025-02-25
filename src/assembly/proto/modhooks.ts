import { Writer, Reader } from "as-proto";

export namespace modhooks {
  export class on_install_args {
    static encode(message: on_install_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): on_install_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new on_install_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }

  export class on_uninstall_args {
    static encode(message: on_uninstall_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): on_uninstall_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new on_uninstall_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }

  @unmanaged
  export class is_type_args {
    static encode(message: is_type_args, writer: Writer): void {
      if (message.type_id != 0) {
        writer.uint32(8);
        writer.uint32(message.type_id);
      }
    }

    static decode(reader: Reader, length: i32): is_type_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_type_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type_id = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type_id: u32;

    constructor(type_id: u32 = 0) {
      this.type_id = type_id;
    }
  }

  @unmanaged
  export class is_type_result {
    static encode(message: is_type_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): is_type_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_type_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class scope {
    static encode(message: scope, writer: Writer): void {
      if (message.entry_point != 0) {
        writer.uint32(8);
        writer.uint32(message.entry_point);
      }

      const unique_name_contract_id = message.contract_id;
      if (unique_name_contract_id !== null) {
        writer.uint32(18);
        writer.bytes(unique_name_contract_id);
      }
    }

    static decode(reader: Reader, length: i32): scope {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new scope();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.entry_point = reader.uint32();
            break;

          case 2:
            message.contract_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    entry_point: u32;
    contract_id: Uint8Array | null;

    constructor(entry_point: u32 = 0, contract_id: Uint8Array | null = null) {
      this.entry_point = entry_point;
      this.contract_id = contract_id;
    }
  }

  export class manifest {
    static encode(message: manifest, writer: Writer): void {
      const unique_name_name = message.name;
      if (unique_name_name !== null) {
        writer.uint32(10);
        writer.string(unique_name_name);
      }

      if (message.type_id != 0) {
        writer.uint32(16);
        writer.uint32(message.type_id);
      }

      const unique_name_version = message.version;
      if (unique_name_version !== null) {
        writer.uint32(26);
        writer.string(unique_name_version);
      }

      const unique_name_description = message.description;
      if (unique_name_description !== null) {
        writer.uint32(34);
        writer.string(unique_name_description);
      }

      const unique_name_scopes = message.scopes;
      for (let i = 0; i < unique_name_scopes.length; ++i) {
        writer.uint32(42);
        writer.fork();
        scope.encode(unique_name_scopes[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): manifest {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new manifest();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.type_id = reader.uint32();
            break;

          case 3:
            message.version = reader.string();
            break;

          case 4:
            message.description = reader.string();
            break;

          case 5:
            message.scopes.push(scope.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string | null;
    type_id: u32;
    version: string | null;
    description: string | null;
    scopes: Array<scope>;

    constructor(
      name: string | null = null,
      type_id: u32 = 0,
      version: string | null = null,
      description: string | null = null,
      scopes: Array<scope> = []
    ) {
      this.name = name;
      this.type_id = type_id;
      this.version = version;
      this.description = description;
      this.scopes = scopes;
    }
  }

  export class call_operation {
    static encode(message: call_operation, writer: Writer): void {
      const unique_name_contract_id = message.contract_id;
      if (unique_name_contract_id !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_contract_id);
      }

      if (message.entry_point != 0) {
        writer.uint32(16);
        writer.uint32(message.entry_point);
      }

      const unique_name_args = message.args;
      if (unique_name_args !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_args);
      }
    }

    static decode(reader: Reader, length: i32): call_operation {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new call_operation();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.entry_point = reader.uint32();
            break;

          case 3:
            message.args = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    contract_id: Uint8Array | null;
    entry_point: u32;
    args: Uint8Array | null;

    constructor(
      contract_id: Uint8Array | null = null,
      entry_point: u32 = 0,
      args: Uint8Array | null = null
    ) {
      this.contract_id = contract_id;
      this.entry_point = entry_point;
      this.args = args;
    }
  }

  export class pre_check_args {
    static encode(message: pre_check_args, writer: Writer): void {
      const unique_name_sender = message.sender;
      if (unique_name_sender !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_sender);
      }

      const unique_name_operation = message.operation;
      if (unique_name_operation !== null) {
        writer.uint32(18);
        writer.fork();
        call_operation.encode(unique_name_operation, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): pre_check_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pre_check_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.sender = reader.bytes();
            break;

          case 2:
            message.operation = call_operation.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    sender: Uint8Array | null;
    operation: call_operation | null;

    constructor(
      sender: Uint8Array | null = null,
      operation: call_operation | null = null
    ) {
      this.sender = sender;
      this.operation = operation;
    }
  }

  export class pre_check_result {
    static encode(message: pre_check_result, writer: Writer): void {
      const unique_name_value = message.value;
      if (unique_name_value !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_value);
      }
    }

    static decode(reader: Reader, length: i32): pre_check_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new pre_check_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array | null;

    constructor(value: Uint8Array | null = null) {
      this.value = value;
    }
  }

  export class post_check_args {
    static encode(message: post_check_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): post_check_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new post_check_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }
}
