// source: configuration.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf')
var goog = jspb
var global = Function('return this')()

goog.exportSymbol('proto.tellaweb.Camouflage', null, global)
goog.exportSymbol('proto.tellaweb.Configuration', null, global)
goog.exportSymbol('proto.tellaweb.CrashReport', null, global)
goog.exportSymbol('proto.tellaweb.Method', null, global)
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tellaweb.CrashReport = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.tellaweb.CrashReport, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tellaweb.CrashReport.displayName = 'proto.tellaweb.CrashReport'
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.tellaweb.Configuration = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.tellaweb.Configuration, jspb.Message)
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tellaweb.Configuration.displayName = 'proto.tellaweb.Configuration'
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tellaweb.CrashReport.prototype.toObject = function (opt_includeInstance) {
    return proto.tellaweb.CrashReport.toObject(opt_includeInstance, this)
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tellaweb.CrashReport} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tellaweb.CrashReport.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        share: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
        changeable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tellaweb.CrashReport}
 */
proto.tellaweb.CrashReport.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.tellaweb.CrashReport()
  return proto.tellaweb.CrashReport.deserializeBinaryFromReader(msg, reader)
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tellaweb.CrashReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tellaweb.CrashReport}
 */
proto.tellaweb.CrashReport.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {boolean} */ (reader.readBool())
        msg.setShare(value)
        break
      case 2:
        var value = /** @type {boolean} */ (reader.readBool())
        msg.setChangeable(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tellaweb.CrashReport.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.tellaweb.CrashReport.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tellaweb.CrashReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tellaweb.CrashReport.serializeBinaryToWriter = function (message, writer) {
  var f = undefined
  f = message.getShare()
  if (f) {
    writer.writeBool(1, f)
  }
  f = message.getChangeable()
  if (f) {
    writer.writeBool(2, f)
  }
}

/**
 * optional bool share = 1;
 * @return {boolean}
 */
proto.tellaweb.CrashReport.prototype.getShare = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false))
}

/**
 * @param {boolean} value
 * @return {!proto.tellaweb.CrashReport} returns this
 */
proto.tellaweb.CrashReport.prototype.setShare = function (value) {
  return jspb.Message.setProto3BooleanField(this, 1, value)
}

/**
 * optional bool changeable = 2;
 * @return {boolean}
 */
proto.tellaweb.CrashReport.prototype.getChangeable = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false))
}

/**
 * @param {boolean} value
 * @return {!proto.tellaweb.CrashReport} returns this
 */
proto.tellaweb.CrashReport.prototype.setChangeable = function (value) {
  return jspb.Message.setProto3BooleanField(this, 2, value)
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.tellaweb.Configuration.prototype.toObject = function (opt_includeInstance) {
    return proto.tellaweb.Configuration.toObject(opt_includeInstance, this)
  }

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.tellaweb.Configuration} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.tellaweb.Configuration.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ''),
        about: jspb.Message.getFieldWithDefault(msg, 2, ''),
        method: jspb.Message.getFieldWithDefault(msg, 3, 0),
        camouflage: jspb.Message.getFieldWithDefault(msg, 4, 0),
        crashReport:
          (f = msg.getCrashReport()) && proto.tellaweb.CrashReport.toObject(includeInstance, f),
      }

    if (includeInstance) {
      obj.$jspbMessageInstance = msg
    }
    return obj
  }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.tellaweb.Configuration}
 */
proto.tellaweb.Configuration.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes)
  var msg = new proto.tellaweb.Configuration()
  return proto.tellaweb.Configuration.deserializeBinaryFromReader(msg, reader)
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tellaweb.Configuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tellaweb.Configuration}
 */
proto.tellaweb.Configuration.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break
    }
    var field = reader.getFieldNumber()
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString())
        msg.setName(value)
        break
      case 2:
        var value = /** @type {string} */ (reader.readString())
        msg.setAbout(value)
        break
      case 3:
        var value = /** @type {!proto.tellaweb.Method} */ (reader.readEnum())
        msg.setMethod(value)
        break
      case 4:
        var value = /** @type {!proto.tellaweb.Camouflage} */ (reader.readEnum())
        msg.setCamouflage(value)
        break
      case 5:
        var value = new proto.tellaweb.CrashReport()
        reader.readMessage(value, proto.tellaweb.CrashReport.deserializeBinaryFromReader)
        msg.setCrashReport(value)
        break
      default:
        reader.skipField()
        break
    }
  }
  return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tellaweb.Configuration.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter()
  proto.tellaweb.Configuration.serializeBinaryToWriter(this, writer)
  return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tellaweb.Configuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tellaweb.Configuration.serializeBinaryToWriter = function (message, writer) {
  var f = undefined
  f = message.getName()
  if (f.length > 0) {
    writer.writeString(1, f)
  }
  f = message.getAbout()
  if (f.length > 0) {
    writer.writeString(2, f)
  }
  f = message.getMethod()
  if (f !== 0.0) {
    writer.writeEnum(3, f)
  }
  f = message.getCamouflage()
  if (f !== 0.0) {
    writer.writeEnum(4, f)
  }
  f = message.getCrashReport()
  if (f != null) {
    writer.writeMessage(5, f, proto.tellaweb.CrashReport.serializeBinaryToWriter)
  }
}

/**
 * optional string name = 1;
 * @return {string}
 */
proto.tellaweb.Configuration.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''))
}

/**
 * @param {string} value
 * @return {!proto.tellaweb.Configuration} returns this
 */
proto.tellaweb.Configuration.prototype.setName = function (value) {
  return jspb.Message.setProto3StringField(this, 1, value)
}

/**
 * optional string about = 2;
 * @return {string}
 */
proto.tellaweb.Configuration.prototype.getAbout = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}

/**
 * @param {string} value
 * @return {!proto.tellaweb.Configuration} returns this
 */
proto.tellaweb.Configuration.prototype.setAbout = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value)
}

/**
 * optional Method method = 3;
 * @return {!proto.tellaweb.Method}
 */
proto.tellaweb.Configuration.prototype.getMethod = function () {
  return /** @type {!proto.tellaweb.Method} */ (jspb.Message.getFieldWithDefault(this, 3, 0))
}

/**
 * @param {!proto.tellaweb.Method} value
 * @return {!proto.tellaweb.Configuration} returns this
 */
proto.tellaweb.Configuration.prototype.setMethod = function (value) {
  return jspb.Message.setProto3EnumField(this, 3, value)
}

/**
 * optional Camouflage camouflage = 4;
 * @return {!proto.tellaweb.Camouflage}
 */
proto.tellaweb.Configuration.prototype.getCamouflage = function () {
  return /** @type {!proto.tellaweb.Camouflage} */ (jspb.Message.getFieldWithDefault(this, 4, 0))
}

/**
 * @param {!proto.tellaweb.Camouflage} value
 * @return {!proto.tellaweb.Configuration} returns this
 */
proto.tellaweb.Configuration.prototype.setCamouflage = function (value) {
  return jspb.Message.setProto3EnumField(this, 4, value)
}

/**
 * optional CrashReport crash_report = 5;
 * @return {?proto.tellaweb.CrashReport}
 */
proto.tellaweb.Configuration.prototype.getCrashReport = function () {
  return /** @type{?proto.tellaweb.CrashReport} */ (jspb.Message.getWrapperField(
    this,
    proto.tellaweb.CrashReport,
    5
  ))
}

/**
 * @param {?proto.tellaweb.CrashReport|undefined} value
 * @return {!proto.tellaweb.Configuration} returns this
 */
proto.tellaweb.Configuration.prototype.setCrashReport = function (value) {
  return jspb.Message.setWrapperField(this, 5, value)
}

/**
 * Clears the message field making it undefined.
 * @return {!proto.tellaweb.Configuration} returns this
 */
proto.tellaweb.Configuration.prototype.clearCrashReport = function () {
  return this.setCrashReport(undefined)
}

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tellaweb.Configuration.prototype.hasCrashReport = function () {
  return jspb.Message.getField(this, 5) != null
}

/**
 * @enum {number}
 */
proto.tellaweb.Method = {
  DOWNLOAD: 0,
  CODE: 1,
  QR: 2,
}

/**
 * @enum {number}
 */
proto.tellaweb.Camouflage = {
  CALCULATOR: 0,
  CAMERA: 1,
  NAME: 2,
}

goog.object.extend(exports, proto.tellaweb)
