/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: StartRogueNormalCellChallengeRsp.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class StartRogueNormalCellChallengeRsp extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        dungeon_id?: number;
        cell_id?: number;
        retcode?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("dungeon_id" in data && data.dungeon_id != undefined) {
                this.dungeon_id = data.dungeon_id;
            }
            if ("cell_id" in data && data.cell_id != undefined) {
                this.cell_id = data.cell_id;
            }
            if ("retcode" in data && data.retcode != undefined) {
                this.retcode = data.retcode;
            }
        }
    }
    get dungeon_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set dungeon_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get cell_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set cell_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get retcode() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set retcode(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        dungeon_id?: number;
        cell_id?: number;
        retcode?: number;
    }): StartRogueNormalCellChallengeRsp {
        const message = new StartRogueNormalCellChallengeRsp({});
        if (data.dungeon_id != null) {
            message.dungeon_id = data.dungeon_id;
        }
        if (data.cell_id != null) {
            message.cell_id = data.cell_id;
        }
        if (data.retcode != null) {
            message.retcode = data.retcode;
        }
        return message;
    }
    toObject() {
        const data: {
            dungeon_id?: number;
            cell_id?: number;
            retcode?: number;
        } = {};
        if (this.dungeon_id != null) {
            data.dungeon_id = this.dungeon_id;
        }
        if (this.cell_id != null) {
            data.cell_id = this.cell_id;
        }
        if (this.retcode != null) {
            data.retcode = this.retcode;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.dungeon_id != 0)
            writer.writeUint32(10, this.dungeon_id);
        if (this.cell_id != 0)
            writer.writeUint32(2, this.cell_id);
        if (this.retcode != 0)
            writer.writeInt32(6, this.retcode);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StartRogueNormalCellChallengeRsp {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StartRogueNormalCellChallengeRsp();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 10:
                    message.dungeon_id = reader.readUint32();
                    break;
                case 2:
                    message.cell_id = reader.readUint32();
                    break;
                case 6:
                    message.retcode = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): StartRogueNormalCellChallengeRsp {
        return StartRogueNormalCellChallengeRsp.deserialize(bytes);
    }
}
