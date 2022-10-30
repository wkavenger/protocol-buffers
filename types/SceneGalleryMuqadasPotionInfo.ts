/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryMuqadasPotionInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SceneGalleryMuqadasPotionInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        score?: number;
        Unk3000_MKFIPLFHJNE?: number;
        Unk3000_FELJKCAAJMJ?: number;
        Unk3000_JKHKNKNBFDC?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
            if ("Unk3000_MKFIPLFHJNE" in data && data.Unk3000_MKFIPLFHJNE != undefined) {
                this.Unk3000_MKFIPLFHJNE = data.Unk3000_MKFIPLFHJNE;
            }
            if ("Unk3000_FELJKCAAJMJ" in data && data.Unk3000_FELJKCAAJMJ != undefined) {
                this.Unk3000_FELJKCAAJMJ = data.Unk3000_FELJKCAAJMJ;
            }
            if ("Unk3000_JKHKNKNBFDC" in data && data.Unk3000_JKHKNKNBFDC != undefined) {
                this.Unk3000_JKHKNKNBFDC = data.Unk3000_JKHKNKNBFDC;
            }
        }
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set score(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get Unk3000_MKFIPLFHJNE() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set Unk3000_MKFIPLFHJNE(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get Unk3000_FELJKCAAJMJ() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set Unk3000_FELJKCAAJMJ(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get Unk3000_JKHKNKNBFDC() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set Unk3000_JKHKNKNBFDC(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    static fromObject(data: {
        score?: number;
        Unk3000_MKFIPLFHJNE?: number;
        Unk3000_FELJKCAAJMJ?: number;
        Unk3000_JKHKNKNBFDC?: number;
    }): SceneGalleryMuqadasPotionInfo {
        const message = new SceneGalleryMuqadasPotionInfo({});
        if (data.score != null) {
            message.score = data.score;
        }
        if (data.Unk3000_MKFIPLFHJNE != null) {
            message.Unk3000_MKFIPLFHJNE = data.Unk3000_MKFIPLFHJNE;
        }
        if (data.Unk3000_FELJKCAAJMJ != null) {
            message.Unk3000_FELJKCAAJMJ = data.Unk3000_FELJKCAAJMJ;
        }
        if (data.Unk3000_JKHKNKNBFDC != null) {
            message.Unk3000_JKHKNKNBFDC = data.Unk3000_JKHKNKNBFDC;
        }
        return message;
    }
    toObject() {
        const data: {
            score?: number;
            Unk3000_MKFIPLFHJNE?: number;
            Unk3000_FELJKCAAJMJ?: number;
            Unk3000_JKHKNKNBFDC?: number;
        } = {};
        if (this.score != null) {
            data.score = this.score;
        }
        if (this.Unk3000_MKFIPLFHJNE != null) {
            data.Unk3000_MKFIPLFHJNE = this.Unk3000_MKFIPLFHJNE;
        }
        if (this.Unk3000_FELJKCAAJMJ != null) {
            data.Unk3000_FELJKCAAJMJ = this.Unk3000_FELJKCAAJMJ;
        }
        if (this.Unk3000_JKHKNKNBFDC != null) {
            data.Unk3000_JKHKNKNBFDC = this.Unk3000_JKHKNKNBFDC;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.score != 0)
            writer.writeUint32(6, this.score);
        if (this.Unk3000_MKFIPLFHJNE != 0)
            writer.writeUint32(4, this.Unk3000_MKFIPLFHJNE);
        if (this.Unk3000_FELJKCAAJMJ != 0)
            writer.writeUint32(10, this.Unk3000_FELJKCAAJMJ);
        if (this.Unk3000_JKHKNKNBFDC != 0)
            writer.writeUint32(9, this.Unk3000_JKHKNKNBFDC);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneGalleryMuqadasPotionInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryMuqadasPotionInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.score = reader.readUint32();
                    break;
                case 4:
                    message.Unk3000_MKFIPLFHJNE = reader.readUint32();
                    break;
                case 10:
                    message.Unk3000_FELJKCAAJMJ = reader.readUint32();
                    break;
                case 9:
                    message.Unk3000_JKHKNKNBFDC = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneGalleryMuqadasPotionInfo {
        return SceneGalleryMuqadasPotionInfo.deserialize(bytes);
    }
}
