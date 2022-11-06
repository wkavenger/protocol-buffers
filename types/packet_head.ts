// @generated by protobuf-ts 2.8.1 with parameter generate_dependencies,output_typescript
// @generated from protobuf file "packet_head.proto" (package "com.midnights.game", syntax proto2)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.midnights.game.PacketHead
 */
export interface PacketHead {
    /**
     * @generated from protobuf field: optional uint32 packet_id = 1;
     */
    packetId?: number;
    /**
     * @generated from protobuf field: optional uint32 rpc_id = 2;
     */
    rpcId?: number;
    /**
     * @generated from protobuf field: optional uint32 client_sequence_id = 3;
     */
    clientSequenceId?: number;
    /**
     * @generated from protobuf field: optional uint32 enet_channel_id = 4;
     */
    enetChannelId?: number;
    /**
     * @generated from protobuf field: optional uint32 enet_is_reliable = 5;
     */
    enetIsReliable?: number;
    /**
     * @generated from protobuf field: optional uint64 sent_ms = 6;
     */
    sentMs?: bigint;
    /**
     * @generated from protobuf field: optional uint32 user_id = 11;
     */
    userId?: number;
    /**
     * @generated from protobuf field: optional uint32 user_ip = 12;
     */
    userIp?: number;
    /**
     * @generated from protobuf field: optional uint32 user_session_id = 13;
     */
    userSessionId?: number;
    /**
     * @generated from protobuf field: optional uint32 home_user_id = 14;
     */
    homeUserId?: number;
    /**
     * @generated from protobuf field: optional uint64 recv_time_ms = 21;
     */
    recvTimeMs?: bigint;
    /**
     * @generated from protobuf field: optional uint32 rpc_begin_time_ms = 22;
     */
    rpcBeginTimeMs?: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> ext_map = 23;
     */
    extMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: optional uint32 sender_app_id = 24;
     */
    senderAppId?: number;
    /**
     * @generated from protobuf field: optional uint32 sender_load = 25;
     */
    senderLoad?: number;
    /**
     * @generated from protobuf field: optional bytes span_context_str = 26;
     */
    spanContextStr?: Uint8Array;
    /**
     * @generated from protobuf field: optional uint32 source_service = 31;
     */
    sourceService?: number;
    /**
     * @generated from protobuf field: optional uint32 target_service = 32;
     */
    targetService?: number;
    /**
     * @generated from protobuf field: map<uint32, uint32> service_app_id_map = 33;
     */
    serviceAppIdMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: optional bool is_set_game_thread = 34;
     */
    isSetGameThread?: boolean;
    /**
     * @generated from protobuf field: optional uint32 game_thread_index = 35;
     */
    gameThreadIndex?: number;
}
/**
 * @generated from protobuf message com.midnights.game.DebugNotify
 */
export interface DebugNotify {
    /**
     * @generated from protobuf field: optional uint32 id = 1;
     */
    id?: number;
    /**
     * @generated from protobuf field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from protobuf field: optional com.midnights.game.DebugNotify.Retcode retcode = 3;
     */
    retcode?: DebugNotify_Retcode;
}
/**
 * @generated from protobuf enum com.midnights.game.DebugNotify.Retcode
 */
export enum DebugNotify_Retcode {
    /**
     * @generated from protobuf enum value: SUCC = 0;
     */
    SUCC = 0,
    /**
     * @generated from protobuf enum value: FAIL = 1;
     */
    FAIL = 1
}
/**
 * @generated from protobuf enum com.midnights.game.DebugNotify.Enum
 */
export enum DebugNotify_Enum {
    /**
     * @generated from protobuf enum value: ZERO = 0;
     */
    ZERO = 0,
    /**
     * @generated from protobuf enum value: CMD_ID = 101;
     */
    CMD_ID = 101,
    /**
     * @generated from protobuf enum value: CMD_ID = 101;
     */
    TARGET_SERVICE = 101,
    /**
     * @generated from protobuf enum value: ENET_CHANNEL_ID = 2;
     */
    ENET_CHANNEL_ID = 2,
    /**
     * @generated from protobuf enum value: ENET_IS_RELIABLE = 1;
     */
    ENET_IS_RELIABLE = 1
}
// @generated message type with reflection information, may provide speed optimized methods
class PacketHead$Type extends MessageType<PacketHead> {
    constructor() {
        super("com.midnights.game.PacketHead", [
            { no: 1, name: "packet_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "rpc_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "client_sequence_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "enet_channel_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "enet_is_reliable", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "sent_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "user_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "user_ip", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "user_session_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "home_user_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 21, name: "recv_time_ms", kind: "scalar", opt: true, T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 22, name: "rpc_begin_time_ms", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 23, name: "ext_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 24, name: "sender_app_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 25, name: "sender_load", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 26, name: "span_context_str", kind: "scalar", opt: true, T: 12 /*ScalarType.BYTES*/ },
            { no: 31, name: "source_service", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 32, name: "target_service", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 33, name: "service_app_id_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 34, name: "is_set_game_thread", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 35, name: "game_thread_index", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PacketHead>): PacketHead {
        const message = { extMap: {}, serviceAppIdMap: {} };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PacketHead>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PacketHead): PacketHead {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 packet_id */ 1:
                    message.packetId = reader.uint32();
                    break;
                case /* optional uint32 rpc_id */ 2:
                    message.rpcId = reader.uint32();
                    break;
                case /* optional uint32 client_sequence_id */ 3:
                    message.clientSequenceId = reader.uint32();
                    break;
                case /* optional uint32 enet_channel_id */ 4:
                    message.enetChannelId = reader.uint32();
                    break;
                case /* optional uint32 enet_is_reliable */ 5:
                    message.enetIsReliable = reader.uint32();
                    break;
                case /* optional uint64 sent_ms */ 6:
                    message.sentMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 user_id */ 11:
                    message.userId = reader.uint32();
                    break;
                case /* optional uint32 user_ip */ 12:
                    message.userIp = reader.uint32();
                    break;
                case /* optional uint32 user_session_id */ 13:
                    message.userSessionId = reader.uint32();
                    break;
                case /* optional uint32 home_user_id */ 14:
                    message.homeUserId = reader.uint32();
                    break;
                case /* optional uint64 recv_time_ms */ 21:
                    message.recvTimeMs = reader.uint64().toBigInt();
                    break;
                case /* optional uint32 rpc_begin_time_ms */ 22:
                    message.rpcBeginTimeMs = reader.uint32();
                    break;
                case /* map<uint32, uint32> ext_map */ 23:
                    this.binaryReadMap23(message.extMap, reader, options);
                    break;
                case /* optional uint32 sender_app_id */ 24:
                    message.senderAppId = reader.uint32();
                    break;
                case /* optional uint32 sender_load */ 25:
                    message.senderLoad = reader.uint32();
                    break;
                case /* optional bytes span_context_str */ 26:
                    message.spanContextStr = reader.bytes();
                    break;
                case /* optional uint32 source_service */ 31:
                    message.sourceService = reader.uint32();
                    break;
                case /* optional uint32 target_service */ 32:
                    message.targetService = reader.uint32();
                    break;
                case /* map<uint32, uint32> service_app_id_map */ 33:
                    this.binaryReadMap33(message.serviceAppIdMap, reader, options);
                    break;
                case /* optional bool is_set_game_thread */ 34:
                    message.isSetGameThread = reader.bool();
                    break;
                case /* optional uint32 game_thread_index */ 35:
                    message.gameThreadIndex = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    private binaryReadMap23(map: PacketHead["extMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PacketHead["extMap"] | undefined, val: PacketHead["extMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.PacketHead.ext_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    private binaryReadMap33(map: PacketHead["serviceAppIdMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof PacketHead["serviceAppIdMap"] | undefined, val: PacketHead["serviceAppIdMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field com.midnights.game.PacketHead.service_app_id_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: PacketHead, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 packet_id = 1; */
        if (message.packetId !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.packetId);
        /* optional uint32 rpc_id = 2; */
        if (message.rpcId !== undefined)
            writer.tag(2, WireType.Varint).uint32(message.rpcId);
        /* optional uint32 client_sequence_id = 3; */
        if (message.clientSequenceId !== undefined)
            writer.tag(3, WireType.Varint).uint32(message.clientSequenceId);
        /* optional uint32 enet_channel_id = 4; */
        if (message.enetChannelId !== undefined)
            writer.tag(4, WireType.Varint).uint32(message.enetChannelId);
        /* optional uint32 enet_is_reliable = 5; */
        if (message.enetIsReliable !== undefined)
            writer.tag(5, WireType.Varint).uint32(message.enetIsReliable);
        /* optional uint64 sent_ms = 6; */
        if (message.sentMs !== undefined)
            writer.tag(6, WireType.Varint).uint64(message.sentMs);
        /* optional uint32 user_id = 11; */
        if (message.userId !== undefined)
            writer.tag(11, WireType.Varint).uint32(message.userId);
        /* optional uint32 user_ip = 12; */
        if (message.userIp !== undefined)
            writer.tag(12, WireType.Varint).uint32(message.userIp);
        /* optional uint32 user_session_id = 13; */
        if (message.userSessionId !== undefined)
            writer.tag(13, WireType.Varint).uint32(message.userSessionId);
        /* optional uint32 home_user_id = 14; */
        if (message.homeUserId !== undefined)
            writer.tag(14, WireType.Varint).uint32(message.homeUserId);
        /* optional uint64 recv_time_ms = 21; */
        if (message.recvTimeMs !== undefined)
            writer.tag(21, WireType.Varint).uint64(message.recvTimeMs);
        /* optional uint32 rpc_begin_time_ms = 22; */
        if (message.rpcBeginTimeMs !== undefined)
            writer.tag(22, WireType.Varint).uint32(message.rpcBeginTimeMs);
        /* map<uint32, uint32> ext_map = 23; */
        for (let k of Object.keys(message.extMap))
            writer.tag(23, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.extMap[k as any]).join();
        /* optional uint32 sender_app_id = 24; */
        if (message.senderAppId !== undefined)
            writer.tag(24, WireType.Varint).uint32(message.senderAppId);
        /* optional uint32 sender_load = 25; */
        if (message.senderLoad !== undefined)
            writer.tag(25, WireType.Varint).uint32(message.senderLoad);
        /* optional bytes span_context_str = 26; */
        if (message.spanContextStr !== undefined)
            writer.tag(26, WireType.LengthDelimited).bytes(message.spanContextStr);
        /* optional uint32 source_service = 31; */
        if (message.sourceService !== undefined)
            writer.tag(31, WireType.Varint).uint32(message.sourceService);
        /* optional uint32 target_service = 32; */
        if (message.targetService !== undefined)
            writer.tag(32, WireType.Varint).uint32(message.targetService);
        /* map<uint32, uint32> service_app_id_map = 33; */
        for (let k of Object.keys(message.serviceAppIdMap))
            writer.tag(33, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.serviceAppIdMap[k as any]).join();
        /* optional bool is_set_game_thread = 34; */
        if (message.isSetGameThread !== undefined)
            writer.tag(34, WireType.Varint).bool(message.isSetGameThread);
        /* optional uint32 game_thread_index = 35; */
        if (message.gameThreadIndex !== undefined)
            writer.tag(35, WireType.Varint).uint32(message.gameThreadIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.PacketHead
 */
export const PacketHead = new PacketHead$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DebugNotify$Type extends MessageType<DebugNotify> {
    constructor() {
        super("com.midnights.game.DebugNotify", [
            { no: 1, name: "id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "retcode", kind: "enum", opt: true, T: () => ["com.midnights.game.DebugNotify.Retcode", DebugNotify_Retcode] }
        ]);
    }
    create(value?: PartialMessage<DebugNotify>): DebugNotify {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DebugNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DebugNotify): DebugNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* optional string name */ 2:
                    message.name = reader.string();
                    break;
                case /* optional com.midnights.game.DebugNotify.Retcode retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DebugNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* optional uint32 id = 1; */
        if (message.id !== undefined)
            writer.tag(1, WireType.Varint).uint32(message.id);
        /* optional string name = 2; */
        if (message.name !== undefined)
            writer.tag(2, WireType.LengthDelimited).string(message.name);
        /* optional com.midnights.game.DebugNotify.Retcode retcode = 3; */
        if (message.retcode !== undefined)
            writer.tag(3, WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.DebugNotify
 */
export const DebugNotify = new DebugNotify$Type();