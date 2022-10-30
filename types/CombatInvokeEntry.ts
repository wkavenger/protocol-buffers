/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CombatInvokeEntry.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./CombatTypeArgument";
import * as dependency_2 from "./ForwardType";
import * as pb_1 from "google-protobuf";
export class CombatInvokeEntry extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        combat_data?: Uint8Array;
        forward_type?: dependency_2.ForwardType;
        argument_type?: dependency_1.CombatTypeArgument;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("combat_data" in data && data.combat_data != undefined) {
                this.combat_data = data.combat_data;
            }
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
            if ("argument_type" in data && data.argument_type != undefined) {
                this.argument_type = data.argument_type;
            }
        }
    }
    get combat_data() {
        return pb_1.Message.getFieldWithDefault(this, 12, new Uint8Array()) as Uint8Array;
    }
    set combat_data(value: Uint8Array) {
        pb_1.Message.setField(this, 12, value);
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 10, dependency_2.ForwardType.FORWARD_TYPE_LOCAL) as dependency_2.ForwardType;
    }
    set forward_type(value: dependency_2.ForwardType) {
        pb_1.Message.setField(this, 10, value);
    }
    get argument_type() {
        return pb_1.Message.getFieldWithDefault(this, 11, dependency_1.CombatTypeArgument.COMBAT_TYPE_ARGUMENT_NONE) as dependency_1.CombatTypeArgument;
    }
    set argument_type(value: dependency_1.CombatTypeArgument) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        combat_data?: Uint8Array;
        forward_type?: dependency_2.ForwardType;
        argument_type?: dependency_1.CombatTypeArgument;
    }): CombatInvokeEntry {
        const message = new CombatInvokeEntry({});
        if (data.combat_data != null) {
            message.combat_data = data.combat_data;
        }
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        if (data.argument_type != null) {
            message.argument_type = data.argument_type;
        }
        return message;
    }
    toObject() {
        const data: {
            combat_data?: Uint8Array;
            forward_type?: dependency_2.ForwardType;
            argument_type?: dependency_1.CombatTypeArgument;
        } = {};
        if (this.combat_data != null) {
            data.combat_data = this.combat_data;
        }
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        if (this.argument_type != null) {
            data.argument_type = this.argument_type;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.combat_data.length)
            writer.writeBytes(12, this.combat_data);
        if (this.forward_type != dependency_2.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(10, this.forward_type);
        if (this.argument_type != dependency_1.CombatTypeArgument.COMBAT_TYPE_ARGUMENT_NONE)
            writer.writeEnum(11, this.argument_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CombatInvokeEntry {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CombatInvokeEntry();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.combat_data = reader.readBytes();
                    break;
                case 10:
                    message.forward_type = reader.readEnum();
                    break;
                case 11:
                    message.argument_type = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CombatInvokeEntry {
        return CombatInvokeEntry.deserialize(bytes);
    }
}
