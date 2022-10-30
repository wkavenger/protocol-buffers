/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DragonSpineChapterProgressChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class DragonSpineChapterProgressChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        schedule_id?: number;
        chapter_id?: number;
        cur_progress?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("schedule_id" in data && data.schedule_id != undefined) {
                this.schedule_id = data.schedule_id;
            }
            if ("chapter_id" in data && data.chapter_id != undefined) {
                this.chapter_id = data.chapter_id;
            }
            if ("cur_progress" in data && data.cur_progress != undefined) {
                this.cur_progress = data.cur_progress;
            }
        }
    }
    get schedule_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set schedule_id(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get chapter_id() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set chapter_id(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get cur_progress() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set cur_progress(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    static fromObject(data: {
        schedule_id?: number;
        chapter_id?: number;
        cur_progress?: number;
    }): DragonSpineChapterProgressChangeNotify {
        const message = new DragonSpineChapterProgressChangeNotify({});
        if (data.schedule_id != null) {
            message.schedule_id = data.schedule_id;
        }
        if (data.chapter_id != null) {
            message.chapter_id = data.chapter_id;
        }
        if (data.cur_progress != null) {
            message.cur_progress = data.cur_progress;
        }
        return message;
    }
    toObject() {
        const data: {
            schedule_id?: number;
            chapter_id?: number;
            cur_progress?: number;
        } = {};
        if (this.schedule_id != null) {
            data.schedule_id = this.schedule_id;
        }
        if (this.chapter_id != null) {
            data.chapter_id = this.chapter_id;
        }
        if (this.cur_progress != null) {
            data.cur_progress = this.cur_progress;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.schedule_id != 0)
            writer.writeUint32(7, this.schedule_id);
        if (this.chapter_id != 0)
            writer.writeUint32(11, this.chapter_id);
        if (this.cur_progress != 0)
            writer.writeUint32(5, this.cur_progress);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DragonSpineChapterProgressChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DragonSpineChapterProgressChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 7:
                    message.schedule_id = reader.readUint32();
                    break;
                case 11:
                    message.chapter_id = reader.readUint32();
                    break;
                case 5:
                    message.cur_progress = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DragonSpineChapterProgressChangeNotify {
        return DragonSpineChapterProgressChangeNotify.deserialize(bytes);
    }
}
