/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FishAttractNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./Vector";
import * as pb_1 from "google-protobuf";
export class FishAttractNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        fish_id_list?: number[];
        pos?: dependency_1.Vector;
        uid?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fish_id_list" in data && data.fish_id_list != undefined) {
                this.fish_id_list = data.fish_id_list;
            }
            if ("pos" in data && data.pos != undefined) {
                this.pos = data.pos;
            }
            if ("uid" in data && data.uid != undefined) {
                this.uid = data.uid;
            }
        }
    }
    get fish_id_list() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as number[];
    }
    set fish_id_list(value: number[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get pos() {
        return pb_1.Message.getWrapperField(this, dependency_1.Vector, 9) as dependency_1.Vector;
    }
    set pos(value: dependency_1.Vector) {
        pb_1.Message.setWrapperField(this, 9, value);
    }
    get has_pos() {
        return pb_1.Message.getField(this, 9) != null;
    }
    get uid() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set uid(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        fish_id_list?: number[];
        pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
        uid?: number;
    }): FishAttractNotify {
        const message = new FishAttractNotify({});
        if (data.fish_id_list != null) {
            message.fish_id_list = data.fish_id_list;
        }
        if (data.pos != null) {
            message.pos = dependency_1.Vector.fromObject(data.pos);
        }
        if (data.uid != null) {
            message.uid = data.uid;
        }
        return message;
    }
    toObject() {
        const data: {
            fish_id_list?: number[];
            pos?: ReturnType<typeof dependency_1.Vector.prototype.toObject>;
            uid?: number;
        } = {};
        if (this.fish_id_list != null) {
            data.fish_id_list = this.fish_id_list;
        }
        if (this.pos != null) {
            data.pos = this.pos.toObject();
        }
        if (this.uid != null) {
            data.uid = this.uid;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.fish_id_list.length)
            writer.writePackedUint32(3, this.fish_id_list);
        if (this.has_pos)
            writer.writeMessage(9, this.pos, () => this.pos.serialize(writer));
        if (this.uid != 0)
            writer.writeUint32(2, this.uid);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FishAttractNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FishAttractNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.fish_id_list = reader.readPackedUint32();
                    break;
                case 9:
                    reader.readMessage(message.pos, () => message.pos = dependency_1.Vector.deserialize(reader));
                    break;
                case 2:
                    message.uid = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FishAttractNotify {
        return FishAttractNotify.deserialize(bytes);
    }
}
