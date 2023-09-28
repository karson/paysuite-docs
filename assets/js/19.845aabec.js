(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{294:function(t,s,e){t.exports=e.p+"assets/img/api-url-request.86ccaaae.png"},295:function(t,s,e){t.exports=e.p+"assets/img/api-2.d9ad7f03.png"},296:function(t,s,e){t.exports=e.p+"assets/img/api-3.0a8b8a2b.png"},297:function(t,s,e){t.exports=e.p+"assets/img/api-4.242b3698.png"},322:function(t,s,e){"use strict";e.r(s);var a=e(14),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"payments-through-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payments-through-api"}},[t._v("#")]),t._v(" Payments through API")]),t._v(" "),s("h2",{attrs:{id:"generate-checkout-link-for-make-payment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate-checkout-link-for-make-payment"}},[t._v("#")]),t._v(" Generate Checkout Link For Make Payment")]),t._v(" "),s("p",[t._v("To generate the checkout link for make payment, send POST request to following URL:")]),t._v(" "),s("div",{staticClass:"language-txt extra-class"},[s("pre",{pre:!0,attrs:{class:"language-txt"}},[s("code",[t._v("https://paysuite.co.mz/api/request\n")])])]),s("h2",{attrs:{id:"headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#headers"}},[t._v("#")]),t._v(" Headers")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Accept")]),t._v(" "),s("td",[s("code",[t._v("application/json")])])]),t._v(" "),s("tr",[s("td",[t._v("Content-Type")]),t._v(" "),s("td",[s("code",[t._v("application/json")])])])])]),t._v(" "),s("h2",{attrs:{id:"request-body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[t._v("#")]),t._v(" Request Body")]),t._v(" "),s("p",[t._v("To create the request body, use a JSON object with the following key-value pairs and their corresponding values from the merchant profile credentials:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Key")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("private_key")]),t._v(" "),s("td",[t._v("The private key of the merchant profile (with 50 characters)")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v('"abcdef1234567890...xyz"')])]),t._v(" "),s("tr",[s("td",[t._v("currency")]),t._v(" "),s("td",[t._v("The currency used for the transaction (default: MZN)")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v('"MZN"')])]),t._v(" "),s("tr",[s("td",[t._v("callback_url")]),t._v(" "),s("td",[t._v("The URL where the confirmation will be sent through a POST request (background process)")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v('"http://domain.com/api/confirm/reference"')])]),t._v(" "),s("tr",[s("td",[t._v("error_return_url")]),t._v(" "),s("td",[t._v("The URL for handling failed payments")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v('"http://domain.com/product/1234/payment/error"')])]),t._v(" "),s("tr",[s("td",[t._v("success_return_url")]),t._v(" "),s("td",[t._v("The URL for handling successful payments")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v('"http://domain.com/product/1234/payment/success"')])]),t._v(" "),s("tr",[s("td",[t._v("is_test")]),t._v(" "),s("td",[t._v("Flag indicating whether it's a test or live mode (1 = Sandbox Mode, 0 = Live Mode)")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("1")])]),t._v(" "),s("tr",[s("td",[t._v("amount")]),t._v(" "),s("td",[t._v("The amount of the transaction ( > 0 )")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("100")])]),t._v(" "),s("tr",[s("td",[t._v("purpose")]),t._v(" "),s("td",[t._v("The purpose or description of the transaction")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v('"Testing the API"')])])])]),t._v(" "),s("p",[s("strong",[t._v("The callback will be sent by the server in background with parameters:")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("payment_id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" integer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("amount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("main_amount")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("currency")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("trxid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("gateway_name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("metadata")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" eg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" payment metadata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" phone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reference"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" entity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" comment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Example JSON object for the request body:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"private_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcdef1234567890...xyz"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currency"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MZN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"callback_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://domain.com/api/confirm/reference"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error_return_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://domain.com/product/1234/payment/error"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success_return_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://domain.com/product/1234/payment/success"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"is_test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"purpose"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Testing the API"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:e(294),alt:"Request Payment Link"}})]),t._v(" "),s("p",[t._v("Checkout Page:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(295),alt:"Payment API"}})]),t._v(" "),s("p",[t._v("Success Response:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(296),alt:"Payment API"}})]),t._v(" "),s("p",[t._v("Failed:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(297),alt:"Payment API"}})]),t._v(" "),s("p",[t._v("Full Documentation:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://paysuite.co.mz/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://paysuite.co.mz/api/documentation"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"api-responses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-responses"}},[t._v("#")]),t._v(" API Responses")]),t._v(" "),s("p",[t._v("The status code of a response indicates the success or failure of the request. The following status codes are possible:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("HTTP Status Code")]),t._v(" "),s("th",[t._v("Code")]),t._v(" "),s("th",[t._v("Message")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("200")]),t._v(" "),s("td",[t._v("PS-001")]),t._v(" "),s("td",[t._v("Request processed successfully")])]),t._v(" "),s("tr",[s("td",[t._v("500")]),t._v(" "),s("td",[t._v("PS-002")]),t._v(" "),s("td",[t._v("Internal Error")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("PS-003")]),t._v(" "),s("td",[t._v("Invalid API Key")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("PS-004")]),t._v(" "),s("td",[t._v("User is not active")])]),t._v(" "),s("tr",[s("td",[t._v("422")]),t._v(" "),s("td",[t._v("PS-005")]),t._v(" "),s("td",[t._v("Invalid Parameters")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("PS-006")]),t._v(" "),s("td",[t._v("Daily Request Limit Exceeded!")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("PS-007")]),t._v(" "),s("td",[t._v("Monthly Request Limit Exceeded!")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("PS-008")]),t._v(" "),s("td",[t._v("Invalid Currency")])])])]),t._v(" "),s("h3",{attrs:{id:"response-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-structure"}},[t._v("#")]),t._v(" Response structure")]),t._v(" "),s("p",[t._v("The response structure for both error and success responses is the same:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("|"),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PS-XXXX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Response error message"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("success")]),t._v(" property indicates whether the request was successful. If the request was successful, the "),s("code",[t._v("status")]),t._v(" property will be "),s("code",[t._v("PS-0001")]),t._v(" and the "),s("code",[t._v("message")]),t._v(" property will be a success message. If the request was not successful, the "),s("code",[t._v("status")]),t._v(" property will be an error code and the "),s("code",[t._v("message")]),t._v(" property will be an error message.")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("data")]),t._v(" property is only present in success responses. It contains the data that was returned by the API. The data structure will vary depending on the API endpoint that was called.")]),t._v(" "),s("p",[t._v("Here are some examples of error and success responses:")]),t._v(" "),s("p",[s("strong",[t._v("Error response")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PS-003"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Invalid API Key"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("Success response")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"success"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PS-0001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Payment created successfully"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"checkout_url"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://paysuite.co.mz/customer/checkout/eyJpdiI6IjRXUnBVcWVsUzBpcHU3bC9ZQWNlV0E9PSIsInZhbHVlIjoiTmdkaDBzUUNtSUowSENQVzRmR3RCUT09IiwibWFjIjoiNWUzOTZlM2U4ZDk1MTZkY2Y4MGUyY2ZlZGIwNzc0MmYwY2IyM2NjNzdmODUzMWQ4OWY2M2QxZDdjNjEwODZkNCIsInRhZyI6IiJ9"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"additional-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#additional-information"}},[t._v("#")]),t._v(" Additional information")]),t._v(" "),s("p",[t._v("The following additional information may be helpful:")]),t._v(" "),s("ul",[s("li",[t._v("The PaySuite API uses the JSON format for all responses.")]),t._v(" "),s("li",[t._v("The PaySuite API uses HTTP status codes to indicate the success or failure of a request.")]),t._v(" "),s("li",[t._v("The PaySuite API uses the "),s("code",[t._v("success")]),t._v(" property to indicate whether a request was successful.")]),t._v(" "),s("li",[t._v("The PaySuite API uses the "),s("code",[t._v("status")]),t._v(" property to indicate the status code of a response.")]),t._v(" "),s("li",[t._v("The PaySuite API uses the "),s("code",[t._v("message")]),t._v(" property to provide additional information about the status of a response.")]),t._v(" "),s("li",[t._v("The PaySuite API uses the "),s("code",[t._v("data")]),t._v(" property to return data from a successful request.")])])])}),[],!1,null,null,null);s.default=r.exports}}]);