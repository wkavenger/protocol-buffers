/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: BlossomBriefInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./BlossomBriefInfo";
import * as pb_1 from "google-protobuf";
export class BlossomBriefInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        brief_info_list?: dependency_1.BlossomBriefInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [4], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("brief_info_list" in data && data.brief_info_list != undefined) {
                this.brief_info_list = data.brief_info_list;
            }
        }
    }
    get brief_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.BlossomBriefInfo, 4) as dependency_1.BlossomBriefInfo[];
    }
    set brief_info_list(value: dependency_1.BlossomBriefInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 4, value);
    }
    static fromObject(data: {
        brief_info_list?: ReturnType<typeof dependency_1.BlossomBriefInfo.prototype.toObject>[];
    }): BlossomBriefInfoNotify {
        const message = new BlossomBriefInfoNotify({});
        if (data.brief_info_list != null) {
            message.brief_info_list = data.brief_info_list.map(item => dependency_1.BlossomBriefInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            brief_info_list?: ReturnType<typeof dependency_1.BlossomBriefInfo.prototype.toObject>[];
        } = {};
        if (this.brief_info_list != null) {
            data.brief_info_list = this.brief_info_list.map((item: dependency_1.BlossomBriefInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.brief_info_list.length)
            writer.writeRepeatedMessage(4, this.brief_info_list, (item: dependency_1.BlossomBriefInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlossomBriefInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlossomBriefInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 4:
                    reader.readMessage(message.brief_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_1.BlossomBriefInfo.deserialize(reader), dependency_1.BlossomBriefInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): BlossomBriefInfoNotify {
        return BlossomBriefInfoNotify.deserialize(bytes);
    }
}
