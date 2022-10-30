/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AvatarEnterElementViewNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AvatarEnterElementViewNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_triggerd?: boolean;
        avatar_entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_triggerd" in data && data.is_triggerd != undefined) {
                this.is_triggerd = data.is_triggerd;
            }
            if ("avatar_entity_id" in data && data.avatar_entity_id != undefined) {
                this.avatar_entity_id = data.avatar_entity_id;
            }
        }
    }
    get is_triggerd() {
        return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
    }
    set is_triggerd(value: boolean) {
        pb_1.Message.setField(this, 3, value);
    }
    get avatar_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set avatar_entity_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        is_triggerd?: boolean;
        avatar_entity_id?: number;
    }): AvatarEnterElementViewNotify {
        const message = new AvatarEnterElementViewNotify({});
        if (data.is_triggerd != null) {
            message.is_triggerd = data.is_triggerd;
        }
        if (data.avatar_entity_id != null) {
            message.avatar_entity_id = data.avatar_entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            is_triggerd?: boolean;
            avatar_entity_id?: number;
        } = {};
        if (this.is_triggerd != null) {
            data.is_triggerd = this.is_triggerd;
        }
        if (this.avatar_entity_id != null) {
            data.avatar_entity_id = this.avatar_entity_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_triggerd != false)
            writer.writeBool(3, this.is_triggerd);
        if (this.avatar_entity_id != 0)
            writer.writeUint32(12, this.avatar_entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AvatarEnterElementViewNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AvatarEnterElementViewNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.is_triggerd = reader.readBool();
                    break;
                case 12:
                    message.avatar_entity_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AvatarEnterElementViewNotify {
        return AvatarEnterElementViewNotify.deserialize(bytes);
    }
}
