/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneTransToPointReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SceneTransToPointReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        scene_id?: number;
        point_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("scene_id" in data && data.scene_id != undefined) {
                this.scene_id = data.scene_id;
            }
            if ("point_id" in data && data.point_id != undefined) {
                this.point_id = data.point_id;
            }
        }
    }
    get scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set scene_id(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get point_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set point_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        scene_id?: number;
        point_id?: number;
    }): SceneTransToPointReq {
        const message = new SceneTransToPointReq({});
        if (data.scene_id != null) {
            message.scene_id = data.scene_id;
        }
        if (data.point_id != null) {
            message.point_id = data.point_id;
        }
        return message;
    }
    toObject() {
        const data: {
            scene_id?: number;
            point_id?: number;
        } = {};
        if (this.scene_id != null) {
            data.scene_id = this.scene_id;
        }
        if (this.point_id != null) {
            data.point_id = this.point_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.scene_id != 0)
            writer.writeUint32(13, this.scene_id);
        if (this.point_id != 0)
            writer.writeUint32(1, this.point_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SceneTransToPointReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneTransToPointReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 13:
                    message.scene_id = reader.readUint32();
                    break;
                case 1:
                    message.point_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SceneTransToPointReq {
        return SceneTransToPointReq.deserialize(bytes);
    }
}
