[![npm](https://img.shields.io/npm/v/nativescript-material-textview.svg)](https://www.npmjs.com/package/nativescript-material-textview)
[![npm](https://img.shields.io/npm/dt/nativescript-material-textview.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-material-textview)
[![GitHub forks](https://img.shields.io/github/forks/Akylas/nativescript-material-components.svg)](https://github.com/Akylas/nativescript-material-components/network)
[![GitHub stars](https://img.shields.io/github/stars/Akylas/nativescript-material-components.svg)](https://github.com/Akylas/nativescript-material-components/stargazers)

## Installation

> #### Warning :warning: :warning:
From 5.x using material component will break N tab component on iOS (which is bound to be removed). This is needed to allow using the latest native iOS features. If needed you can use either [bottomnavigationbar](https://www.npmjs.com/package/nativescript-material-bottomnavigationbar) (this one is the best choice, closest to material design) or [tabs](https://www.npmjs.com/package/nativescript-material-tabs) (clone of N one, but with a little less features)

**NativeScript 7.x**

`tns plugin add @nativescript-community/ui-material-textview`

**NativeScript 6.x**

`tns plugin add nativescript-material-textview`

If using ```tns-core-modules```
* `tns plugin add nativescript-material-textview@2.5.4`

Be sure to run a new build after adding plugins to avoid any issues.

---

##### [Material Design Spec](https://material.io/design/components/text-fields.html)

### Usage


## Plain NativeScript

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:mdt="@nativescript-community/ui-material-textview"` on the Page element_

### XML

```XML
<Page xmlns:mdt="@nativescript-community/ui-material-textview">
    <StackLayout horizontalAlignment="center">
        <mdt:TextView text="raised textview"/>
        <mdt:TextView variant="flat" text="flat textview"/>
        <mdt:TextView variant="text" text="text textview"/>
        <mdt:TextView elevation="5" rippleColor="red" text="raised custom textview"/>
   </StackLayout>
</Page>
```

### CSS

```CSS
mdctextview {
    ripple-color: blue;
    elevation: 4;
    stroke-color: blue;             // the border color when active
    stroke-inactive-color: green;   // the border color when inactive
    floating-color: blue;           // the floating placeholder color when active
    floating-inactive-color: green; // the floating placeholder color when inactive
}
```

## NativeScript + Angular

```typescript
import { NativeScriptMaterialTextViewModule } from "@nativescript-community/ui-material-textview/angular";

@NgModule({
    imports: [
        NativeScriptMaterialTextViewModule,
        ...
    ],
    ...
})
```

```html
<MDTextView  helper="example helper" placeholderColor="green" keyboardType="datetime"
        hint="i am an hint" returnKeyType="next" (focus)="onFocus($event)" (blur)="onBlur($event)"
        (textChange)="onTextChange($event)"></MDTextView>
```

## NativeScript + Vue

```javascript
import TextViewPlugin from '@nativescript-community/ui-material-textview/vue';

Vue.use(TextViewPlugin);
```

```html
<MDTextView helper="example helper" placeholderColor="green" keyboardType="datetime"
        hint="i am an hint" returnKeyType="next" @focus="onFocus" @blur="onBlur"
        @textChange="onTextChange"/>
```

Also, you can bind the text to some instance data using the `v-model` directive:

```html
<MDTextView v-model="value" />
```


## Attributes

Inherite from Nativescript [TextView](https://docs.nativescript.org/ui/ns-ui-widgets/text-view) so it already has all the same attributes

## Attributes

| Property  | Type | Required | Description  |
|-----------|------|----------|--------------|
| variant  | string |  false  | Set the textfield variant. Options are `outline`, `underline`, or `filled`. Defaults to `underline`.  |
| errorColor | Color | false | Sets the color of the error text |
| helper | string | false | Sets the helper text |
| helperColor | Color | false | Sets the color of the helper text  |
| floating | boolean | false | ** wip ** |
