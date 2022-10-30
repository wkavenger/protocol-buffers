/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtAvatarLockChairReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Vector";
import * as pb_1 from "google-protobuf";
export class EvtAvatarLockChairReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        chair_id?: number;
        position?: dependency_1.Vector;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("chair_id" in data && data.chair_id != undefined) {
                this.chair_id = data.chair_id;
            }
            if ("position" in data && data.position != undefined) {
                this.position = data.position;
            }
        }
    }
    get chair_id() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set chair_id(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get position() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 8) as dependency_1.Vector;
    }
    set position(value: dependency_1.Vector) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_position() {
        return pb_1.Message.getField(this, 8) != null;
    }
    static fromObject(data: {
        chair_id?: number;
        position?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
    }): EvtAvatarLockChairReq {
        const message = new EvtAvatarLockChairReq({});
        if (data.chair_id != null) {
            message.chair_id = data.chair_id;
        }
        if (data.position != null) {
            message.position = dependency_1.Vector.fromObject(data.position);
        }
        return message;
    }
    toObject() {
        const data: {
            chair_id?: number;
            position?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
        } = {};
        if (this.chair_id != null) {
            data.chair_id = this.chair_id;
        }
        if (this.position != null) {
            data.position = this.position.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.chair_id != 0)
            writer.writeUint64(5, this.chair_id);
        if (this.has_position)
            writer.writeMessage(8, this.position, () => this.position.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EvtAvatarLockChairReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtAvatarLockChairReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 5:
                    message.chair_id = reader.readUint64();
                    break;
                case 8:
                    reader.readMessage(message.position, () => message.position = dependency_1.Vector.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EvtAvatarLockChairReq {
        return EvtAvatarLockChairReq.deserialize(bytes);
    }
}
