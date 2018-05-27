/**
 * magicBtn
 *
 * @requires jQuery (minimum) v.1.12.4
 * @see Documentation https://github.com/Spolaa/magicButtons/
 * @version 1.0.0
 * @author Stefano Gagliardi <stefano.gagliardi@sitisrl.it>
 */

var debug = false;

(function ( $ ) {

    /**
     * Init functions
     * Se non si instanzia $.magicBtn(); tutte le funzioni interne saranno indefinite.
     */
    $.magicBtn = function(selector, options) {


        var settings = $.extend({

            buttonType: '',
            rounded: false,
            fill: false

        }, options);



        //Check validation of buttonType: empty, material, outline
        if(settings.buttonType != '' && settings.buttonType != 'material' && settings.buttonType != 'outline') {
            settings.buttonType = 'material';
        }

        if(settings.buttonType != '') {
            var selector = selector + ' button';
            jQuery(selector).each(function () {
                jQuery(this).addClass('magicBtn');
                jQuery(this).addClass(settings.buttonType);
            });
        }

        if(settings.buttonType == 'outline' && settings.fill){
            //Add hover property
            jQuery(selector).each(function () {
                jQuery(this).addClass('fill');
            });
        }

        if(settings.rounded) {
            jQuery(selector).each(function () {
                jQuery(this).addClass('round');
            });
        }

        /**
         * First method, set btn status to loading
         *
         * @param options - 1. Loading text 2. Enable icon (spinner)
         * @return self - needed for jquery functions Chaining
         */
        $.fn.startLoading = function (options) {

            //Save initial dangerText
            $(this).attr('data-initial-text', $(this).text());

            // This is the easiest way to have default options.
            var settings = $.extend({

                // These are the defaults.
                loadingText: 'Send...',

                //Icon options
                loadingIcon: true,
                icon: '<i class="fas fa-spinner fa-spin fa-1x fa-fw"></i>',

            }, options );

            $(this).text(settings.loadingText);

            if(settings.loadingIcon) {
                $(this).append(settings.icon);
            }

            //This is required if you want to support the 'Chaining' mode.
            //Chaining: when you link five or six actions onto one selector.
            return this;

        }

        /**
         * Second method, remove loading and set finish status
         *
         * @param options - Button status: success, danger or error. For each status you can set text and icon
         *                  Default is initial status
         * @return self - needed for jquery functions Chaining
         */
        $.fn.resultLoading = function (options) {

            //In the case loadingStart() didn't use
            if($(this).attr('data-initial-text') === undefined) {
                var initialText = $(this).text();
                $(this).attr('data-initial-text',initialText);
            }

            var settings = $.extend({

                //Initial text
                initialText: $(this).attr('data-initial-text'),

                //Button status
                status: 'success',
                statusText: '',
                statusIcon: '',

                //Disabled Button
                disabled: false,

            }, options);

            if( settings.status != 'success' &&
                settings.status != 'warning' &&
                settings.status != 'error'
            ) {
                throw new Error('resutLoading must be one of: success,warning,error');
            }

            var disabledFunction = function (element) {
                element.attr('disabled',true);
                element.addClass('disabled');
            }

            //Success status
            if(settings.status == 'success') {

                if(settings.statusText == '') { settings.statusText = 'Success';}
                if(settings.statusIcon == '') { settings.statusIcon = '<i class="fas fa-check"></i>';}

                $(this).text(settings.statusText).append(settings.statusIcon);
                $(this).addClass('success');

                if(settings.disabled) {
                    disabledFunction($(this));
                }

                return this;
            }

            if(settings.status == 'warning') {

                if(settings.statusText == '') { settings.statusText = 'Warning';}
                if(settings.statusIcon == '') { settings.statusIcon = '<i class="fas fa-exclamation-circle"></i>';}

                $(this).text(settings.statusText).append(settings.statusIcon);
                $(this).addClass('warning');

                if(settings.disabled) {
                    disabledFunction($(this));
                }

                return this;
            }

            if(settings.status == 'error') {

                if(settings.statusText == '') { settings.statusText = 'Error';}
                if(settings.statusIcon == '') { settings.statusIcon = '<i class="fas fa-times"></i>';}

                $(this).text(settings.statusText).append(settings.statusIcon);
                $(this).addClass('error');

                if(settings.disabled) {
                    disabledFunction($(this));
                }

                return this;
            }

            //Default action
            $(this).text(settings.initialText);

            if(settings.disabled) {
                disabledFunction($(this));
            }

            return this;
        }

        /**
         * Third method, set btn to initial status (as when dom loaded, the same)
         *
         * @param options - 1. Text (defaul is initial text)
         * @return self - needed for jquery functions Chaining
         */
        $.fn.removeLoading = function (options) {

            var settings = $.extend({

                //Initial text
                text: $(this).attr('data-initial-text'),

            }, options);

            //Default action
            $(this).text(settings.text);
            $(this).removeClass('success warning error');
            return this;

        }

        /**
         * Five method, add disaled status: class 'disabled' & attr 'disabled'
         *
         * @return self
         */
        $.fn.disabled = function() {
            $(this).addClass('disabled');
            $(this).attr('disabled',true);
            return this;
        }

        /**
         * Fourth method, create ripple animation, fill iè
         *
         * @param obj e - event handler of jquery
         * @return bool false
         */
        $.fn.fillUpButton = function(e) {

            var target = e.target;
            /**
             * This function is very important, is native of vanilla js.
             * Method returns the size of an element and its position relative to the viewport.
             * The result is the smallest rectangle which contains the entire element.
             */
            var rect = target.getBoundingClientRect();
            var ripple = target.querySelector('.ripple');

            $(ripple).remove();
            ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.height = ripple.style.width = Math.max(rect.height, rect.width) + 'px';
            target.appendChild(ripple);
            var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
            var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
            ripple.style.top = top + 'px';
            ripple.style.left = left + 'px';
            return false;

        }

        /**
         * Ripple animation
         * If a button with plugin class, check plugin style; if it's material call a functions
         */
        $(document).on('click','button.magicBtn.material',function(e) {
            $(this).fillUpButton(e);
        });

    } //END $.magicBtn();

}(jQuery)); //To avoid conflicts with $, plese see < http://benalman.com/news/2010/11/immediately-invoked-function-expression/ >

//Helper functions
function cl(element) {
    if(debug) console.log('CL FUNCTION',element);
};
