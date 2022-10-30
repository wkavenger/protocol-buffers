/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AsterProgressInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./AsterProgressDetailInfo";
import * as pb_1 from "google-protobuf";
export class AsterProgressInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        info?: dependency_1.AsterProgressDetailInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("info" in data && data.info != undefined) {
                this.info = data.info;
            }
        }
    }
    get info() {
        return pb_1.Message.getWrapperField(this, dependency_1.AsterProgressDetailInfo, 1) as dependency_1.AsterProgressDetailInfo;
    }
    set info(value: dependency_1.AsterProgressDetailInfo) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_info() {
        return pb_1.Message.getField(this, 1) != null;
    }
    static fromObject(data: {
        info?: ReturnType<typeof dependency_1.AsterProgressDetailInfo.prototype.toObject>;
    }): AsterProgressInfoNotify {
        const message = new AsterProgressInfoNotify({});
        if (data.info != null) {
            message.info = dependency_1.AsterProgressDetailInfo.fromObject(data.info);
        }
        return message;
    }
    toObject() {
        const data: {
            info?: ReturnType<typeof dependency_1.AsterProgressDetailInfo.prototype.toObject>;
        } = {};
        if (this.info != null) {
            data.info = this.info.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_info)
            writer.writeMessage(1, this.info, () => this.info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AsterProgressInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AsterProgressInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.info, () => message.info = dependency_1.AsterProgressDetailInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AsterProgressInfoNotify {
        return AsterProgressInfoNotify.deserialize(bytes);
    }
}
