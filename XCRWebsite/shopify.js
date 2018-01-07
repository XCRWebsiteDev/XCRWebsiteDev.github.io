/*<![CDATA[*/

(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }

    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'toms-test-coffee-shop-2.myshopify.com',
            apiKey: 'f1b80a18b54a273d88633c3d1a28786a',
            appId: '6',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('product', {
                id: [719016362026],
                node: document.getElementById('product-component-4554e45332f'),
                moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "buttonDestination": "modal",
                        "variantId": "all",
                        "contents": {
                            "imgWithCarousel": false,
                            "variantTitle": false,
                            "options": false,
                            "description": false,
                            "buttonWithQuantity": false,
                            "quantity": false
                        },
                        "text": {
                            "button": "VIEW PRODUCT"
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px"
                                }
                            }
                        }
                    },
                    "cart": {
                        "contents": {
                            "button": true
                        },
                        "styles": {
                            "footer": {
                                "background-color": "#ffffff"
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": false,
                            "imgWithCarousel": true,
                            "variantTitle": false,
                            "buttonWithQuantity": true,
                            "button": false,
                            "quantity": false
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    }
                }
            });
        });
    }
})();
    /*]]>*/


//////////////////////////////////////////////////////////////////////////////////////////////////////////

    /*<![CDATA[*/

    (function () {
                    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
                    if (window.ShopifyBuy) {
                        if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
    } else {
        loadScript();
    }
                    } else {
        loadScript();
    }

                    function loadScript() {
                        var script = document.createElement('script');
                        script.async = true;
                        script.src = scriptURL;
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                        script.onload = ShopifyBuyInit;
                    }

                    function ShopifyBuyInit() {
                        var client = ShopifyBuy.buildClient({
        domain: 'toms-test-coffee-shop-2.myshopify.com',
                            apiKey: 'f1b80a18b54a273d88633c3d1a28786a',
                            appId: '6',
                        });

                        ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
            id: [719119482922],
            node: document.getElementById('product-component-8b220f5a1d7'),
            moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
            options: {
                "product": {
                    "buttonDestination": "modal",
                    "variantId": "all",
                    "contents": {
                        "imgWithCarousel": false,
                        "variantTitle": false,
                        "options": false,
                        "description": false,
                        "buttonWithQuantity": false,
                        "quantity": false
                    },
                    "text": {
                        "button": "VIEW PRODUCT"
                    },
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "calc(25% - 20px)",
                                "margin-left": "20px",
                                "margin-bottom": "50px"
                            }
                        }
                    }
                },
                "cart": {
                    "contents": {
                        "button": true
                    },
                    "styles": {
                        "footer": {
                            "background-color": "#ffffff"
                        }
                    }
                },
                "modalProduct": {
                    "contents": {
                        "img": false,
                        "imgWithCarousel": true,
                        "variantTitle": false,
                        "buttonWithQuantity": true,
                        "button": false,
                        "quantity": false
                    },
                    "styles": {
                        "product": {
                            "@media (min-width: 601px)": {
                                "max-width": "100%",
                                "margin-left": "0px",
                                "margin-bottom": "0px"
                            }
                        }
                    }
                },
                "productSet": {
                    "styles": {
                        "products": {
                            "@media (min-width: 601px)": {
                                "margin-left": "-20px"
                            }
                        }
                    }
                }
            }
        });
    });
                    }
                })();
/*]]>*/