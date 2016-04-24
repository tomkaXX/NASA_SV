(function(global){
    function Views(){} // interface

    Views.prototype = {
        renderLoginPage: function(){
            var that = this, element;
            app.clearBody();
            element.addClass('page-login');
            app.appBody.appendChild(element);


        },
        renderPendingPage: function(){
            app.clearBody();
            var element = dom("div.page-waiting", [
                dom('.anim-ufo-steals-cow'),
                dom("span.page-waiting-text", "")
            ]);



            app.appBody.appendChild(element);
        }
    }

    global.Views = Views;

})(window);
