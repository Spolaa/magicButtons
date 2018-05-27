/**d
* TEST SECTIONS
*/

var debug = true;
$(document).ready(function(){

    /**
     * Initialize plugin on first section with material buttons
     */
    $.magicBtn('#btnSection1',{
        buttonType: 'material',
    });

    /**
     * Initialize plugin on second section with outline buttons
     */
    $.magicBtn('#btnSection2',{
        buttonType: 'outline',
        rounded: true,
        fill: true
    });

    /**
     * Initialize plugin on third section with material
     */
    $.magicBtn('#btnSection3',{
        buttonType: 'material'
    });

    /**
     * Initialize plugin on fourth section without styles
     */
     $.magicBtn('#btnSection4',{
             'buttonType': ''
         });

    /**
     * Initialize plugin on fiveth section without styles
     */
    $.magicBtn('#btnSection5',{
        'buttonType': 'material'
    });

    /**
     * #btnSection1
     */

        //button 1
    var clickBtn1 = 'true';
    $('#btn1').click(function (e) {
        if(clickBtn1 == 'true') {
            $(this).startLoading({
                loadindText: 'Loading...',
                loadingIcon: true,
            });
            clickBtn1 = 'false';
        } else {
            click = 'true';
        }

    });

    //Button 2
    var clickBtn2 = 'true';
    $('#btn2').click(function(){
        if(clickBtn2 == 'true') {
            $(this).startLoading({
                loadingIcon: false
            });
            clickBtn2 = 'false';
        } else {
            $(this).resultLoading({
                status: 'success'
            });
            clickBtn2 = 'true';
        }
    });

    //Button 3
    var clickBtn3 = 'true';
    $('#btn3').click(function(){
        if(clickBtn3 == 'true') {
            $(this).startLoading({
                loadingIcon: false
            });
            clickBtn3 = 'false';
        } else {
            $(this).resultLoading({
                status: 'warning'
            });
            clickBtn3 = 'true';
        }
    });

    //Button 4
    var clickBtn4 = 'true';
    $('#btn4').click(function(){
        if(clickBtn4 == 'true') {
            $(this).startLoading({
                loadingIcon: false
            });
            clickBtn4 = 'false';
        } else {
            $(this).resultLoading({
                status: 'error'
            });
            clickBtn4 = 'true';
        }
    });

    //Button 5
    var clickBtn5 = 'true';
    $('#btn5').click(function(){

    });

    //Button 6
    $('#btn6').disabled();

    /**
     * #btnSection2
     */

    //Button 1
    var clickBtn21 = 'true';
    $('#btnOut1').click(function(){
        if(clickBtn21 == 'true') {
            $(this).startLoading({
                loadindText: 'Loading...',
                loadingIcon: true,
            });
            clickBtn21 = 'false';
        } else {
            clickBtn21 = 'true';
        }
    });

    //Button 2
    var clickBtn22 = 'true';
    $('#btnOut2').click(function(){
        if(clickBtn22 == 'true') {
            $(this).startLoading({
                loadingIcon: false
            });
            clickBtn22 = 'false';
        } else {
            $(this).resultLoading({
                status: 'success'
            });
            clickBtn22 = 'true';
        }
    });

    //Button 3
    var clickBtn23 = 'true';
    $('#btnOut3').click(function(){
        if(clickBtn23 == 'true') {
            $(this).startLoading({
                loadingIcon: false
            });
            clickBtn23 = 'false';
        } else {
            $(this).resultLoading({
                status: 'warning'
            });
            clickBtn23 = 'true';
        }
    });

    //Button 4
    var clickBtn24 = 'true';
    $('#btnOut4').click(function(){
        if(clickBtn24 == 'true') {
            $(this).startLoading({
                loadingIcon: false
            });
            clickBtn24 = 'false';
        } else {
            $(this).resultLoading({
                status: 'error'
            });
            clickBtn24 = 'true';
        }
    });

    //Button 5
    var clickBtn25 = 'true';
    $('#btnOut5').click(function(){

    });
    //Button 6

    $('#btnOut6').disabled();

    /**
     * #btnSection3
     */

    /**
     * #btnSection4
     */

    /**
     * #btnSection4
     */
    $('#btnRotating').click(function(){
        $(this).startLoading({
            'icon': '<i class="fas fa-cog rotating"></i>'
        })
    });
});

/**
 * Helper functions
 */

function cl(element) {
    if(debug) console.log('Element',element);
};
