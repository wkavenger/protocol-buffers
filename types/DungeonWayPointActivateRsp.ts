/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonWayPointActivateRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class DungeonWayPointActivateRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        way_point_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("way_point_id" in data && data.way_point_id != undefined) {
                this.way_point_id = data.way_point_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get way_point_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set way_point_id(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        retcode?: number;
        way_point_id?: number;
    }): DungeonWayPointActivateRsp {
        const message = new DungeonWayPointActivateRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.way_point_id != null) {
            message.way_point_id = data.way_point_id;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            way_point_id?: number;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.way_point_id != null) {
            data.way_point_id = this.way_point_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (this.way_point_id != 0)
            writer.writeUint32(7, this.way_point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DungeonWayPointActivateRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonWayPointActivateRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.retcode = reader.readInt32();
                    break;
                case 7:
                    message.way_point_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DungeonWayPointActivateRsp {
        return DungeonWayPointActivateRsp.deserialize(bytes);
    }
}
