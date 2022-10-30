/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: EvtAnimatorParameterNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./EvtAnimatorParameterInfo";
import * as dependency_2 from "./ForwardType";
import * as pb_1 from "google-protobuf";
export class EvtAnimatorParameterNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        animator_param_info?: dependency_1.EvtAnimatorParameterInfo;
        forward_type?: dependency_2.ForwardType;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("animator_param_info" in data && data.animator_param_info != undefined) {
                this.animator_param_info = data.animator_param_info;
            }
            if ("forward_type" in data && data.forward_type != undefined) {
                this.forward_type = data.forward_type;
            }
        }
    }
    get animator_param_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.EvtAnimatorParameterInfo, 12) as dependency_1.EvtAnimatorParameterInfo;
    }
    set animator_param_info(value: dependency_1.EvtAnimatorParameterInfo) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_animator_param_info() {
        return pb_1.Message.getField(this, 12) != null;
    }
    get forward_type() {
        return pb_1.Message.getFieldWithDefault(this, 14, dependency_2.ForwardType.FORWARD_TYPE_LOCAL) as dependency_2.ForwardType;
    }
    set forward_type(value: dependency_2.ForwardType) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        animator_param_info?: ReturnType<typeof dependency_1.EvtAnimatorParameterInfo.prototype.toObject>;
        forward_type?: dependency_2.ForwardType;
    }): EvtAnimatorParameterNotify {
        const message = new EvtAnimatorParameterNotify({});
        if (data.animator_param_info != null) {
            message.animator_param_info = dependency_1.EvtAnimatorParameterInfo.fromObject(data.animator_param_info);
        }
        if (data.forward_type != null) {
            message.forward_type = data.forward_type;
        }
        return message;
    }
    toObject() {
        const data: {
            animator_param_info?: ReturnType<typeof dependency_1.EvtAnimatorParameterInfo.prototype.toObject>;
            forward_type?: dependency_2.ForwardType;
        } = {};
        if (this.animator_param_info != null) {
            data.animator_param_info = this.animator_param_info.toObject();
        }
        if (this.forward_type != null) {
            data.forward_type = this.forward_type;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_animator_param_info)
            writer.writeMessage(12, this.animator_param_info, () => this.animator_param_info.serialize(writer));
        if (this.forward_type != dependency_2.ForwardType.FORWARD_TYPE_LOCAL)
            writer.writeEnum(14, this.forward_type);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EvtAnimatorParameterNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new EvtAnimatorParameterNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 12:
                    reader.readMessage(message.animator_param_info, () => message.animator_param_info = dependency_1.EvtAnimatorParameterInfo.deserialize(reader));
                    break;
                case 14:
                    message.forward_type = reader.readEnum();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): EvtAnimatorParameterNotify {
        return EvtAnimatorParameterNotify.deserialize(bytes);
    }
}
