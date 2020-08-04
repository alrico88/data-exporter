## Classes

<dl>
<dt><a href="#Exporter">Exporter</a></dt>
<dd></dd>
</dl>

<a name="Exporter"></a>

## Exporter

**Kind**: global class

- [Exporter](#Exporter)
  - [new Exporter()](#new_Exporter_new)
  - [.module.exports](#Exporter.module.exports)
    - [new module.exports(data, filename, extension, mimeType)](#new_Exporter.module.exports_new)
  - [.convertJSONToCsv(json)](#Exporter.convertJSONToCsv) ⇒ <code>string</code>
  - [.stringifyJSON(json, [pretty])](#Exporter.stringifyJSON) ⇒ <code>string</code>
  - [.save()](#Exporter.save)
  - [.saveJSON()](#Exporter.saveJSON)
  - [.saveCSV()](#Exporter.saveCSV)

<a name="new_Exporter_new"></a>

### new Exporter()

Exporter class

<a name="Exporter.module.exports"></a>

### Exporter.module.exports

**Kind**: static class of [<code>Exporter</code>](#Exporter)  
<a name="new_Exporter.module.exports_new"></a>

#### new module.exports(data, filename, extension, mimeType)

Creates an instance of Exporter.

| Param     | Type                | Description                                                      |
| --------- | ------------------- | ---------------------------------------------------------------- |
| data      | <code>any</code>    | Data to convert                                                  |
| filename  | <code>string</code> | Filename for the resulting file                                  |
| extension | <code>string</code> | Extension to use for the file. Use the EXTENSIONS enum as helper |
| mimeType  | <code>string</code> | MIME expresssion. Use the MIMES enum as helper                   |

<a name="Exporter.convertJSONToCsv"></a>

### Exporter.convertJSONToCsv(json) ⇒ <code>string</code>

Converts JSON to CSV

**Kind**: static method of [<code>Exporter</code>](#Exporter)  
**Returns**: <code>string</code> - String representation of a CSV

| Param | Type                                                     | Description            |
| ----- | -------------------------------------------------------- | ---------------------- |
| json  | <code>object</code> \| <code>Array.&lt;object&gt;</code> | JSON to convert to CSV |

<a name="Exporter.stringifyJSON"></a>

### Exporter.stringifyJSON(json, [pretty]) ⇒ <code>string</code>

Stringifies JSON

**Kind**: static method of [<code>Exporter</code>](#Exporter)  
**Returns**: <code>string</code> - Stringified JSON

| Param    | Type                                                     | Default            | Description                 |
| -------- | -------------------------------------------------------- | ------------------ | --------------------------- |
| json     | <code>object</code> \| <code>Array.&lt;object&gt;</code> |                    | JSON to stringify           |
| [pretty] | <code>boolean</code>                                     | <code>false</code> | Whether to use nice spacing |

<a name="Exporter.save"></a>

### Exporter.save()

Triggers file download

**Kind**: static method of [<code>Exporter</code>](#Exporter)  
<a name="Exporter.saveJSON"></a>

### Exporter.saveJSON()

Shortcut to save as JSON
Processes JSON directly

**Kind**: static method of [<code>Exporter</code>](#Exporter)  
<a name="Exporter.saveCSV"></a>

### Exporter.saveCSV()

Shortcut to save as CSV
Processes JSON as CSV

**Kind**: static method of [<code>Exporter</code>](#Exporter)  
<a name="MIMES"></a>

## MIMES

**Kind**: global enum  
<a name="EXTENSIONS"></a>

## EXTENSIONS

**Kind**: global enum
