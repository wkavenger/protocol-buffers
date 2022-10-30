/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: ClientAbilityChangeNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./AbilityInvokeEntry";
import * as pb_1 from "google-protobuf";
export class ClientAbilityChangeNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        Unk2200_FNAFDMAPLHP?: boolean;
        entity_id?: number;
        invokes?: dependency_1.AbilityInvokeEntry[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("Unk2200_FNAFDMAPLHP" in data && data.Unk2200_FNAFDMAPLHP != undefined) {
                this.Unk2200_FNAFDMAPLHP = data.Unk2200_FNAFDMAPLHP;
            }
            if ("entity_id" in data && data.entity_id != undefined) {
                this.entity_id = data.entity_id;
            }
            if ("invokes" in data && data.invokes != undefined) {
                this.invokes = data.invokes;
            }
        }
    }
    get Unk2200_FNAFDMAPLHP() {
        return pb_1.Message.getFieldWithDefault(this, 9, false) as boolean;
    }
    set Unk2200_FNAFDMAPLHP(value: boolean) {
        pb_1.Message.setField(this, 9, value);
    }
    get entity_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set entity_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get invokes() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.AbilityInvokeEntry, 3) as dependency_1.AbilityInvokeEntry[];
    }
    set invokes(value: dependency_1.AbilityInvokeEntry[]) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data: {
        Unk2200_FNAFDMAPLHP?: boolean;
        entity_id?: number;
        invokes?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>[];
    }): ClientAbilityChangeNotify {
        const message = new ClientAbilityChangeNotify({});
        if (data.Unk2200_FNAFDMAPLHP != null) {
            message.Unk2200_FNAFDMAPLHP = data.Unk2200_FNAFDMAPLHP;
        }
        if (data.entity_id != null) {
            message.entity_id = data.entity_id;
        }
        if (data.invokes != null) {
            message.invokes = data.invokes.map(item => dependency_1.AbilityInvokeEntry.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            Unk2200_FNAFDMAPLHP?: boolean;
            entity_id?: number;
            invokes?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>[];
        } = {};
        if (this.Unk2200_FNAFDMAPLHP != null) {
            data.Unk2200_FNAFDMAPLHP = this.Unk2200_FNAFDMAPLHP;
        }
        if (this.entity_id != null) {
            data.entity_id = this.entity_id;
        }
        if (this.invokes != null) {
            data.invokes = this.invokes.map((item: dependency_1.AbilityInvokeEntry) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.Unk2200_FNAFDMAPLHP != false)
            writer.writeBool(9, this.Unk2200_FNAFDMAPLHP);
        if (this.entity_id != 0)
            writer.writeUint32(2, this.entity_id);
        if (this.invokes.length)
            writer.writeRepeatedMessage(3, this.invokes, (item: dependency_1.AbilityInvokeEntry) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ClientAbilityChangeNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ClientAbilityChangeNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 9:
                    message.Unk2200_FNAFDMAPLHP = reader.readBool();
                    break;
                case 2:
                    message.entity_id = reader.readUint32();
                    break;
                case 3:
                    reader.readMessage(message.invokes, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.AbilityInvokeEntry.deserialize(reader), dependency_1.AbilityInvokeEntry));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ClientAbilityChangeNotify {
        return ClientAbilityChangeNotify.deserialize(bytes);
    }
}
