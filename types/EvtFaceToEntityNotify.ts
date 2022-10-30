/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtFaceToEntityNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./ForwardType";
import * as pb_1 from "google-protobuf";
export class EvtFaceToEntityNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        face_entity_id?: number;
        forward_type?: dependency_1.ForwardType;
        entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("face_entity_id" in data && data.face_entity_id != undefined) {
                this.face_entity_id = data.face_entity_id;
            }
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
    }
    get face_entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set face_entity_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 9, dependency_1.ForwardType.FORWARD_TYPE_LOCAL) as dependency_1.ForwardType;
    }
    set forward_type(value: dependency_1.ForwardType) {
        pb_1.Message.setField(this, 9, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        face_entity_id?: number;
        forward_type?: dependency_1.ForwardType;
        entity_id?: number;
    }): EvtFaceToEntityNotify {
        const message = new EvtFaceToEntityNotify({});
        if (data.face_entity_id != null) {
            message.face_entity_id = data.face_entity_id;
        }
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            face_entity_id?: number;
            forward_type?: dependency_1.ForwardType;
            entity_id?: number;
        } = {};
        if (this.face_entity_id != null) {
            data.face_entity_id = this.face_entity_id;
        }
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.face_entity_id != 0)
            writer.writeUint32(5, this.face_entity_id);
        if (this.forward_type != dependency_1.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(9, this.forward_type);
        if (this.entity_id != 0)
            writer.writeUint32(1, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EvtFaceToEntityNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtFaceToEntityNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.face_entity_id = reader.readUint32();
                    break;
                case 9:
                    message.forward_type = reader.readEnum();
                    break;
                case 1:
                    message.entity_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EvtFaceToEntityNotify {
        return EvtFaceToEntityNotify.deserialize(bytes);
    }
}
