/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerCookReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class PlayerCookReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        cook_count?: number;
        qte_quality?: number;
        recipe_id?: number;
        assist_avatar?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("cook_count" in data && data.cook_count != undefined) {
                this.cook_count = data.cook_count;
            }
            if ("qte_quality" in data && data.qte_quality != undefined) {
                this.qte_quality = data.qte_quality;
            }
            if ("recipe_id" in data && data.recipe_id != undefined) {
                this.recipe_id = data.recipe_id;
            }
            if ("assist_avatar" in data && data.assist_avatar != undefined) {
                this.assist_avatar = data.assist_avatar;
            }
        }
    }
    get cook_count() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set cook_count(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get qte_quality() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set qte_quality(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get recipe_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set recipe_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get assist_avatar() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set assist_avatar(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        cook_count?: number;
        qte_quality?: number;
        recipe_id?: number;
        assist_avatar?: number;
    }): PlayerCookReq {
        const message = new PlayerCookReq({});
        if (data.cook_count != null) {
            message.cook_count = data.cook_count;
        }
        if (data.qte_quality != null) {
            message.qte_quality = data.qte_quality;
        }
        if (data.recipe_id != null) {
            message.recipe_id = data.recipe_id;
        }
        if (data.assist_avatar != null) {
            message.assist_avatar = data.assist_avatar;
        }
        return message;
    }
    toObject() {
        const data: {
            cook_count?: number;
            qte_quality?: number;
            recipe_id?: number;
            assist_avatar?: number;
        } = {};
        if (this.cook_count != null) {
            data.cook_count = this.cook_count;
        }
        if (this.qte_quality != null) {
            data.qte_quality = this.qte_quality;
        }
        if (this.recipe_id != null) {
            data.recipe_id = this.recipe_id;
        }
        if (this.assist_avatar != null) {
            data.assist_avatar = this.assist_avatar;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.cook_count != 0)
            writer.writeUint32(1, this.cook_count);
        if (this.qte_quality != 0)
            writer.writeUint32(12, this.qte_quality);
        if (this.recipe_id != 0)
            writer.writeUint32(8, this.recipe_id);
        if (this.assist_avatar != 0)
            writer.writeUint32(14, this.assist_avatar);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerCookReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerCookReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.cook_count = reader.readUint32();
                    break;
                case 12:
                    message.qte_quality = reader.readUint32();
                    break;
                case 8:
                    message.recipe_id = reader.readUint32();
                    break;
                case 14:
                    message.assist_avatar = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerCookReq {
        return PlayerCookReq.deserialize(bytes);
    }
}
