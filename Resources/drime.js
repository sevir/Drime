var drimeapp = drimeapp || {};

drimeapp.init = function(){
	i18n.init({
		fallbackLng: 'en',
		ns: { namespaces: ['ns.common'], defaultNs: 'ns.common'},
		getAsync: false,
		useLocalStorage: false
		},function(t) {
			//translate application
		$(".drimeapp").i18n();
	});
};

$(function(){
	drimeapp.init();
});