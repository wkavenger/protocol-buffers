/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: AbilityInvocationFixedNotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./AbilityInvokeEntry";
import * as pb_1 from "google-protobuf";
export class AbilityInvocationFixedNotify extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        invoke6th?: dependency_1.AbilityInvokeEntry;
        invoke5th?: dependency_1.AbilityInvokeEntry;
        invoke4th?: dependency_1.AbilityInvokeEntry;
        invoke2nd?: dependency_1.AbilityInvokeEntry;
        invoke1st?: dependency_1.AbilityInvokeEntry;
        invoke3rd?: dependency_1.AbilityInvokeEntry;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("invoke6th" in data && data.invoke6th != undefined) {
                this.invoke6th = data.invoke6th;
            }
            if ("invoke5th" in data && data.invoke5th != undefined) {
                this.invoke5th = data.invoke5th;
            }
            if ("invoke4th" in data && data.invoke4th != undefined) {
                this.invoke4th = data.invoke4th;
            }
            if ("invoke2nd" in data && data.invoke2nd != undefined) {
                this.invoke2nd = data.invoke2nd;
            }
            if ("invoke1st" in data && data.invoke1st != undefined) {
                this.invoke1st = data.invoke1st;
            }
            if ("invoke3rd" in data && data.invoke3rd != undefined) {
                this.invoke3rd = data.invoke3rd;
            }
        }
    }
    get invoke6th() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 14) as dependency_1.AbilityInvokeEntry;
    }
    set invoke6th(value: dependency_1.AbilityInvokeEntry) {
        pb_1.Message.setWrapperField(this, 14, value);
    }
    get has_invoke6th() {
        return pb_1.Message.getField(this, 14) != null;
    }
    get invoke5th() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 8) as dependency_1.AbilityInvokeEntry;
    }
    set invoke5th(value: dependency_1.AbilityInvokeEntry) {
        pb_1.Message.setWrapperField(this, 8, value);
    }
    get has_invoke5th() {
        return pb_1.Message.getField(this, 8) != null;
    }
    get invoke4th() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 1) as dependency_1.AbilityInvokeEntry;
    }
    set invoke4th(value: dependency_1.AbilityInvokeEntry) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_invoke4th() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get invoke2nd() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 5) as dependency_1.AbilityInvokeEntry;
    }
    set invoke2nd(value: dependency_1.AbilityInvokeEntry) {
        pb_1.Message.setWrapperField(this, 5, value);
    }
    get has_invoke2nd() {
        return pb_1.Message.getField(this, 5) != null;
    }
    get invoke1st() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 10) as dependency_1.AbilityInvokeEntry;
    }
    set invoke1st(value: dependency_1.AbilityInvokeEntry) {
        pb_1.Message.setWrapperField(this, 10, value);
    }
    get has_invoke1st() {
        return pb_1.Message.getField(this, 10) != null;
    }
    get invoke3rd() {
        return pb_1.Message.getWrapperField(this, dependency_1.AbilityInvokeEntry, 12) as dependency_1.AbilityInvokeEntry;
    }
    set invoke3rd(value: dependency_1.AbilityInvokeEntry) {
        pb_1.Message.setWrapperField(this, 12, value);
    }
    get has_invoke3rd() {
        return pb_1.Message.getField(this, 12) != null;
    }
    static fromObject(data: {
        invoke6th?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
        invoke5th?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
        invoke4th?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
        invoke2nd?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
        invoke1st?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
        invoke3rd?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
    }): AbilityInvocationFixedNotify {
        const message = new AbilityInvocationFixedNotify({});
        if (data.invoke6th != null) {
            message.invoke6th = dependency_1.AbilityInvokeEntry.fromObject(data.invoke6th);
        }
        if (data.invoke5th != null) {
            message.invoke5th = dependency_1.AbilityInvokeEntry.fromObject(data.invoke5th);
        }
        if (data.invoke4th != null) {
            message.invoke4th = dependency_1.AbilityInvokeEntry.fromObject(data.invoke4th);
        }
        if (data.invoke2nd != null) {
            message.invoke2nd = dependency_1.AbilityInvokeEntry.fromObject(data.invoke2nd);
        }
        if (data.invoke1st != null) {
            message.invoke1st = dependency_1.AbilityInvokeEntry.fromObject(data.invoke1st);
        }
        if (data.invoke3rd != null) {
            message.invoke3rd = dependency_1.AbilityInvokeEntry.fromObject(data.invoke3rd);
        }
        return message;
    }
    toObject() {
        const data: {
            invoke6th?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
            invoke5th?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
            invoke4th?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
            invoke2nd?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
            invoke1st?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
            invoke3rd?: ReturnType<typeof dependency_1.AbilityInvokeEntry.prototype.toObject>;
        } = {};
        if (this.invoke6th != null) {
            data.invoke6th = this.invoke6th.toObject();
        }
        if (this.invoke5th != null) {
            data.invoke5th = this.invoke5th.toObject();
        }
        if (this.invoke4th != null) {
            data.invoke4th = this.invoke4th.toObject();
        }
        if (this.invoke2nd != null) {
            data.invoke2nd = this.invoke2nd.toObject();
        }
        if (this.invoke1st != null) {
            data.invoke1st = this.invoke1st.toObject();
        }
        if (this.invoke3rd != null) {
            data.invoke3rd = this.invoke3rd.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_invoke6th)
            writer.writeMessage(14, this.invoke6th, () => this.invoke6th.serialize(writer));
        if (this.has_invoke5th)
            writer.writeMessage(8, this.invoke5th, () => this.invoke5th.serialize(writer));
        if (this.has_invoke4th)
            writer.writeMessage(1, this.invoke4th, () => this.invoke4th.serialize(writer));
        if (this.has_invoke2nd)
            writer.writeMessage(5, this.invoke2nd, () => this.invoke2nd.serialize(writer));
        if (this.has_invoke1st)
            writer.writeMessage(10, this.invoke1st, () => this.invoke1st.serialize(writer));
        if (this.has_invoke3rd)
            writer.writeMessage(12, this.invoke3rd, () => this.invoke3rd.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AbilityInvocationFixedNotify {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AbilityInvocationFixedNotify();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 14:
                    reader.readMessage(message.invoke6th, () => message.invoke6th = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 8:
                    reader.readMessage(message.invoke5th, () => message.invoke5th = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 1:
                    reader.readMessage(message.invoke4th, () => message.invoke4th = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 5:
                    reader.readMessage(message.invoke2nd, () => message.invoke2nd = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 10:
                    reader.readMessage(message.invoke1st, () => message.invoke1st = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                case 12:
                    reader.readMessage(message.invoke3rd, () => message.invoke3rd = dependency_1.AbilityInvokeEntry.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AbilityInvocationFixedNotify {
        return AbilityInvocationFixedNotify.deserialize(bytes);
    }
}
