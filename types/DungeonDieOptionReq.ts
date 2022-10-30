/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonDieOptionReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./PlayerDieOption";
import * as pb_1 from "google-protobuf";
export class DungeonDieOptionReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        die_option?: dependency_1.PlayerDieOption;
        is_quit_immediately?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("die_option" in data && data.die_option != undefined) {
                this.die_option = data.die_option;
            }
            if ("is_quit_immediately" in data && data.is_quit_immediately != undefined) {
                this.is_quit_immediately = data.is_quit_immediately;
            }
        }
    }
    get die_option() {
        return pb_1.Message.getFieldWithDefault(this, 11, dependency_1.PlayerDieOption.PLAYER_DIE_OPTION_OPT_NONE) as dependency_1.PlayerDieOption;
    }
    set die_option(value: dependency_1.PlayerDieOption) {
        pb_1.Message.setField(this, 11, value);
    }
    get is_quit_immediately() {
        return pb_1.Message.getFieldWithDefault(this, 14, false) as boolean;
    }
    set is_quit_immediately(value: boolean) {
        pb_1.Message.setField(this, 14, value);
    }
    static fromObject(data: {
        die_option?: dependency_1.PlayerDieOption;
        is_quit_immediately?: boolean;
    }): DungeonDieOptionReq {
        const message = new DungeonDieOptionReq({});
        if (data.die_option != null) {
            message.die_option = data.die_option;
        }
        if (data.is_quit_immediately != null) {
            message.is_quit_immediately = data.is_quit_immediately;
        }
        return message;
    }
    toObject() {
        const data: {
            die_option?: dependency_1.PlayerDieOption;
            is_quit_immediately?: boolean;
        } = {};
        if (this.die_option != null) {
            data.die_option = this.die_option;
        }
        if (this.is_quit_immediately != null) {
            data.is_quit_immediately = this.is_quit_immediately;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.die_option != dependency_1.PlayerDieOption.PLAYER_DIE_OPTION_OPT_NONE)
            writer.writeEnum(11, this.die_option);
        if (this.is_quit_immediately != false)
            writer.writeBool(14, this.is_quit_immediately);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DungeonDieOptionReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonDieOptionReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 11:
                    message.die_option = reader.readEnum();
                    break;
                case 14:
                    message.is_quit_immediately = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DungeonDieOptionReq {
        return DungeonDieOptionReq.deserialize(bytes);
    }
}
