/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairFallSettleNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./FleurFairFallSettleInfo";
import * as pb_1 from "google-protobuf";
export class FleurFairFallSettleNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        minigame_id?: number;
        settle_info_map?: Map<number, dependency_1.FleurFairFallSettleInfo>;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("minigame_id" in data && data.minigame_id != undefined) {
                this.minigame_id = data.minigame_id;
            }
            if ("settle_info_map" in data && data.settle_info_map != undefined) {
                this.settle_info_map = data.settle_info_map;
            }
        }
        if (!this.settle_info_map)
            this.settle_info_map = new Map();
    }
    get minigame_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set minigame_id(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get settle_info_map() {
        return pb_1.Message.getField(this, 11) as any as Map<number, dependency_1.FleurFairFallSettleInfo>;
    }
    set settle_info_map(value: Map<number, dependency_1.FleurFairFallSettleInfo>) {
        pb_1.Message.setField(this, 11, value as any);
    }
    static fromObject(data: {
        minigame_id?: number;
        settle_info_map?: {
            [key: number]: ReturnType<typeof dependency_1.FleurFairFallSettleInfo.prototype.toObject>;
        };
    }): FleurFairFallSettleNotify {
        const message = new FleurFairFallSettleNotify({});
        if (data.minigame_id != null) {
            message.minigame_id = data.minigame_id;
        }
        if (typeof data.settle_info_map == "object") {
            message.settle_info_map = new Map(Object.entries(data.settle_info_map).map(([key, value]) => [Number(key), dependency_1.FleurFairFallSettleInfo.fromObject(value)]));
        }
        return message;
    }
    toObject() {
        const data: {
            minigame_id?: number;
            settle_info_map?: {
                [key: number]: ReturnType<typeof dependency_1.FleurFairFallSettleInfo.prototype.toObject>;
            };
        } = {};
        if (this.minigame_id != null) {
            data.minigame_id = this.minigame_id;
        }
        if (this.settle_info_map.size > 0) {
            data.settle_info_map = (Object.fromEntries)((Array.from)(this.settle_info_map).map(([key, value]) => [key, value.toObject()]));
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.minigame_id != 0)
            writer.writeUint32(15, this.minigame_id);
        for (const [key, value] of this.settle_info_map) {
            writer.writeMessage(11, this.settle_info_map, () => {
                writer.writeUint32(1, key);
                writer.writeMessage(2, value, () => value.serialize(writer));
            });
        }
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FleurFairFallSettleNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairFallSettleNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.minigame_id = reader.readUint32();
                    break;
                case 11:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.settle_info_map as any, reader, reader.readUint32, () => {
                        let value;
                        reader.readMessage(message, () => value = dependency_1.FleurFairFallSettleInfo.deserialize(reader));
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
    static deserializeBinary(bytes: Uint8Array): FleurFairFallSettleNotify {
        return FleurFairFallSettleNotify.deserialize(bytes);
    }
}
