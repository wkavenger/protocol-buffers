/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryBuoyantCombatInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SceneGalleryBuoyantCombatInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        score?: number;
        kill_special_monster_count?: number;
        kill_monster_count?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("kill_special_monster_count" in data && data.kill_special_monster_count != undefined) {
                this.kill_special_monster_count = data.kill_special_monster_count;
            }
            if ("kill_monster_count" in data && data.kill_monster_count != undefined) {
                this.kill_monster_count = data.kill_monster_count;
            }
        }
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set score(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get kill_special_monster_count() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set kill_special_monster_count(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get kill_monster_count() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set kill_monster_count(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        score?: number;
        kill_special_monster_count?: number;
        kill_monster_count?: number;
    }): SceneGalleryBuoyantCombatInfo {
        const message = new SceneGalleryBuoyantCombatInfo({});
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.kill_special_monster_count != null) {
            message.kill_special_monster_count = data.kill_special_monster_count;
        }
        if (data.kill_monster_count != null) {
            message.kill_monster_count = data.kill_monster_count;
        }
        return message;
    }
    toObject() {
        const data: {
            score?: number;
            kill_special_monster_count?: number;
            kill_monster_count?: number;
        } = {};
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.kill_special_monster_count != null) {
            data.kill_special_monster_count = this.kill_special_monster_count;
        }
        if (this.kill_monster_count != null) {
            data.kill_monster_count = this.kill_monster_count;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.score != 0)
            writer.writeUint32(6, this.score);
        if (this.kill_special_monster_count != 0)
            writer.writeUint32(1, this.kill_special_monster_count);
        if (this.kill_monster_count != 0)
            writer.writeUint32(14, this.kill_monster_count);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneGalleryBuoyantCombatInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryBuoyantCombatInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.score = reader.readUint32();
                    break;
                case 1:
                    message.kill_special_monster_count = reader.readUint32();
                    break;
                case 14:
                    message.kill_monster_count = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneGalleryBuoyantCombatInfo {
        return SceneGalleryBuoyantCombatInfo.deserialize(bytes);
    }
}
