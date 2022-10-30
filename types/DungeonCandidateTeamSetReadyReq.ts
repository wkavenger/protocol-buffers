/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: DungeonCandidateTeamSetReadyReq.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class DungeonCandidateTeamSetReadyReq extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_ready?: boolean;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_ready" in data && data.is_ready != undefined) {
                this.is_ready = data.is_ready;
            }
        }
    }
    get is_ready() {
        return pb_1.Message.getFieldWithDefault(this, 15, false) as boolean;
    }
    set is_ready(value: boolean) {
        pb_1.Message.setField(this, 15, value);
    }
    static fromObject(data: {
        is_ready?: boolean;
    }): DungeonCandidateTeamSetReadyReq {
        const message = new DungeonCandidateTeamSetReadyReq({});
        if (data.is_ready != null) {
            message.is_ready = data.is_ready;
        }
        return message;
    }
    toObject() {
        const data: {
            is_ready?: boolean;
        } = {};
        if (this.is_ready != null) {
            data.is_ready = this.is_ready;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_ready != false)
            writer.writeBool(15, this.is_ready);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DungeonCandidateTeamSetReadyReq {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DungeonCandidateTeamSetReadyReq();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 15:
                    message.is_ready = reader.readBool();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): DungeonCandidateTeamSetReadyReq {
        return DungeonCandidateTeamSetReadyReq.deserialize(bytes);
    }
}
