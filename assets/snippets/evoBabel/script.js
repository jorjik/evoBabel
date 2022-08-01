﻿window.addEvent("domready", function() {
    $('eB_relations').set({
        styles:{
            'position' : 'absolute',
            'top' : '1px',
            'right' : '1px',
            'background' : '#f1f1f1',
            'width':'192px',
            'border':'solid 1px #dddddd',
            'padding':'1px',
            'z-index': 99
        }
    });
    $$('#eB_relations a').set({
        styles:{
            'width':'178px',
            'display':'block',
            'height':'36px',
            'line-height':'20px'
        }
    });
    $$('#eB_relations img').set({
        styles:{
            'margin-right':'6px'
        }
    });
    $$('.eB_current').set({
        styles:{
            'width':'178px',
            'display':'block',
            'height':'20px',
            'line-height':'20px',
            'background':'#fafafa',
            'padding':'7px 8px 7px 4px',
            'border-top':'solid 1px #dddddd',
            'border-bottom':'solid 1px #dddddd'
        }
    });
    $$('.eB_row').set({
        styles:{
            'height':'auto'
        }
    });
    $$('#eB_relations h3').set({
        styles:{
            'height':'35px',
            'line-height':'35px',
            'margin':'0',
            'text-align':'center',
            'font-size':'14px',
            'font-weight':'bold'
        }
    });
    $("eB_relations").getParent().getParent().setStyle('display', 'none');
    $("tabGeneral").insertBefore($("eB_relations"), $("tabGeneral").firstChild);
})
