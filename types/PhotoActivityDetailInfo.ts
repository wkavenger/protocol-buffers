/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PhotoActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PhotoStage";
import * as pb_1 from "google-protobuf";
export class PhotoActivityDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_content_closed?: boolean;
        photo_stage_list?: dependency_1.PhotoStage[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [12], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_content_closed" in data && data.is_content_closed != undefined) {
                this.is_content_closed = data.is_content_closed;
            }
            if ("photo_stage_list" in data && data.photo_stage_list != undefined) {
                this.photo_stage_list = data.photo_stage_list;
            }
        }
    }
    get is_content_closed() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set is_content_closed(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    get photo_stage_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.PhotoStage, 12) as dependency_1.PhotoStage[];
    }
    set photo_stage_list(value: dependency_1.PhotoStage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 12, value);
    }
    static fromObject(data: {
        is_content_closed?: boolean;
        photo_stage_list?: ReturnType<typeof dependency_1.PhotoStage.prototype.toObject>[];
    }): PhotoActivityDetailInfo {
        const message = new PhotoActivityDetailInfo({});
        if (data.is_content_closed != null) {
            message.is_content_closed = data.is_content_closed;
        }
        if (data.photo_stage_list != null) {
            message.photo_stage_list = data.photo_stage_list.map(item => dependency_1.PhotoStage.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            is_content_closed?: boolean;
            photo_stage_list?: ReturnType<typeof dependency_1.PhotoStage.prototype.toObject>[];
        } = {};
        if (this.is_content_closed != null) {
            data.is_content_closed = this.is_content_closed;
        }
        if (this.photo_stage_list != null) {
            data.photo_stage_list = this.photo_stage_list.map((item: dependency_1.PhotoStage) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_content_closed != false)
            writer.writeBool(4, this.is_content_closed);
        if (this.photo_stage_list.length)
            writer.writeRepeatedMessage(12, this.photo_stage_list, (item: dependency_1.PhotoStage) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PhotoActivityDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PhotoActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    message.is_content_closed = reader.readBool();
                    break;
                case 12:
                    reader.readMessage(message.photo_stage_list, () => pb_1.Message.addToRepeatedWrapperField(message, 12, dependency_1.PhotoStage.deserialize(reader), dependency_1.PhotoStage));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PhotoActivityDetailInfo {
        return PhotoActivityDetailInfo.deserialize(bytes);
    }
}
