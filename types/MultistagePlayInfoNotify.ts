/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: MultistagePlayInfoNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./MultistagePlayInfo";
import * as pb_1 from "google-protobuf";
export class MultistagePlayInfoNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        info?: dependency_1.MultistagePlayInfo;
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
        return pb_1.Message.getWrapperField(this, dependency_1.MultistagePlayInfo, 13) as dependency_1.MultistagePlayInfo;
    }
    set info(value: dependency_1.MultistagePlayInfo) {
        pb_1.Message.setWrapperField(this, 13, value);
    }
    get has_info() {
        return pb_1.Message.getField(this, 13) != null;
    }
    static fromObject(data: {
        info?: ReturnType<typeof dependency_1.MultistagePlayInfo.prototype.toObject>;
    }): MultistagePlayInfoNotify {
        const message = new MultistagePlayInfoNotify({});
        if (data.info != null) {
            message.info = dependency_1.MultistagePlayInfo.fromObject(data.info);
        }
        return message;
    }
    toObject() {
        const data: {
            info?: ReturnType<typeof dependency_1.MultistagePlayInfo.prototype.toObject>;
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
            writer.writeMessage(13, this.info, () => this.info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MultistagePlayInfoNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MultistagePlayInfoNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    reader.readMessage(message.info, () => message.info = dependency_1.MultistagePlayInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): MultistagePlayInfoNotify {
        return MultistagePlayInfoNotify.deserialize(bytes);
    }
}
