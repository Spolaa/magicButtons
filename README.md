# magicBtn v.1.0.0 - jQuery plugin
Version: 1.0.0.  
Author: 95stefano.gagliardi@gmail.com  
License: [MIT](https://github.com/Spolaa/freedom-template/blob/master/LICENSE)

Try demo here ! [Demo]()

### Dependencied

Il seguente plugin è basato su jquery e le icone sono quelle di FontAwesome 5 'solid'.

- jQuery v 3.2.1 [Site](https://jquery.com/) - [License](https://jquery.org/license/)
- Font Awesome [Site](http://fontawesome.io/) - [License](http://fontawesome.io/license/)
## Get start
### Inclusion

_Js inclusion_  
```html
<script src="/magicBtn.js"></script>
```  

_Include normal css_  
```html
<link rel="stylesheet" href="/magicBtn.css">
```
 
_Include .scss file in your main.scss_  
```scss
@import "_magicBtn";"
```


###Nuova instanza del plugin

```javascript
/**
 * @param string selector - Target
 * @param obj options - Options to customize plugins
 */
 
$.magicBtn(selector,options);
```
1. Il primo parametro rappresenta il contenitore sul quale avrà effetto il plugin. Di default lo scope è globale.
2. Il secondo si tratta di un oggetto con il quale inizializzare il plugin.
   

Si può inizializzare il plugin con le seguenti opzioni:

```javascript
options = {
    buttonType: 'type', // 'material','outline'
    rounded: false, // (bool) - add class '.round', border-radius: 5px
    fill: false // Just for 'outline', fill effect on button:hover
}
```


## Metodi applicabili a qualsiasi pulsante

#### 1. Start loading
```javascript
var options = {
    loadginText: 'Your loading text',
    loadingIcon: bool(true),
    icon: '<i></i>'
}  
  
$('#selector').startLoading(options);
```
_Actions of this method_
- Il testo iniziale viene salvato come attributo: ```<button data-initial-text="$text">$text</button>```
- Append text
- If Icon options is true append the html string


#### 2. Result status
```javascript
var options = { 
    initialText: data-initial-text
    status: '',//One of success, warning, error. Empty for default.
}
  
$('#selector').resultLoading(options);
```
Possono esserci quattro tipi di result:
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
4. Default: Viene rimesso il testo iniziale salvato tramite attributo con il metodo <code>startLoading();</code>

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

## Errors

Elecono degli errori che sono restituiti dal plugin:

1. resultLoading(); Se più stati sono inizializzati come true, resituisce un error può
essere solo uno (success,warning,error).
