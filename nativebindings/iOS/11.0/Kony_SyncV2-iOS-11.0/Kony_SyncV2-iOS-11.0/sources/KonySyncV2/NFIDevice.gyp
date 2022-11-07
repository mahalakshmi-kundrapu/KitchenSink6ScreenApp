{
    'target_defaults': {
        'xcode_settings': {
            'ENABLE_BITCODE': 'NO',
            'SDKROOT': 'iphoneos',
            'DEFINES_MODULE': 'YES',
            'CLANG_ENABLE_MODULES': 'YES',
            'ALWAYS_SEARCH_USER_PATHS': 'NO',
            'DYLIB_INSTALL_NAME_BASE': '@rpath',
            'PRODUCT_BUNDLE_IDENTIFIER': 'com.kony.$(PRODUCT_NAME)',
            'CURRENT_PROJECT_VERSION': '1',
            'DYLIB_CURRENT_VERSION': '1.0.0',
            'DYLIB_COMPATIBILITY_VERSION': '1.0.0',
            'GCC_OPTIMIZATION_LEVEL': '0',
            'OTHER_LDFLAGS': [
                '-weak_framework Foundation -weak_framework CoreFoundation -weak_framework CFNetwork',
            ],
        },
        'mac_bundle': 1,
    },
    'targets': [
        {
            'target_name': 'NFIUtility',
            'type': 'shared_library',
            'sources': [
                '../src/NFIUtility/CallbackSupport.h',
                '../src/NFIUtility/CallbackSupport.m',
                '../src/NFIUtility/NFIUtility.h',
                '../src/NFIUtility/PointerSupport.h',
                '../src/NFIUtility/PointerSupport.m',
            ],
            'mac_framework_headers':[
                '../src/NFIUtility/CallbackSupport.h',
                '../src/NFIUtility/NFIUtility.h',
                '../src/NFIUtility/PointerSupport.h',
            ],
            'xcode_settings': {
                'ENABLE_BITCODE': 'NO',
                'INFOPLIST_FILE': '../src/NFIUtility/Info.plist'
            },
        },
        {
    "target_name": "NFIKonySyncV2", 
    "mac_framework_headers": [
        "KonySyncV2/device/NFIKonySyncV2Loader.h", 
        "KonySyncV2/device/NFIKonySyncV2.h"
    ], 
    "xcode_settings": {
        "ENABLE_BITCODE": "NO", 
        "HEADER_SEARCH_PATHS": [
            "../gen-src/KonySyncV2/thirdparty/KonySyncV2.framework/Headers", 
            "../gen-src/KonySyncV2/thirdparty/Task.framework/Headers"
        ], 
        "INFOPLIST_FILE": "KonySyncV2/Info.plist", 
        "FRAMEWORK_SEARCH_PATHS": "../gen-src/KonySyncV2/thirdparty/**", 
        "OTHER_LDFLAGS": []
    }, 
    "sources": [
        "<!@(ls KonySyncV2/device/*)"
    ], 
    "dependencies": [
        "NFIUtility"
    ], 
    "type": "shared_library", 
    "link_settings": {
        "libraries": [
            "../gen-src/KonySyncV2/thirdparty/KonySyncV2.framework", 
            "../gen-src/KonySyncV2/thirdparty/Task.framework"
        ]
    }
}],}