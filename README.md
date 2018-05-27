# magicButtons v.1.0.0 - jQuery plugin

<img src="img/logo300.png" width="200">  
Version: 1.0.0.  
Author: 95stefano.gagliardi@gmail.com   
License: [MIT](https://github.com/Spolaa/magicButtons/license/)  

Try demo here ! [Demo]()

### Dependencies

The following plugin is based on jquery. The default icons are those of FontAwesome 5 (solid).

- jQuery (minimum) version v 1.12.4 [Site](https://jquery.com/) - [License](https://jquery.org/license/)
- Font Awesome 5 [Site](http://fontawesome.io/) - [License](http://fontawesome.io/license/)
## Get start
### Inclusion

_Inclusion via js_  
```html
<script src="/magicBtn.js"></script>
```  

_Inclusion via compiled css_  
```html
<link rel="stylesheet" href="/magicBtn.css">
```
 
_Inclusion via .scss_  
```scss
@import "magicBtn";
```


###New instance of plugin

```javascript
/**
 * @param string selector - Target
 * @param obj options - Options to customize plugins
 */
 
$.magicBtn(selector,options);
```
1. The first parameter represents the container on which the plugin will take effect. By default the scope is global (on all the document).
2. The second parameter is an object, which contains the initialization options.
   

You can initialize the plugin with the following options:

```javascript
options = {
    buttonType: 'type', // 'material','outline'
    rounded: false, // (bool) - add class '.round', border-radius: 5px
    fill: false // Just for 'outline', fill effect on button:hover
}
```


## Methods applicable to any button

#### 1. Start loading
```javascript
var options = {
    loadginText: 'Your loading text',
    loadingIcon: bool(true),
    icon: '<i></i>'
}  
  
$('#selector').startLoading(options);
```
_Options of this method_
- The initial text is saved as an attribute: ```<button data-initial-text="$text">$text</button>```.
- Append text.
- If the 'icon' option is true then the html string is hung.


#### 2. Result status
```javascript
var options = { 
    initialText: data-initial-text
    status: '',//One of success, warning, error. Empty for default.
}
  
$('#selector').resultLoading(options);
```
There may be four types of results:
1. _success_:
    - statusText: 'Result text'
    - statusIcon: '<code><i></i></code>'
    - disalbed: bool(false)
2. _warning_
    - statusText: 'Result text'
    - statusIcon: '<code><i></i></code>'
    - disalbed: bool(false)
3. _error_
    - statusText: 'Result text'
    - statusIcon: '<i></i>'
    - disalbed: bool(false)
4. Default: The initial text saved by attribute with the method is returned <code>startLoading();</code>

#### 3. Remove loading

```javascript
var options = {
    text: 'Your custom text for the button'
}  
  
$('#selector').removeLoading(options);
```
_Actions of this mehod_
- text: data-initial-text 
- remove class: 'success','warning' or 'error'

#### 4. Disabled status
```javascript
var options = {}  
  
$('#selector').disabled(options);
```
_Actions of this mehod_
- Add class 'disabled'  
- Add attribute 'disabled'

##Helper classes and functions

#### Button block
The button has 100% width. ```html <button class="block"></button>```

### Icon rotating
If the loading icons are static, just add the rotating class.
```javascript
  $(selector).startLoading({
    'icon': '<i class="fas fa-cog rotating"></i>'
  })
 ```

## Errors

Elect errors that are returned by the plugin:

1. resultLoading(); If multiple states are initialized as true, returns an error can
be just one (success, warning, error).
