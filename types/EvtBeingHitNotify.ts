/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtBeingHitNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./EvtBeingHitInfo";
import * as dependency_2 from "./ForwardType";
import * as pb_1 from "google-protobuf";
export class EvtBeingHitNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        forward_type?: dependency_2.ForwardType;
        being_hit_info?: dependency_1.EvtBeingHitInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
            if ("being_hit_info" in data && data.being_hit_info != undefined) {
                this.being_hit_info = data.being_hit_info;
            }
        }
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 6, dependency_2.ForwardType.FORWARD_TYPE_LOCAL) as dependency_2.ForwardType;
    }
    set forward_type(value: dependency_2.ForwardType) {
        pb_1.Message.setField(this, 6, value);
    }
    get being_hit_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.EvtBeingHitInfo, 3) as dependency_1.EvtBeingHitInfo;
    }
    set being_hit_info(value: dependency_1.EvtBeingHitInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_being_hit_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data: {
        forward_type?: dependency_2.ForwardType;
        being_hit_info?: ReturnType<typeof dependency_1.EvtBeingHitInfo.prototype.toObject>;
    }): EvtBeingHitNotify {
        const message = new EvtBeingHitNotify({});
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        if (data.being_hit_info != null) {
            message.being_hit_info = dependency_1.EvtBeingHitInfo.fromObject(data.being_hit_info);
        }
        return message;
    }
    toObject() {
        const data: {
            forward_type?: dependency_2.ForwardType;
            being_hit_info?: ReturnType<typeof dependency_1.EvtBeingHitInfo.prototype.toObject>;
        } = {};
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        if (this.being_hit_info != null) {
            data.being_hit_info = this.being_hit_info.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.forward_type != dependency_2.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(6, this.forward_type);
        if (this.has_being_hit_info)
            writer.writeMessage(3, this.being_hit_info, () => this.being_hit_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EvtBeingHitNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtBeingHitNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.forward_type = reader.readEnum();
                    break;
                case 3:
                    reader.readMessage(message.being_hit_info, () => message.being_hit_info = dependency_1.EvtBeingHitInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EvtBeingHitNotify {
        return EvtBeingHitNotify.deserialize(bytes);
    }
}
