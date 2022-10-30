/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityIdentifier.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AbilityIdentifier extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        modifier_owner_id?: number;
        instanced_modifier_id?: number;
        instanced_ability_id?: number;
        is_serverbuff_modifier?: boolean;
        ability_caster_id?: number;
        local_id?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("modifier_owner_id" in data && data.modifier_owner_id != undefined) {
                this.modifier_owner_id = data.modifier_owner_id;
            }
            if ("instanced_modifier_id" in data && data.instanced_modifier_id != undefined) {
                this.instanced_modifier_id = data.instanced_modifier_id;
            }
            if ("instanced_ability_id" in data && data.instanced_ability_id != undefined) {
                this.instanced_ability_id = data.instanced_ability_id;
            }
            if ("is_serverbuff_modifier" in data && data.is_serverbuff_modifier != undefined) {
                this.is_serverbuff_modifier = data.is_serverbuff_modifier;
            }
            if ("ability_caster_id" in data && data.ability_caster_id != undefined) {
                this.ability_caster_id = data.ability_caster_id;
            }
            if ("local_id" in data && data.local_id != undefined) {
                this.local_id = data.local_id;
            }
        }
    }
    get modifier_owner_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set modifier_owner_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get instanced_modifier_id() {
        return pb_1.Message.getFieldWithDefault(this, 9, 0) as number;
    }
    set instanced_modifier_id(value: number) {
        pb_1.Message.setField(this, 9, value);
    }
    get instanced_ability_id() {
        return pb_1.Message.getFieldWithDefault(this, 10, 0) as number;
    }
    set instanced_ability_id(value: number) {
        pb_1.Message.setField(this, 10, value);
    }
    get is_serverbuff_modifier() {
        return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
    }
    set is_serverbuff_modifier(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    get ability_caster_id() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0) as number;
    }
    set ability_caster_id(value: number) {
        pb_1.Message.setField(this, 15, value);
    }
    get local_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set local_id(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        modifier_owner_id?: number;
        instanced_modifier_id?: number;
        instanced_ability_id?: number;
        is_serverbuff_modifier?: boolean;
        ability_caster_id?: number;
        local_id?: number;
    }): AbilityIdentifier {
        const message = new AbilityIdentifier({});
        if (data.modifier_owner_id != null) {
            message.modifier_owner_id = data.modifier_owner_id;
        }
        if (data.instanced_modifier_id != null) {
            message.instanced_modifier_id = data.instanced_modifier_id;
        }
        if (data.instanced_ability_id != null) {
            message.instanced_ability_id = data.instanced_ability_id;
        }
        if (data.is_serverbuff_modifier != null) {
            message.is_serverbuff_modifier = data.is_serverbuff_modifier;
        }
        if (data.ability_caster_id != null) {
            message.ability_caster_id = data.ability_caster_id;
        }
        if (data.local_id != null) {
            message.local_id = data.local_id;
        }
        return message;
    }
    toObject() {
        const data: {
            modifier_owner_id?: number;
            instanced_modifier_id?: number;
            instanced_ability_id?: number;
            is_serverbuff_modifier?: boolean;
            ability_caster_id?: number;
            local_id?: number;
        } = {};
        if (this.modifier_owner_id != null) {
            data.modifier_owner_id = this.modifier_owner_id;
        }
        if (this.instanced_modifier_id != null) {
            data.instanced_modifier_id = this.instanced_modifier_id;
        }
        if (this.instanced_ability_id != null) {
            data.instanced_ability_id = this.instanced_ability_id;
        }
        if (this.is_serverbuff_modifier != null) {
            data.is_serverbuff_modifier = this.is_serverbuff_modifier;
        }
        if (this.ability_caster_id != null) {
            data.ability_caster_id = this.ability_caster_id;
        }
        if (this.local_id != null) {
            data.local_id = this.local_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.modifier_owner_id != 0)
            writer.writeUint32(2, this.modifier_owner_id);
        if (this.instanced_modifier_id != 0)
            writer.writeUint32(9, this.instanced_modifier_id);
        if (this.instanced_ability_id != 0)
            writer.writeUint32(10, this.instanced_ability_id);
        if (this.is_serverbuff_modifier != false)
            writer.writeBool(6, this.is_serverbuff_modifier);
        if (this.ability_caster_id != 0)
            writer.writeUint32(15, this.ability_caster_id);
        if (this.local_id != 0)
            writer.writeInt32(3, this.local_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AbilityIdentifier {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityIdentifier();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 2:
                    message.modifier_owner_id = reader.readUint32();
                    break;
                case 9:
                    message.instanced_modifier_id = reader.readUint32();
                    break;
                case 10:
                    message.instanced_ability_id = reader.readUint32();
                    break;
                case 6:
                    message.is_serverbuff_modifier = reader.readBool();
                    break;
                case 15:
                    message.ability_caster_id = reader.readUint32();
                    break;
                case 3:
                    message.local_id = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AbilityIdentifier {
        return AbilityIdentifier.deserialize(bytes);
    }
}
