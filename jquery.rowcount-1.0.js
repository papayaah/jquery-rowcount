/*
 * jQuery Tabe Row Count plugin 1.0
 *
 * http://programmingmind.com
 *
 * Copyright (c) 2010 David Ang
 *
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *   
 *   Version Changes
 *   
 *   1.0 July 6, 2010
 *    - Initial development & release
 */
(function($){    
	
    $.fn.rowCount = function(options) {
		
		var defaults = {
			startAt : 1,
			column : 1
		}
		
		var options = $.extend(defaults, options);
		
		var numRows = $(this).find("tbody > tr").size();
		var exist = $(this).find("th.rowCount").length;
		
		if (exist) {
			for (var i = 1; i <= numRows; i++) {
				var rowNum = options.startAt + i - 1;
				$(this).find("tbody > tr:nth-child(" + i + ") td:nth-child(" + options.column + ")").html(rowNum + ".");
			}
		}
		else {
					
			$(this).find("tr:first th:nth-child(" + options.column + ")").before("<th class='rowCount'>#</th>");			
			
			for (var i = 1; i <= numRows; i++) {
				var rowNum = options.startAt + i - 1;
				$(this).find("tbody > tr:nth-child(" + i + ") td:nth-child(" + options.column + ")").before("<td class='rowNumber'>" + rowNum + ".&nbsp;</td>");
			}
		}
	};
})(jQuery);