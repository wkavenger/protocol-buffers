/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: H5ActivityIdsNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class H5ActivityIdsNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        client_red_dot_timestamp?: number;
        h5_activity_map?: Map<number, number>;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("client_red_dot_timestamp" in data && data.client_red_dot_timestamp != undefined) {
                this.client_red_dot_timestamp = data.client_red_dot_timestamp;
            }
            if ("h5_activity_map" in data && data.h5_activity_map != undefined) {
                this.h5_activity_map = data.h5_activity_map;
            }
        }
        if (!this.h5_activity_map)
            this.h5_activity_map = new Map();
    }
    get client_red_dot_timestamp() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set client_red_dot_timestamp(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get h5_activity_map() {
        return pb_1.Message.getField(this, 12) as any as Map<number, number>;
    }
    set h5_activity_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 12, value as any);
    }
    static fromObject(data: {
        client_red_dot_timestamp?: number;
        h5_activity_map?: {
            [key: number]: number;
        };
    }): H5ActivityIdsNotify {
        const message = new H5ActivityIdsNotify({});
        if (data.client_red_dot_timestamp != null) {
            message.client_red_dot_timestamp = data.client_red_dot_timestamp;
        }
        if (typeof data.h5_activity_map == "object") {
            message.h5_activity_map = new Map(Object.entries(data.h5_activity_map).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data: {
            client_red_dot_timestamp?: number;
            h5_activity_map?: {
                [key: number]: number;
            };
        } = {};
        if (this.client_red_dot_timestamp != null) {
            data.client_red_dot_timestamp = this.client_red_dot_timestamp;
        }
        if (this.h5_activity_map.size > 0) {
            data.h5_activity_map = (Object.fromEntries)(this.h5_activity_map);
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.client_red_dot_timestamp != 0)
            writer.writeUint32(1, this.client_red_dot_timestamp);
        for (const [key, value] of this.h5_activity_map) {
            writer.writeMessage(12, this.h5_activity_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): H5ActivityIdsNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new H5ActivityIdsNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.client_red_dot_timestamp = reader.readUint32();
                    break;
                case 12:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.h5_activity_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): H5ActivityIdsNotify {
        return H5ActivityIdsNotify.deserialize(bytes);
    }
}
