## R&D

**Table of contents:**

- [Text Config](#1)
- [Color Config](#2)
- [Typography](#3)

<a id="1"></a>

### Text Config

```jsx
type textConfig = {
  fontType: FontType.HEADING,
  fontSize: 24,
  fontWeight: FontWeights.EXTRA_BOLD,
};
```

<a id="2"></a>

### Color Config

```jsx
type colorConfig={
    backgroundColor:string;
    color:string;
    borderColor:string;
    edgeColor:{
        right:string;
        left:string;
        buttom:string;
        top:string;
    }
    disabledColor:{
        backgroundColor: string,
        color: string,
        edgeColors: {
            top: string,
            left: string,
            right: colorPalette.white[70],
            bottom: colorPalette.white[50],
        },
    }
}

```

### Typography

<a id="3"></a>

- always import `<GlobalFonts />` on the root level

```ts
export enum FontType {
  HEADING = "heading",
  CAPS = "caps",
  BODY = "body",
}

export enum FontWeights {
  EXTRA_BOLD = 800,
  BOLD = 700,
  SEMI_BOLD = 600,
  MEDIUM = 500,
  REGULAR = 400,
  THIN = 300,
}

export enum FontOverflowType {
  ELLIPSIS = "ellipsis",
  CLIP = "clip",
}
```
