/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryHomeBalloonInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SceneGalleryHomeBalloonInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        score?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("score" in data && data.score != undefined) {
                this.score = data.score;
            }
        }
    }
    get score() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set score(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        score?: number;
    }): SceneGalleryHomeBalloonInfo {
        const message = new SceneGalleryHomeBalloonInfo({});
        if (data.score != null) {
            message.score = data.score;
        }
        return message;
    }
    toObject() {
        const data: {
            score?: number;
        } = {};
        if (this.score != null) {
            data.score = this.score;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.score != 0)
            writer.writeUint32(7, this.score);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneGalleryHomeBalloonInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryHomeBalloonInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.score = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneGalleryHomeBalloonInfo {
        return SceneGalleryHomeBalloonInfo.deserialize(bytes);
    }
}
