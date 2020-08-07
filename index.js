const {saveAs} = require('file-saver');
const {parse} = require('json2csv');

/**
 * @enum
 * @export
 */
const MIMES = {
  csv: 'text/csv;charset=utf-8',
  json: 'text/json;charset=utf-8',
  txt: 'text/plain',
  rtf: 'application/rtf',
};

/**
 * @enum
 * @export
 */
// eslint-disable-next-line no-unused-vars
const EXTENSIONS = {
  csv: 'csv',
  json: 'json',
  txt: 'txt',
  rtf: 'rtf',
};

/**
 * Exporter class
 *
 * @export
 * @class Exporter
 */
class Exporter {

  /**
   *Creates an instance of Exporter.
   * @param {any} data Data to convert
   * @param {string} filename Filename for the resulting file
   * @param {string} extension Extension to use for the file. Use the EXTENSIONS enum as helper
   * @param {string} mimeType MIME expresssion. Use the MIMES enum as helper
   * @memberof Exporter
   */
  constructor(data, filename, extension, mimeType) {
    this.data = data;
    this.mimeType = mimeType;
    this.filename = filename;
    this.extension = extension;
    this.fullFilename = `${this.filename}.${this.extension}`;
  }

  /**
   * Converts JSON to CSV
   *
   * @static
   * @param {(object|object[])} json JSON to convert to CSV
   * @returns {string} String representation of a CSV
   * @memberof Exporter
   */
  static convertJSONToCsv(json) {
    return parse(json, {
      flatten: true,
      delimiter: ';',
    });
  }

  /**
   * Stringifies JSON
   *
   * @static
   * @param {(object|object[])} json JSON to stringify
   * @param {boolean} [pretty=false] Whether to use nice spacing
   * @returns {string} Stringified JSON
   * @memberof Exporter
   */
  static stringifyJSON(json, pretty = false) {
    const args = pretty === true ? [json, null, 2] : [json];
    return JSON.stringify(...args);
  }

  /**
   * Returns a Blob with the content
   *
   * @private
   * @returns {Blob}
   * @memberof Exporter
   */
  generateBlob() {
    return new Blob([this.data], {
      type: this.mimeType,
    });
  }

  /**
   * Triggers file download
   *
   * @memberof Exporter
   */
  save() {
    const blob = this.generateBlob();
    saveAs(blob, this.fullFilename);
  }

  /**
   * Shortcut to save as JSON
   * Processes JSON directly
   *
   * @param {boolean} [pretty=false] Whether the output should be nicely displayed instead of one line
   * @memberof Exporter
   */
  saveJSON(pretty = false) {
    this.data = Exporter.stringifyJSON(this.data, pretty);
    this.save();
  }

  /**
   * Shortcut to save as CSV
   * Processes JSON as CSV
   *
   * @memberof Exporter
   */
  saveCSV() {
    this.data = Exporter.convertJSONToCsv(this.data);
    this.save();
  }
}

module.exports = Exporter;
module.exports.MIMES = MIMES;
module.exports.EXTENSIONS = EXTENSIONS;
