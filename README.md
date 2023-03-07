# babel-plugin-test-id

## Example

#### in

```
const Bar = () => <div>Hi</div>;
```

#### out

```
const Bar = () => <div data-id="Hi">Hi</div>;
```

#### in

```
const t = (s) => s;

const I18NDiv = () => <div>{t('I18N_KEY')}</div>;
```

#### out

```
const t = (s) => s;

const I18NDiv = () => <div data-id="I18N_KEY">{t('I18N_KEY')}</div>;

```

## Install

`yarn add babel-plugin-test-id`

or

`npm install babel-plugin-test-id`

## Usage

in .babelrc

```
"plugins": [
  "babel-plugin-test-id",
  ...
 ]
```

## Options

| Property | Type | Default | Description |
| --- | --- | --- | ---|
| idAttributeKey | string | `data-id` | Unique information extracted from the attributes and content of the element |
| componentAttributeKey | string | `data-component` | React component name if any |
| classnameAttributeKey | string | `data-classname` | css classnames before uglified |
| idAttributeList | string[] | `["title", "label", "placeholder", "description", "header", "name", "field", "type",]` | Extract unique strings from these attributes to construct the value for 'idAttributeKey' |
| idAttributeValueString | string | "/^[A-Z]/g" | Only extract string that matches with this pattern (string will be converted to RegExp) to construct the value for 'idAttributeKey', default to Pascal cases |
| delimiter | string | `-` | Join multiple extracted strings |

in .babelrc

```
"plugins": [
  ["babel-plugin-test-id", { "idAttributeKey", "data-my-test-id" }]
  ...
 ]
```