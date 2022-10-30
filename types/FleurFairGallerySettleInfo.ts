/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairGallerySettleInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class FleurFairGallerySettleInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        energy?: number;
        gallery_stage_index?: number;
        energy_stat_map?: Map<number, number>;
        gallery_stage_count?: number;
        is_success?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("energy" in data && data.energy != undefined) {
                this.energy = data.energy;
            }
            if ("gallery_stage_index" in data && data.gallery_stage_index != undefined) {
                this.gallery_stage_index = data.gallery_stage_index;
            }
            if ("energy_stat_map" in data && data.energy_stat_map != undefined) {
                this.energy_stat_map = data.energy_stat_map;
            }
            if ("gallery_stage_count" in data && data.gallery_stage_count != undefined) {
                this.gallery_stage_count = data.gallery_stage_count;
            }
            if ("is_success" in data && data.is_success != undefined) {
                this.is_success = data.is_success;
            }
        }
        if (!this.energy_stat_map)
            this.energy_stat_map = new Map();
    }
    get energy() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set energy(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get gallery_stage_index() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set gallery_stage_index(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get energy_stat_map() {
        return pb_1.Message.getField(this, 6) as any as Map<number, number>;
    }
    set energy_stat_map(value: Map<number, number>) {
        pb_1.Message.setField(this, 6, value as any);
    }
    get gallery_stage_count() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set gallery_stage_count(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get is_success() {
        return pb_1.Message.getFieldWithDefault(this, 1, false) as boolean;
    }
    set is_success(value: boolean) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        energy?: number;
        gallery_stage_index?: number;
        energy_stat_map?: {
            [key: number]: number;
        };
        gallery_stage_count?: number;
        is_success?: boolean;
    }): FleurFairGallerySettleInfo {
        const message = new FleurFairGallerySettleInfo({});
        if (data.energy != null) {
            message.energy = data.energy;
        }
        if (data.gallery_stage_index != null) {
            message.gallery_stage_index = data.gallery_stage_index;
        }
        if (typeof data.energy_stat_map == "object") {
            message.energy_stat_map = new Map(Object.entries(data.energy_stat_map).map(([key, value]) => [Number(key), value]));
        }
        if (data.gallery_stage_count != null) {
            message.gallery_stage_count = data.gallery_stage_count;
        }
        if (data.is_success != null) {
            message.is_success = data.is_success;
        }
        return message;
    }
    toObject() {
        const data: {
            energy?: number;
            gallery_stage_index?: number;
            energy_stat_map?: {
                [key: number]: number;
            };
            gallery_stage_count?: number;
            is_success?: boolean;
        } = {};
        if (this.energy != null) {
            data.energy = this.energy;
        }
        if (this.gallery_stage_index != null) {
            data.gallery_stage_index = this.gallery_stage_index;
        }
        if (this.energy_stat_map.size > 0) {
            data.energy_stat_map = (Object.fromEntries)(this.energy_stat_map);
        }
        if (this.gallery_stage_count != null) {
            data.gallery_stage_count = this.gallery_stage_count;
        }
        if (this.is_success != null) {
            data.is_success = this.is_success;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.energy != 0)
            writer.writeUint32(2, this.energy);
        if (this.gallery_stage_index != 0)
            writer.writeUint32(11, this.gallery_stage_index);
        for (const [key, value] of this.energy_stat_map) {
            writer.writeMessage(6, this.energy_stat_map, () => {
                writer.writeUint32(1, key);
                writer.writeInt32(2, value);
            });
        }
        if (this.gallery_stage_count != 0)
            writer.writeUint32(9, this.gallery_stage_count);
        if (this.is_success != false)
            writer.writeBool(1, this.is_success);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FleurFairGallerySettleInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairGallerySettleInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.energy = reader.readUint32();
                    break;
                case 11:
                    message.gallery_stage_index = reader.readUint32();
                    break;
                case 6:
                    reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.energy_stat_map as any, reader, reader.readUint32, reader.readInt32));
                    break;
                case 9:
                    message.gallery_stage_count = reader.readUint32();
                    break;
                case 1:
                    message.is_success = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FleurFairGallerySettleInfo {
        return FleurFairGallerySettleInfo.deserialize(bytes);
    }
}
