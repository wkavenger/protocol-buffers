/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerPropNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PropValue";
import * as pb_1 from "google-protobuf";
export class PlayerPropNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        prop_map?: Map<number, dependency_1.PropValue>;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("prop_map" in data && data.prop_map != undefined) {
                this.prop_map = data.prop_map;
            }
        }
        if (!this.prop_map)
            this.prop_map = new Map();
    }
    get prop_map() {
        return pb_1.Message.getField(this, 13) as any as Map<number, dependency_1.PropValue>;
    }
    set prop_map(value: Map<number, dependency_1.PropValue>) {
        pb_1.Message.setField(this, 13, value as any);
    }
    static fromObject(data: {
        prop_map?: {
            [key: number]: ReturnType<typeof dependency_1.PropValue.prototype.toObject>;
        };
    }): PlayerPropNotify {
        const message = new PlayerPropNotify({});
        if (typeof data.prop_map == "object") {
            message.prop_map = new Map(Object.entries(data.prop_map).map(([key, value]) => [Number(key), dependency_1.PropValue.fromObject(value)]));
        }
        return message;
    }
    toObject() {
        const data: {
            prop_map?: {
                [key: number]: ReturnType<typeof dependency_1.PropValue.prototype.toObject>;
            };
        } = {};
        if (this.prop_map.size > 0) {
            data.prop_map = (Object.fromEntries)((Array.from)(this.prop_map).map(([key, value]) => [key, value.toObject()]));
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        for (const [key, value] of this.prop_map) {
            writer.writeMessage(13, this.prop_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerPropNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerPropNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.prop_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.PropValue.deserialize(reader));
                        return value;
                    }));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerPropNotify {
        return PlayerPropNotify.deserialize(bytes);
    }
}
