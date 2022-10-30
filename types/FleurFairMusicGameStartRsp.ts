/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: FleurFairMusicGameStartRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class FleurFairMusicGameStartRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        music_basic_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("music_basic_id" in data && data.music_basic_id != undefined) {
                this.music_basic_id = data.music_basic_id;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get music_basic_id() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set music_basic_id(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        retcode?: number;
        music_basic_id?: number;
    }): FleurFairMusicGameStartRsp {
        const message = new FleurFairMusicGameStartRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.music_basic_id != null) {
            message.music_basic_id = data.music_basic_id;
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            music_basic_id?: number;
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.music_basic_id != null) {
            data.music_basic_id = this.music_basic_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(3, this.retcode);
        if (this.music_basic_id != 0)
            writer.writeUint32(7, this.music_basic_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): FleurFairMusicGameStartRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new FleurFairMusicGameStartRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 3:
                    message.retcode = reader.readInt32();
                    break;
                case 7:
                    message.music_basic_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): FleurFairMusicGameStartRsp {
        return FleurFairMusicGameStartRsp.deserialize(bytes);
    }
}
