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
		this.data = data;
		this.format = format;
		this.filename = filename;

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
	}

	/**
	 * Triggers file download
	 *
	 * @memberof Exporter
	 */
	save() {
		let blob, fileContent;
		switch (this.format) {
			case 'json':
				fileContent = JSON.stringify(this.content, null, 2);
				blob = new Blob([fileContent], {
					type: 'text/json;charset=utf-8',
				});
				break;
			case 'csv':
				blob = new Blob([this.content], {
					type: 'text/csv;charset=utf-8',
				});
				break;
			default:
				throw new Error('invalid format');
		}
		saveAs(blob, `${this.filename}.${this.format}`);
	}
}

module.exports = Exporter;
