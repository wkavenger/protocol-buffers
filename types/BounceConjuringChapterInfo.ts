/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BounceConjuringChapterInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class BounceConjuringChapterInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        best_score?: number;
        open_time?: number;
        chapter_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("best_score" in data && data.best_score != undefined) {
                this.best_score = data.best_score;
            }
            if ("open_time" in data && data.open_time != undefined) {
                this.open_time = data.open_time;
            }
            if ("chapter_id" in data && data.chapter_id != undefined) {
                this.chapter_id = data.chapter_id;
            }
        }
    }
    get best_score() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set best_score(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get open_time() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set open_time(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get chapter_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set chapter_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    static fromObject(data: {
        best_score?: number;
        open_time?: number;
        chapter_id?: number;
    }): BounceConjuringChapterInfo {
        const message = new BounceConjuringChapterInfo({});
        if (data.best_score != null) {
            message.best_score = data.best_score;
        }
        if (data.open_time != null) {
            message.open_time = data.open_time;
        }
        if (data.chapter_id != null) {
            message.chapter_id = data.chapter_id;
        }
        return message;
    }
    toObject() {
        const data: {
            best_score?: number;
            open_time?: number;
            chapter_id?: number;
        } = {};
        if (this.best_score != null) {
            data.best_score = this.best_score;
        }
        if (this.open_time != null) {
            data.open_time = this.open_time;
        }
        if (this.chapter_id != null) {
            data.chapter_id = this.chapter_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.best_score != 0)
            writer.writeUint32(12, this.best_score);
        if (this.open_time != 0)
            writer.writeUint32(9, this.open_time);
        if (this.chapter_id != 0)
            writer.writeUint32(13, this.chapter_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BounceConjuringChapterInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BounceConjuringChapterInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.best_score = reader.readUint32();
                    break;
                case 9:
                    message.open_time = reader.readUint32();
                    break;
                case 13:
                    message.chapter_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): BounceConjuringChapterInfo {
        return BounceConjuringChapterInfo.deserialize(bytes);
    }
}
