/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SeaLampActivityDetailInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class SeaLampActivityDetailInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        phase_id?: number;
        taken_phase_reward_list?: number[];
        taken_contribution_reward_list?: number[];
        progress?: number;
        contribution?: number;
        factor?: number;
        days?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 7], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("phase_id" in data && data.phase_id != undefined) {
                this.phase_id = data.phase_id;
            }
            if ("taken_phase_reward_list" in data && data.taken_phase_reward_list != undefined) {
                this.taken_phase_reward_list = data.taken_phase_reward_list;
            }
            if ("taken_contribution_reward_list" in data && data.taken_contribution_reward_list != undefined) {
                this.taken_contribution_reward_list = data.taken_contribution_reward_list;
            }
            if ("progress" in data && data.progress != undefined) {
                this.progress = data.progress;
            }
            if ("contribution" in data && data.contribution != undefined) {
                this.contribution = data.contribution;
            }
            if ("factor" in data && data.factor != undefined) {
                this.factor = data.factor;
            }
            if ("days" in data && data.days != undefined) {
                this.days = data.days;
            }
        }
    }
    get phase_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set phase_id(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get taken_phase_reward_list() {
        return pb_1.Message.getFieldWithDefault(this, 1, []) as number[];
    }
    set taken_phase_reward_list(value: number[]) {
        pb_1.Message.setField(this, 1, value);
    }
    get taken_contribution_reward_list() {
        return pb_1.Message.getFieldWithDefault(this, 7, []) as number[];
    }
    set taken_contribution_reward_list(value: number[]) {
        pb_1.Message.setField(this, 7, value);
    }
    get progress() {
        return pb_1.Message.getFieldWithDefault(this, 8, 0) as number;
    }
    set progress(value: number) {
        pb_1.Message.setField(this, 8, value);
    }
    get contribution() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set contribution(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get factor() {
        return pb_1.Message.getFieldWithDefault(this, 13, 0) as number;
    }
    set factor(value: number) {
        pb_1.Message.setField(this, 13, value);
    }
    get days() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set days(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        phase_id?: number;
        taken_phase_reward_list?: number[];
        taken_contribution_reward_list?: number[];
        progress?: number;
        contribution?: number;
        factor?: number;
        days?: number;
    }): SeaLampActivityDetailInfo {
        const message = new SeaLampActivityDetailInfo({});
        if (data.phase_id != null) {
            message.phase_id = data.phase_id;
        }
        if (data.taken_phase_reward_list != null) {
            message.taken_phase_reward_list = data.taken_phase_reward_list;
        }
        if (data.taken_contribution_reward_list != null) {
            message.taken_contribution_reward_list = data.taken_contribution_reward_list;
        }
        if (data.progress != null) {
            message.progress = data.progress;
        }
        if (data.contribution != null) {
            message.contribution = data.contribution;
        }
        if (data.factor != null) {
            message.factor = data.factor;
        }
        if (data.days != null) {
            message.days = data.days;
        }
        return message;
    }
    toObject() {
        const data: {
            phase_id?: number;
            taken_phase_reward_list?: number[];
            taken_contribution_reward_list?: number[];
            progress?: number;
            contribution?: number;
            factor?: number;
            days?: number;
        } = {};
        if (this.phase_id != null) {
            data.phase_id = this.phase_id;
        }
        if (this.taken_phase_reward_list != null) {
            data.taken_phase_reward_list = this.taken_phase_reward_list;
        }
        if (this.taken_contribution_reward_list != null) {
            data.taken_contribution_reward_list = this.taken_contribution_reward_list;
        }
        if (this.progress != null) {
            data.progress = this.progress;
        }
        if (this.contribution != null) {
            data.contribution = this.contribution;
        }
        if (this.factor != null) {
            data.factor = this.factor;
        }
        if (this.days != null) {
            data.days = this.days;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.phase_id != 0)
            writer.writeUint32(14, this.phase_id);
        if (this.taken_phase_reward_list.length)
            writer.writePackedUint32(1, this.taken_phase_reward_list);
        if (this.taken_contribution_reward_list.length)
            writer.writePackedUint32(7, this.taken_contribution_reward_list);
        if (this.progress != 0)
            writer.writeUint32(8, this.progress);
        if (this.contribution != 0)
            writer.writeUint32(15, this.contribution);
        if (this.factor != 0)
            writer.writeUint32(13, this.factor);
        if (this.days != 0)
            writer.writeUint32(4, this.days);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SeaLampActivityDetailInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SeaLampActivityDetailInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    message.phase_id = reader.readUint32();
                    break;
                case 1:
                    message.taken_phase_reward_list = reader.readPackedUint32();
                    break;
                case 7:
                    message.taken_contribution_reward_list = reader.readPackedUint32();
                    break;
                case 8:
                    message.progress = reader.readUint32();
                    break;
                case 15:
                    message.contribution = reader.readUint32();
                    break;
                case 13:
                    message.factor = reader.readUint32();
                    break;
                case 4:
                    message.days = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SeaLampActivityDetailInfo {
        return SeaLampActivityDetailInfo.deserialize(bytes);
    }
}
