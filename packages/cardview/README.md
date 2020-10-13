[![npm](https://img.shields.io/npm/v/nativescript-material-cardview.svg)](https://www.npmjs.com/package/nativescript-material-cardview)
[![npm](https://img.shields.io/npm/dt/nativescript-material-cardview.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-material-cardview)
[![GitHub forks](https://img.shields.io/github/forks/Akylas/nativescript-material-components.svg)](https://github.com/Akylas/nativescript-material-components/network)
[![GitHub stars](https://img.shields.io/github/stars/Akylas/nativescript-material-components.svg)](https://github.com/Akylas/nativescript-material-components/stargazers)

## Installation

> #### :warning: Warning :warning:
From 5.x using material component will break N tab component on iOS (which is bound to be removed). This is needed to allow using the latest native iOS features. If needed you can use either [bottomnavigationbar](https://www.npmjs.com/package/nativescript-material-bottomnavigationbar) (this one is the best choice, closest to material design) or [tabs](https://www.npmjs.com/package/nativescript-material-tabs) (clone of N one, but with a little less features)

**NativeScript 7.x**
* `tns plugin add @nativescript-community/ui-material-cardview`

**NativeScript 6.x**
* `tns plugin add nativescript-material-cardview`

If using ```tns-core-modules```
* `tns plugin add nativescript-material-cardview@2.5.4`

Be sure to run a new build after adding plugins to avoid any issues.


## Android migration to AndroidX

For Material Components to work correctly with {N} 6 and AndroidX you need to update your android app theme.
inside ```App_ressources/android/res/values/styles.xml``` replace all occurences of ```Theme.AppCompat``` with ```Theme.MaterialComponents```

---

##### [Material Design Spec](https://material.io/design/components/cardviews.html)

## Usage


### Plain NativeScript

<span style="color:red">IMPORTANT: </span>_Make sure you include `xmlns:mdc="@nativescript-community/ui-material-cardview"` on the Page element_

##### XML

```XML
<Page xmlns:mdc="@nativescript-community/ui-material-cardview">
    <StackLayout horizontalAlignment="center">
        <mdc:CardView width="100" height="100"/>
        <mdc:CardView elevation="5" rippleColor="red"  width="100" height="100"/>
   </StackLayout>
</Page>
```

##### CSS

```CSS
mdccardview {
    ripple-color: blue;
    elevation: 4;
}
```

### NativeScript + Angular

```typescript
import { NativeScriptMaterialCardViewModule } from "@nativescript-community/ui-material-cardview/angular";

@NgModule({
    imports: [
        NativeScriptMaterialCardViewModule,
        ...
    ],
    ...
})
```

```html
<MDCardView rippleColor="blue"  width="100" height="100"></MDCardView>
```

### NativeScript + Vue

```javascript
import Vue from 'nativescript-vue';
import CardViewPlugin from '@nativescript-community/ui-material-cardview/vue';

Vue.use(CardViewPlugin);
```

```html
<MDCardView rippleColor="blue"  width="100" height="100"/>
```

## Attributes

Inherite from Nativescript [StackLayout](https://docs.nativescript.org/ui/layouts/layout-containers#stacklayout-properties)


| Property   | Type | Required | Description  |
|------------|------|----------|--------------|
| elevation  | ?    | false    | Sets the elevation of the cardview, increasing its 'drop shadow'.
| rippleColor| Color| false    | Sets the ripple color of the cardview
