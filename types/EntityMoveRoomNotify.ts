/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EntityMoveRoomNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class EntityMoveRoomNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        entity_id?: number;
        dest_room_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("dest_room_id" in data && data.dest_room_id != undefined) {
                this.dest_room_id = data.dest_room_id;
            }
        }
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get dest_room_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set dest_room_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        entity_id?: number;
        dest_room_id?: number;
    }): EntityMoveRoomNotify {
        const message = new EntityMoveRoomNotify({});
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.dest_room_id != null) {
            message.dest_room_id = data.dest_room_id;
        }
        return message;
    }
    toObject() {
        const data: {
            entity_id?: number;
            dest_room_id?: number;
        } = {};
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.dest_room_id != null) {
            data.dest_room_id = this.dest_room_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.entity_id != 0)
            writer.writeUint32(11, this.entity_id);
        if (this.dest_room_id != 0)
            writer.writeUint32(9, this.dest_room_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EntityMoveRoomNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EntityMoveRoomNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.entity_id = reader.readUint32();
                    break;
                case 9:
                    message.dest_room_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EntityMoveRoomNotify {
        return EntityMoveRoomNotify.deserialize(bytes);
    }
}
