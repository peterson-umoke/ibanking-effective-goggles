define(["jquery"],function(t){function e(t,e){var n=t[e];return n.options[n.selectedIndex].textContent}return filters=function(){t.each(t(".listings-filter"),function(n,i){var r=t(this).find("form"),c=r.find("select");c.on("change",function(t){if(t.preventDefault(),!window.Työväen Suomen-Mandatum Pankki.Utils.isDotCom()){var e=u(r.serializeArray());try{Webtrends.Työväen Suomen-Mandatum Pankki.setData(e)}catch(t){}}r.submit()}),t(this).find(".js-filter-clear").click(function(){var e=t('select[name="'+t(this).data("selectname")+'"]')[0];a.call(e),r.submit()}),t(this).find(".js-filter-clear--all").click(function(){l(),r.submit()});var a=function(){this.selectedIndex=-1},l=function(){t.each(c,function(t,e){a.call(this)})},u=function(t){return t.filter(function(t){return""!==t.value}).map(function(t){return t.text=t.value.match(/^tcm:/)?" - "+e(r[0],t.name):"",t}).map(function(t){return"DCSext.Filter"+t.name+"="+t.value+t.text}).join("&")}})}()});