# @xlox/ui

React component library based on Xlox design system

### **Table of contents:**

- [Installation](#1)
- [How to use the package](#2)
- [How to add new features to the package ?](#3)
- [Scope of improvement ?](#4)

<a id="1"></a>

## How to install ?

```bash
npm install @xlox/ui
```

<a id="2"></a>

## How to use the package ?

- For using `Components`

```bash
import { HorizontalDivider, Row } from "@xlox/ui/components";
```

- For using `Primitives`

```bash
import { mainColors } from "@xlox/ui/primitives";
```

- For using `Types`

```bash
import { ButtonProps } from "@xlox/ui/types";
```

<a id="3"></a>

## How to add new features to the package ?

- `Step 1` run
  > npm run plop
- `Step 2` choose `component` from the provided option
- `Step 3` provide the required details about the component
- `Step 4` after the component is developed, expose it for consumtion via a `components/index.ts`

- `Step 5`
  - `Go to` UIkit path via cd
  - `Build` the components as a library for consumtion via a
    > npm run build

<a id="4"></a>

### Scope of improvement ?

- [x] [Docs](./docs/uikit-docs.md)
