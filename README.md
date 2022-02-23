# custom-sweet-alert

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/custom-sweet-alert.svg)](https://www.npmjs.com/package/custom-sweet-alert) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-sweet-alert
```

## Usage

```jsx
import { CustomSweetAlert } from 'custom-sweet-alert';
import 'custom-sweet-alert/dist/index.css'

 <CustomSweetAlert
    isOpen={true}
    type={"confirm" || "success" || "fail"} 
    title="Sure ?"
    infoText="Are you sure to remove this card ?"
    onActionHandle={() => this.onActionHandle()}
  />

```

## License

MIT © [wondercrazy15](https://github.com/wondercrazy15)
