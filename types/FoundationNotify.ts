/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FoundationNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FoundationInfo";
import * as pb_1 from "google-protobuf";
export class FoundationNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        info?: dependency_1.FoundationInfo;
        gadget_entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("info" in data && data.info != undefined) {
                this.info = data.info;
            }
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
        }
    }
    get info() {
        return pb_1.Message.getWrapperField(this, dependency_1.FoundationInfo, 7) as dependency_1.FoundationInfo;
    }
    set info(value: dependency_1.FoundationInfo) {
        pb_1.Message.setWrapperField(this, 7, value);
    }
    get has_info() {
        return pb_1.Message.getField(this, 7) != null;
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set gadget_entity_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        info?: ReturnType<typeof dependency_1.FoundationInfo.prototype.toObject>;
        gadget_entity_id?: number;
    }): FoundationNotify {
        const message = new FoundationNotify({});
        if (data.info != null) {
            message.info = dependency_1.FoundationInfo.fromObject(data.info);
        }
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            info?: ReturnType<typeof dependency_1.FoundationInfo.prototype.toObject>;
            gadget_entity_id?: number;
        } = {};
        if (this.info != null) {
            data.info = this.info.toObject();
        }
        if (this.gadget_entity_id != null) {
            data.gadget_entity_id = this.gadget_entity_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_info)
            writer.writeMessage(7, this.info, () => this.info.serialize(writer));
        if (this.gadget_entity_id != 0)
            writer.writeUint32(9, this.gadget_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FoundationNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FoundationNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    reader.readMessage(message.info, () => message.info = dependency_1.FoundationInfo.deserialize(reader));
                    break;
                case 9:
                    message.gadget_entity_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FoundationNotify {
        return FoundationNotify.deserialize(bytes);
    }
}
