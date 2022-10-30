/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./AbilityControlBlock";
import * as pb_1 from "google-protobuf";
export class AbilityChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        entity_id?: number;
        ability_control_block?: dependency_1.AbilityControlBlock;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("ability_control_block" in data && data.ability_control_block != undefined) {
                this.ability_control_block = data.ability_control_block;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get ability_control_block() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityControlBlock, 15) as dependency_1.AbilityControlBlock;
    }
    set ability_control_block(value: dependency_1.AbilityControlBlock) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_ability_control_block() {
        return pb_1.Message.getField(this, 15) != null;
    }
    static fromObject(data: {
        entity_id?: number;
        ability_control_block?: ReturnType<typeof dependency_1.AbilityControlBlock.prototype.toObject>;
    }): AbilityChangeNotify {
        const message = new AbilityChangeNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.ability_control_block != null) {
            message.ability_control_block = dependency_1.AbilityControlBlock.fromObject(data.ability_control_block);
        }
        return message;
    }
    toObject() {
        const data: {
            entity_id?: number;
            ability_control_block?: ReturnType<typeof dependency_1.AbilityControlBlock.prototype.toObject>;
        } = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.ability_control_block != null) {
            data.ability_control_block = this.ability_control_block.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(1, this.entity_id);
        if (this.has_ability_control_block)
            writer.writeMessage(15, this.ability_control_block, () => this.ability_control_block.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AbilityChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.entity_id = reader.readUint32();
                    break;
                case 15:
                    reader.readMessage(message.ability_control_block, () => message.ability_control_block = dependency_1.AbilityControlBlock.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AbilityChangeNotify {
        return AbilityChangeNotify.deserialize(bytes);
    }
}
