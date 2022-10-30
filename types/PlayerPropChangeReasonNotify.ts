/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: PlayerPropChangeReasonNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PropChangeReason";
import * as pb_1 from "google-protobuf";
export class PlayerPropChangeReasonNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        prop_type?: number;
        old_value?: number;
        reason?: dependency_1.PropChangeReason;
        cur_value?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("prop_type" in data && data.prop_type != undefined) {
                this.prop_type = data.prop_type;
            }
            if ("old_value" in data && data.old_value != undefined) {
                this.old_value = data.old_value;
            }
            if ("reason" in data && data.reason != undefined) {
                this.reason = data.reason;
            }
            if ("cur_value" in data && data.cur_value != undefined) {
                this.cur_value = data.cur_value;
            }
        }
    }
    get prop_type() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set prop_type(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    get old_value() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set old_value(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get reason() {
        return pb_1.Message.getFieldWithDefault(this, 1, dependency_1.PropChangeReason.PROP_CHANGE_REASON_NONE) as dependency_1.PropChangeReason;
    }
    set reason(value: dependency_1.PropChangeReason) {
        pb_1.Message.setField(this, 1, value);
    }
    get cur_value() {
        return pb_1.Message.getFieldWithDefault(this, 11, 0) as number;
    }
    set cur_value(value: number) {
        pb_1.Message.setField(this, 11, value);
    }
    static fromObject(data: {
        prop_type?: number;
        old_value?: number;
        reason?: dependency_1.PropChangeReason;
        cur_value?: number;
    }): PlayerPropChangeReasonNotify {
        const message = new PlayerPropChangeReasonNotify({});
        if (data.prop_type != null) {
            message.prop_type = data.prop_type;
        }
        if (data.old_value != null) {
            message.old_value = data.old_value;
        }
        if (data.reason != null) {
            message.reason = data.reason;
        }
        if (data.cur_value != null) {
            message.cur_value = data.cur_value;
        }
        return message;
    }
    toObject() {
        const data: {
            prop_type?: number;
            old_value?: number;
            reason?: dependency_1.PropChangeReason;
            cur_value?: number;
        } = {};
        if (this.prop_type != null) {
            data.prop_type = this.prop_type;
        }
        if (this.old_value != null) {
            data.old_value = this.old_value;
        }
        if (this.reason != null) {
            data.reason = this.reason;
        }
        if (this.cur_value != null) {
            data.cur_value = this.cur_value;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.prop_type != 0)
            writer.writeUint32(6, this.prop_type);
        if (this.old_value != 0)
            writer.writeFloat(12, this.old_value);
        if (this.reason != dependency_1.PropChangeReason.PROP_CHANGE_REASON_NONE)
            writer.writeEnum(1, this.reason);
        if (this.cur_value != 0)
            writer.writeFloat(11, this.cur_value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PlayerPropChangeReasonNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PlayerPropChangeReasonNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.prop_type = reader.readUint32();
                    break;
                case 12:
                    message.old_value = reader.readFloat();
                    break;
                case 1:
                    message.reason = reader.readEnum();
                    break;
                case 11:
                    message.cur_value = reader.readFloat();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): PlayerPropChangeReasonNotify {
        return PlayerPropChangeReasonNotify.deserialize(bytes);
    }
}
