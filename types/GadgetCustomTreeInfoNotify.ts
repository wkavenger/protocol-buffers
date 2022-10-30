/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: GadgetCustomTreeInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./CustomGadgetTreeInfo";
import * as pb_1 from "google-protobuf";
export class GadgetCustomTreeInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        custom_gadget_tree_info?: dependency_1.CustomGadgetTreeInfo;
        gadget_entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("custom_gadget_tree_info" in data && data.custom_gadget_tree_info != undefined) {
                this.custom_gadget_tree_info = data.custom_gadget_tree_info;
            }
            if ("gadget_entity_id" in data && data.gadget_entity_id != undefined) {
                this.gadget_entity_id = data.gadget_entity_id;
            }
        }
    }
    get custom_gadget_tree_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.CustomGadgetTreeInfo, 5) as dependency_1.CustomGadgetTreeInfo;
    }
    set custom_gadget_tree_info(value: dependency_1.CustomGadgetTreeInfo) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_custom_gadget_tree_info() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get gadget_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set gadget_entity_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        custom_gadget_tree_info?: ReturnType<typeof dependency_1.CustomGadgetTreeInfo.prototype.toObject>;
        gadget_entity_id?: number;
    }): GadgetCustomTreeInfoNotify {
        const message = new GadgetCustomTreeInfoNotify({});
        if (data.custom_gadget_tree_info != null) {
            message.custom_gadget_tree_info = dependency_1.CustomGadgetTreeInfo.fromObject(data.custom_gadget_tree_info);
        }
        if (data.gadget_entity_id != null) {
            message.gadget_entity_id = data.gadget_entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            custom_gadget_tree_info?: ReturnType<typeof dependency_1.CustomGadgetTreeInfo.prototype.toObject>;
            gadget_entity_id?: number;
        } = {};
        if (this.custom_gadget_tree_info != null) {
            data.custom_gadget_tree_info = this.custom_gadget_tree_info.toObject();
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
        if (this.has_custom_gadget_tree_info)
            writer.writeMessage(5, this.custom_gadget_tree_info, () => this.custom_gadget_tree_info.serialize(writer));
        if (this.gadget_entity_id != 0)
            writer.writeUint32(12, this.gadget_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GadgetCustomTreeInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GadgetCustomTreeInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    reader.readMessage(message.custom_gadget_tree_info, () => message.custom_gadget_tree_info = dependency_1.CustomGadgetTreeInfo.deserialize(reader));
                    break;
                case 12:
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
    static deserializeBinary(bytes: Uint8Array): GadgetCustomTreeInfoNotify {
        return GadgetCustomTreeInfoNotify.deserialize(bytes);
    }
}
