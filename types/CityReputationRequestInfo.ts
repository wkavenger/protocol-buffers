/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: CityReputationRequestInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class CityReputationRequestInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        is_open?: boolean;
        request_info_list?: CityReputationRequestInfo.RequestInfo[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("is_open" in data && data.is_open != undefined) {
                this.is_open = data.is_open;
            }
            if ("request_info_list" in data && data.request_info_list != undefined) {
                this.request_info_list = data.request_info_list;
            }
        }
    }
    get is_open() {
        return pb_1.Message.getFieldWithDefault(this, 2, false) as boolean;
    }
    set is_open(value: boolean) {
        pb_1.Message.setField(this, 2, value);
    }
    get request_info_list() {
        return pb_1.Message.getRepeatedWrapperField(this, CityReputationRequestInfo.RequestInfo, 1) as CityReputationRequestInfo.RequestInfo[];
    }
    set request_info_list(value: CityReputationRequestInfo.RequestInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    static fromObject(data: {
        is_open?: boolean;
        request_info_list?: ReturnType<typeof CityReputationRequestInfo.RequestInfo.prototype.toObject>[];
    }): CityReputationRequestInfo {
        const message = new CityReputationRequestInfo({});
        if (data.is_open != null) {
            message.is_open = data.is_open;
        }
        if (data.request_info_list != null) {
            message.request_info_list = data.request_info_list.map(item => CityReputationRequestInfo.RequestInfo.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            is_open?: boolean;
            request_info_list?: ReturnType<typeof CityReputationRequestInfo.RequestInfo.prototype.toObject>[];
        } = {};
        if (this.is_open != null) {
            data.is_open = this.is_open;
        }
        if (this.request_info_list != null) {
            data.request_info_list = this.request_info_list.map((item: CityReputationRequestInfo.RequestInfo) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.is_open != false)
            writer.writeBool(2, this.is_open);
        if (this.request_info_list.length)
            writer.writeRepeatedMessage(1, this.request_info_list, (item: CityReputationRequestInfo.RequestInfo) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CityReputationRequestInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CityReputationRequestInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.is_open = reader.readBool();
                    break;
                case 1:
                    reader.readMessage(message.request_info_list, () => pb_1.Message.addToRepeatedWrapperField(message, 1, CityReputationRequestInfo.RequestInfo.deserialize(reader), CityReputationRequestInfo.RequestInfo));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CityReputationRequestInfo {
        return CityReputationRequestInfo.deserialize(bytes);
    }
}
export namespace CityReputationRequestInfo {
    export class RequestInfo extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            request_id?: number;
            quest_id?: number;
            is_taken_reward?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("request_id" in data && data.request_id != undefined) {
                    this.request_id = data.request_id;
                }
                if ("quest_id" in data && data.quest_id != undefined) {
                    this.quest_id = data.quest_id;
                }
                if ("is_taken_reward" in data && data.is_taken_reward != undefined) {
                    this.is_taken_reward = data.is_taken_reward;
                }
            }
        }
        get request_id() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set request_id(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get quest_id() {
            return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
        }
        set quest_id(value: number) {
            pb_1.Message.setField(this, 9, value);
        }
        get is_taken_reward() {
            return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
        }
        set is_taken_reward(value: boolean) {
            pb_1.Message.setField(this, 6, value);
        }
        static fromObject(data: {
            request_id?: number;
            quest_id?: number;
            is_taken_reward?: boolean;
        }): RequestInfo {
            const message = new RequestInfo({});
            if (data.request_id != null) {
                message.request_id = data.request_id;
            }
            if (data.quest_id != null) {
                message.quest_id = data.quest_id;
            }
            if (data.is_taken_reward != null) {
                message.is_taken_reward = data.is_taken_reward;
            }
            return message;
        }
        toObject() {
            const data: {
                request_id?: number;
                quest_id?: number;
                is_taken_reward?: boolean;
            } = {};
            if (this.request_id != null) {
                data.request_id = this.request_id;
            }
            if (this.quest_id != null) {
                data.quest_id = this.quest_id;
            }
            if (this.is_taken_reward != null) {
                data.is_taken_reward = this.is_taken_reward;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.request_id != 0)
                writer.writeUint32(3, this.request_id);
            if (this.quest_id != 0)
                writer.writeUint32(9, this.quest_id);
            if (this.is_taken_reward != false)
                writer.writeBool(6, this.is_taken_reward);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestInfo {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RequestInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 3:
                        message.request_id = reader.readUint32();
                        break;
                    case 9:
                        message.quest_id = reader.readUint32();
                        break;
                    case 6:
                        message.is_taken_reward = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RequestInfo {
            return RequestInfo.deserialize(bytes);
        }
    }
}
