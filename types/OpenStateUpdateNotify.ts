/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: OpenStateUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class OpenStateUpdateNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        open_state_map?: Map<number, number>;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("open_state_map" in data && data.open_state_map != undefined) {
                this.open_state_map = data.open_state_map;
            }
        }
        if (!this.open_state_map)
            this.open_state_map = new Map();
    }
    get open_state_map() {
        return pb_1.Message.getField(this, 6) as any as Map<number, number>;
    }
    set open_state_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 6, value as any);
    }
    static fromObject(data: {
        open_state_map?: {
            [key: number]: number;
        };
    }): OpenStateUpdateNotify {
        const message = new OpenStateUpdateNotify({});
        if (typeof data.open_state_map == "object") {
            message.open_state_map = new Map(Object.entries(data.open_state_map).map(([key, value]) => [Number(key), value]));
        }
        return message;
    }
    toObject() {
        const data: {
            open_state_map?: {
                [key: number]: number;
            };
        } = {};
        if (this.open_state_map.size > 0) {
            data.open_state_map = (Object.fromEntries)(this.open_state_map);
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.open_state_map) {
            writer.writeMessage(6, this.open_state_map, () => {
                writer.writeUint32(1, key);
                writer.writeUint32(2, value);
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): OpenStateUpdateNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new OpenStateUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.open_state_map as any, reader, reader.readUint32, reader.readUint32));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): OpenStateUpdateNotify {
        return OpenStateUpdateNotify.deserialize(bytes);
    }
}
