/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EnterScenePeerNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class EnterScenePeerNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        dest_scene_id?: number;
        enter_scene_token?: number;
        host_peer_id?: number;
        peer_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dest_scene_id" in data && data.dest_scene_id != undefined) {
                this.dest_scene_id = data.dest_scene_id;
            }
            if ("enter_scene_token" in data && data.enter_scene_token != undefined) {
                this.enter_scene_token = data.enter_scene_token;
            }
            if ("host_peer_id" in data && data.host_peer_id != undefined) {
                this.host_peer_id = data.host_peer_id;
            }
            if ("peer_id" in data && data.peer_id != undefined) {
                this.peer_id = data.peer_id;
            }
        }
    }
    get dest_scene_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set dest_scene_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get enter_scene_token() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set enter_scene_token(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    get host_peer_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set host_peer_id(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get peer_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set peer_id(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        dest_scene_id?: number;
        enter_scene_token?: number;
        host_peer_id?: number;
        peer_id?: number;
    }): EnterScenePeerNotify {
        const message = new EnterScenePeerNotify({});
        if (data.dest_scene_id != null) {
            message.dest_scene_id = data.dest_scene_id;
        }
        if (data.enter_scene_token != null) {
            message.enter_scene_token = data.enter_scene_token;
        }
        if (data.host_peer_id != null) {
            message.host_peer_id = data.host_peer_id;
        }
        if (data.peer_id != null) {
            message.peer_id = data.peer_id;
        }
        return message;
    }
    toObject() {
        const data: {
            dest_scene_id?: number;
            enter_scene_token?: number;
            host_peer_id?: number;
            peer_id?: number;
        } = {};
        if (this.dest_scene_id != null) {
            data.dest_scene_id = this.dest_scene_id;
        }
        if (this.enter_scene_token != null) {
            data.enter_scene_token = this.enter_scene_token;
        }
        if (this.host_peer_id != null) {
            data.host_peer_id = this.host_peer_id;
        }
        if (this.peer_id != null) {
            data.peer_id = this.peer_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dest_scene_id != 0)
            writer.writeUint32(12, this.dest_scene_id);
        if (this.enter_scene_token != 0)
            writer.writeUint32(11, this.enter_scene_token);
        if (this.host_peer_id != 0)
            writer.writeUint32(14, this.host_peer_id);
        if (this.peer_id != 0)
            writer.writeUint32(1, this.peer_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EnterScenePeerNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EnterScenePeerNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    message.dest_scene_id = reader.readUint32();
                    break;
                case 11:
                    message.enter_scene_token = reader.readUint32();
                    break;
                case 14:
                    message.host_peer_id = reader.readUint32();
                    break;
                case 1:
                    message.peer_id = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EnterScenePeerNotify {
        return EnterScenePeerNotify.deserialize(bytes);
    }
}
