/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AsterMidCampInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Vector";
import * as pb_1 from "google-protobuf";
export class AsterMidCampInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        pos?: dependency_1.Vector;
        camp_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("camp_id" in data && data.camp_id != undefined) {
                this.camp_id = data.camp_id;
            }
        }
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 3) as dependency_1.Vector;
    }
    set pos(value: dependency_1.Vector) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 3) != null;
    }
    get camp_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set camp_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
        camp_id?: number;
    }): AsterMidCampInfo {
        const message = new AsterMidCampInfo({});
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.camp_id != null) {
            message.camp_id = data.camp_id;
        }
        return message;
    }
    toObject() {
        const data: {
            pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
            camp_id?: number;
        } = {};
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.camp_id != null) {
            data.camp_id = this.camp_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_pos)
            writer.writeMessage(3, this.pos, () => this.pos.serialize(writer));
        if (this.camp_id != 0)
            writer.writeUint32(8, this.camp_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AsterMidCampInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AsterMidCampInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 8:
                    message.camp_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AsterMidCampInfo {
        return AsterMidCampInfo.deserialize(bytes);
    }
}
