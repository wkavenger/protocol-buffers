/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EntityFightPropUpdateNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class EntityFightPropUpdateNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        fight_prop_map?: Map<number, number>;
        entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("fight_prop_map" in data && data.fight_prop_map != undefined) {
                this.fight_prop_map = data.fight_prop_map;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
        if (!this.fight_prop_map)
            this.fight_prop_map = new Map();
    }
    get fight_prop_map() {
        return pb_1.Message.getField(this, 15) as any as Map<number, number>;
    }
    set fight_prop_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 15, value as any);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        fight_prop_map?: {
            [key: number]: number;
        };
        entity_id?: number;
    }): EntityFightPropUpdateNotify {
        const message = new EntityFightPropUpdateNotify({});
        if (typeof data.fight_prop_map == "object") {
            message.fight_prop_map = new Map(Object.entries(data.fight_prop_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            fight_prop_map?: {
                [key: number]: number;
            };
            entity_id?: number;
        } = {};
        if (this.fight_prop_map.size > 0) {
            data.fight_prop_map = (Object.fromEntries)(this.fight_prop_map);
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
        for (const [key, value] of this.fight_prop_map) {
            writer.writeMessage(15, this.fight_prop_map, () => {
                writer.writeUint32(1, key);
                writer.writeFloat(2, value);
            });
        }
        if (this.entity_id != 0)
            writer.writeUint32(13, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EntityFightPropUpdateNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EntityFightPropUpdateNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.fight_prop_map as any, reader, reader.readUint32, reader.readFloat));
                    break;
                case 13:
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
    static deserializeBinary(bytes: Uint8Array): EntityFightPropUpdateNotify {
        return EntityFightPropUpdateNotify.deserialize(bytes);
    }
}
