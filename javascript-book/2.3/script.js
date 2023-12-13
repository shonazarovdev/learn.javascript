"use strict"

// этот код работает в современном режиме

alert("some code");
// "use strict" ниже игнорируется - он должен быть в первой строке

"use strict";

// строгий режим не активирован

/* Для консоли разработчика */
'use strict'; // <Shift+Enter для перехода на новую строку>
//  ...ваш код...
// <Enter для запуска>

(function() {
	'use strict';

	// ...ваш код...
})()