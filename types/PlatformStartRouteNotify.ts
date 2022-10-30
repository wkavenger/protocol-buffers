/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlatformStartRouteNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PlatformInfo";
import * as pb_1 from "google-protobuf";
export class PlatformStartRouteNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        platform?: dependency_1.PlatformInfo;
        scene_time?: number;
        entity_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("platform" in data && data.platform != undefined) {
                this.platform = data.platform;
            }
            if ("scene_time" in data && data.scene_time != undefined) {
                this.scene_time = data.scene_time;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
        }
    }
    get platform() {
        return pb_1.Message.getWrapperField(this, dependency_1.PlatformInfo, 15) as dependency_1.PlatformInfo;
    }
    set platform(value: dependency_1.PlatformInfo) {
        pb_1.Message.setWrapperField(this, 15, value);
    }
    get has_platform() {
        return pb_1.Message.getField(this, 15) != null;
    }
    get scene_time() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set scene_time(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        platform?: ReturnType<typeof dependency_1.PlatformInfo.prototype.toObject>;
        scene_time?: number;
        entity_id?: number;
    }): PlatformStartRouteNotify {
        const message = new PlatformStartRouteNotify({});
        if (data.platform != null) {
            message.platform = dependency_1.PlatformInfo.fromObject(data.platform);
        }
        if (data.scene_time != null) {
            message.scene_time = data.scene_time;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        return message;
    }
    toObject() {
        const data: {
            platform?: ReturnType<typeof dependency_1.PlatformInfo.prototype.toObject>;
            scene_time?: number;
            entity_id?: number;
        } = {};
        if (this.platform != null) {
            data.platform = this.platform.toObject();
        }
        if (this.scene_time != null) {
            data.scene_time = this.scene_time;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_platform)
            writer.writeMessage(15, this.platform, () => this.platform.serialize(writer));
        if (this.scene_time != 0)
            writer.writeUint32(12, this.scene_time);
        if (this.entity_id != 0)
            writer.writeUint32(8, this.entity_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlatformStartRouteNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlatformStartRouteNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    reader.readMessage(message.platform, () => message.platform = dependency_1.PlatformInfo.deserialize(reader));
                    break;
                case 12:
                    message.scene_time = reader.readUint32();
                    break;
                case 8:
                    message.entity_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlatformStartRouteNotify {
        return PlatformStartRouteNotify.deserialize(bytes);
    }
}
