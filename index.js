const saveAs = require('file-saver').saveAs;
const parse = require('json2csv').parse;

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
		 * @param {Object[]} json
		 * @returns {any} CSV
		 */
		this.convertToCsv = (json) => {
			try {
				let options = {
					flatten: true,
					delimiter: ';',
				};
				const csv = parse(json, options);
				return csv;
			} catch (err) {
				throw err;
			}
		};
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
		try {
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
		} catch (err) {
			throw err;
		}
	}
}

module.exports = Exporter;
