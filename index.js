const {saveAs} = require('file-saver');
const {parse} = require('json2csv');

/**
 * Exporter class
 *
 * @class Exporter
 */
class Exporter {

  /**
   *Creates an instance of Exporter.
   * @param {Object} data
   * @param {'json'|'csv'} format
   * @param {String} filename
   * @memberof Exporter
   */
  constructor(data, format, filename) {

    /**
     * Converts JSON to CSV
     *
     * @private
     * @param {Object[]} json
     * @returns {any} CSV
     */
    this.convertToCsv = (json) =>
      parse(json, {
        flatten: true,
        delimiter: ';',
      });
    this.data = data;
    this.format = format;
    this.filename = filename;
    this.mime = {
      json: 'text/json;charset=utf-8',
      csv: 'text/csv;charset=utf-8',
    };
  }

  /**
   * Triggers file download
   *
   * @memberof Exporter
   */
  save() {
    let content =
      this.format === 'json'
        ? JSON.stringify(this.data, null, 2)
        : this.convertToCsv(this.data);
    saveAs(
      new Blob([content], {
        type: this.mime[this.format],
      }),
      `${this.filename}.${this.format}`
    );
  }
}

module.exports = Exporter;
