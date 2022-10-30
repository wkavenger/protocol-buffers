/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ProudSkillChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ProudSkillChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        avatar_guid?: number;
        entity_id?: number;
        skill_depot_id?: number;
        proud_skill_list?: number[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("avatar_guid" in data && data.avatar_guid != undefined) {
                this.avatar_guid = data.avatar_guid;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("skill_depot_id" in data && data.skill_depot_id != undefined) {
                this.skill_depot_id = data.skill_depot_id;
            }
            if ("proud_skill_list" in data && data.proud_skill_list != undefined) {
                this.proud_skill_list = data.proud_skill_list;
            }
        }
    }
    get avatar_guid() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set avatar_guid(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get skill_depot_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set skill_depot_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get proud_skill_list() {
        return pb_1.Message.getFieldWithDefault(this, 12, []) as number[];
    }
    set proud_skill_list(value: number[]) {
        pb_1.Message.setField(this, 12, value);
    }
    static fromObject(data: {
        avatar_guid?: number;
        entity_id?: number;
        skill_depot_id?: number;
        proud_skill_list?: number[];
    }): ProudSkillChangeNotify {
        const message = new ProudSkillChangeNotify({});
        if (data.avatar_guid != null) {
            message.avatar_guid = data.avatar_guid;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.skill_depot_id != null) {
            message.skill_depot_id = data.skill_depot_id;
        }
        if (data.proud_skill_list != null) {
            message.proud_skill_list = data.proud_skill_list;
        }
        return message;
    }
    toObject() {
        const data: {
            avatar_guid?: number;
            entity_id?: number;
            skill_depot_id?: number;
            proud_skill_list?: number[];
        } = {};
        if (this.avatar_guid != null) {
            data.avatar_guid = this.avatar_guid;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.skill_depot_id != null) {
            data.skill_depot_id = this.skill_depot_id;
        }
        if (this.proud_skill_list != null) {
            data.proud_skill_list = this.proud_skill_list;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.avatar_guid != 0)
            writer.writeUint64(11, this.avatar_guid);
        if (this.entity_id != 0)
            writer.writeUint32(4, this.entity_id);
        if (this.skill_depot_id != 0)
            writer.writeUint32(8, this.skill_depot_id);
        if (this.proud_skill_list.length)
            writer.writePackedUint32(12, this.proud_skill_list);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProudSkillChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProudSkillChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.avatar_guid = reader.readUint64();
                    break;
                case 4:
                    message.entity_id = reader.readUint32();
                    break;
                case 8:
                    message.skill_depot_id = reader.readUint32();
                    break;
                case 12:
                    message.proud_skill_list = reader.readPackedUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ProudSkillChangeNotify {
        return ProudSkillChangeNotify.deserialize(bytes);
    }
}
