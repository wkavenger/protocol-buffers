/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ChannelerSlabStageActiveChallengeIndexNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ChannelerSlabStageActiveChallengeIndexNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        stage_id?: number;
        challenge_index?: number;
        active_camp_index?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("challenge_index" in data && data.challenge_index != undefined) {
                this.challenge_index = data.challenge_index;
            }
            if ("active_camp_index" in data && data.active_camp_index != undefined) {
                this.active_camp_index = data.active_camp_index;
            }
        }
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get challenge_index() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set challenge_index(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get active_camp_index() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set active_camp_index(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        stage_id?: number;
        challenge_index?: number;
        active_camp_index?: number;
    }): ChannelerSlabStageActiveChallengeIndexNotify {
        const message = new ChannelerSlabStageActiveChallengeIndexNotify({});
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.challenge_index != null) {
            message.challenge_index = data.challenge_index;
        }
        if (data.active_camp_index != null) {
            message.active_camp_index = data.active_camp_index;
        }
        return message;
    }
    toObject() {
        const data: {
            stage_id?: number;
            challenge_index?: number;
            active_camp_index?: number;
        } = {};
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.challenge_index != null) {
            data.challenge_index = this.challenge_index;
        }
        if (this.active_camp_index != null) {
            data.active_camp_index = this.active_camp_index;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.stage_id != 0)
            writer.writeUint32(15, this.stage_id);
        if (this.challenge_index != 0)
            writer.writeUint32(12, this.challenge_index);
        if (this.active_camp_index != 0)
            writer.writeUint32(6, this.active_camp_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ChannelerSlabStageActiveChallengeIndexNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ChannelerSlabStageActiveChallengeIndexNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.stage_id = reader.readUint32();
                    break;
                case 12:
                    message.challenge_index = reader.readUint32();
                    break;
                case 6:
                    message.active_camp_index = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ChannelerSlabStageActiveChallengeIndexNotify {
        return ChannelerSlabStageActiveChallengeIndexNotify.deserialize(bytes);
    }
}
