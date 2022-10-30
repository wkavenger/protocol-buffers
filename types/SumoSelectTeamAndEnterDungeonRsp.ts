/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SumoSelectTeamAndEnterDungeonRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./SumoTeamData";
import * as pb_1 from "google-protobuf";
export class SumoSelectTeamAndEnterDungeonRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        retcode?: number;
        activity_id?: number;
        difficulty_id?: number;
        stage_id?: number;
        team_list?: dependency_1.SumoTeamData[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
            if ("activity_id" in data && data.activity_id != undefined) {
                this.activity_id = data.activity_id;
            }
            if ("difficulty_id" in data && data.difficulty_id != undefined) {
                this.difficulty_id = data.difficulty_id;
            }
            if ("stage_id" in data && data.stage_id != undefined) {
                this.stage_id = data.stage_id;
            }
            if ("team_list" in data && data.team_list != undefined) {
                this.team_list = data.team_list;
            }
        }
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get activity_id() {
        return pb_1.Message.getFieldWithDefault(this, 14, 0) as number;
    }
    set activity_id(value: number) {
        pb_1.Message.setField(this, 14, value);
    }
    get difficulty_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0) as number;
    }
    set difficulty_id(value: number) {
        pb_1.Message.setField(this, 12, value);
    }
    get stage_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set stage_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get team_list() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.SumoTeamData, 2) as dependency_1.SumoTeamData[];
    }
    set team_list(value: dependency_1.SumoTeamData[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    static fromObject(data: {
        retcode?: number;
        activity_id?: number;
        difficulty_id?: number;
        stage_id?: number;
        team_list?: ReturnType<typeof dependency_1.SumoTeamData.prototype.toObject>[];
    }): SumoSelectTeamAndEnterDungeonRsp {
        const message = new SumoSelectTeamAndEnterDungeonRsp({});
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        if (data.activity_id != null) {
            message.activity_id = data.activity_id;
        }
        if (data.difficulty_id != null) {
            message.difficulty_id = data.difficulty_id;
        }
        if (data.stage_id != null) {
            message.stage_id = data.stage_id;
        }
        if (data.team_list != null) {
            message.team_list = data.team_list.map(item => dependency_1.SumoTeamData.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            retcode?: number;
            activity_id?: number;
            difficulty_id?: number;
            stage_id?: number;
            team_list?: ReturnType<typeof dependency_1.SumoTeamData.prototype.toObject>[];
        } = {};
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        if (this.activity_id != null) {
            data.activity_id = this.activity_id;
        }
        if (this.difficulty_id != null) {
            data.difficulty_id = this.difficulty_id;
        }
        if (this.stage_id != null) {
            data.stage_id = this.stage_id;
        }
        if (this.team_list != null) {
            data.team_list = this.team_list.map((item: dependency_1.SumoTeamData) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.retcode != 0)
            writer.writeInt32(1, this.retcode);
        if (this.activity_id != 0)
            writer.writeUint32(14, this.activity_id);
        if (this.difficulty_id != 0)
            writer.writeUint32(12, this.difficulty_id);
        if (this.stage_id != 0)
            writer.writeUint32(9, this.stage_id);
        if (this.team_list.length)
            writer.writeRepeatedMessage(2, this.team_list, (item: dependency_1.SumoTeamData) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SumoSelectTeamAndEnterDungeonRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SumoSelectTeamAndEnterDungeonRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.retcode = reader.readInt32();
                    break;
                case 14:
                    message.activity_id = reader.readUint32();
                    break;
                case 12:
                    message.difficulty_id = reader.readUint32();
                    break;
                case 9:
                    message.stage_id = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.team_list, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.SumoTeamData.deserialize(reader), dependency_1.SumoTeamData));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): SumoSelectTeamAndEnterDungeonRsp {
        return SumoSelectTeamAndEnterDungeonRsp.deserialize(bytes);
    }
}
